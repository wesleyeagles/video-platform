import { DefaultUi, Player, Youtube } from "@vime/react";
import { Browsers, CaretRight, FileArrowDown, MonitorPlay, Question, Student } from "phosphor-react";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../graphql/generated";


interface VideoProps {

    lessonSlug: string
}

export function Video(props: VideoProps) {

    const {data, loading} = useGetLessonBySlugQuery(
        {
            variables: {
                lessonSlug: props.lessonSlug
            },



        }
    ) 

    if (!data || !data.lesson) {
        return (
            <div className="flex-1">
                <p>Carregando...</p>
            </div>
        )
    }

    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player>
                        <Youtube videoId={data.lesson.videoId}  key={data.lesson.videoId}/>
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1 ">
                        <h1 className="text-2xl font-bold ">{data.lesson.title}</h1>
                        <p className="mt-4 text-gray-200 leading-relaxed">{data.lesson.description}</p>

                        {data.lesson.teacher && (
                            <div className="flex items-center gap-4 mt-6">
                            <img
                            className="h-16 w-16 rounded-full border-2 border-purple-700" 
                            src={data.lesson.teacher.avatarURL} 
                            alt="" />
    
                            <div className="leading-relaxed">
                                <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                                <span className="text-gray-200 text-sm">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                        )}

                    </div>

                    

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-small bg-purple-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-900 transition-colors">
                            <Browsers size={24}/>
                            Acesse nosso site
                        </a>

                        <a href="" className="p-4 text-small border border-purple-700 text-purple-700 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-purple-700 hover:text-white transition-colors">
                            <MonitorPlay size={24}/>
                            cronograma de vídeos
                        </a>
                        
                    </div>
                </div>




                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-purple-700  h-full p-6 flex items-center"><FileArrowDown size={40}/>
                           
                        </div>

                        <div className="py-6 leading-relaxe">
                            <strong className="text-2xl">Fazer download do material</strong>
                            <p className="text-sm text-gray-200 mt-2">Acesse o material disponibilizado no vídeo</p>
                        </div>

                        <div className="h-full p-6 flex items-center"><CaretRight size={24}/></div>
                    </a>


                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-purple-700  h-full p-6 flex items-center"><Student size={40}/>
                           
                        </div>

                        <div className="py-6 leading-relaxe">
                            <strong className="text-2xl">Academy</strong>
                            <p className="text-sm text-gray-200 mt-2">Conheça nosso programa de estudos, impulsionamos alunos a se tornarem futuras lideranças no mercado</p>
                        </div>

                        <div className="h-full p-6 flex items-center"><CaretRight size={24}/></div>
                    </a>

                    <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-purple-700  h-full p-6 flex items-center"><Question size={40}/>
                           
                        </div>

                        <div className="py-6 leading-relaxe">
                            <strong className="text-2xl">Dúvidas</strong>
                            <p className="text-sm text-gray-200 mt-2">Ficou com dúvidas? Entre já em contato com nossa equipe especializada</p>
                        </div>

                        <div className="h-full p-6 flex items-center"><CaretRight size={24}/></div>
                    </a>

                </div>




            </div>

            <div className="bg-gray-700 border-t border-gray-600 w-full h-10 mt-10 items-center flex p-8">
                <div className="flex-1 flex gap-6 items-center">
                    <h1 className="font-black">LOGO</h1>
                    <span className="text-sm text-gray-200">@Hawk - Todos direitos reservados</span>
                </div>

                <div className="flex gap-6">
                    <a className="font-bold text-sm text-gray-200" href="">Politicas de privacidade</a>
                </div>
            </div>
        </div>
    )
}