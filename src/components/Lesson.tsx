import { CheckCircle, Lock } from 'phosphor-react'
import { format, isPast } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames'

interface LessonProps {

    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {

    const { slug } = useParams<{slug: string}>()

    const isLessonAvailable = isPast(props.availableAt)
    const availableDateFormatted = format(props.availableAt, "EEEE' - 'd' de 'MMMM' - 'k'h'mm", {
        locale: ptBR,
    })

    const isActiveLesson = slug === props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
            <span className={classNames('text-gray-300', {
                'text-white font-bold': isActiveLesson
            })}>
                {availableDateFormatted}
            </span>

            <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-purple-700',{
                'bg-purple-700': isActiveLesson,
            })}>

                <header className="flex items-center justify-between">
                   {isLessonAvailable ? (
                     <span className={classNames('text-sm font-medium flex items-center gap-2', {
                        'text-purple-700': !isActiveLesson,
                        'text-white': isActiveLesson,
                     })}>
                     <CheckCircle size={20} />
                     Conteúdo liberado
                    </span>
                   ) : (


                    <span className={classNames('text-sm text-red-600 font-medium flex items-center gap-2', {
                        'text-white': isActiveLesson
                    })}>
                    <Lock size={20} />
                    Em breve
                    </span>
                   )}

                   {props.type == 'live' ? (
                    <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold', {
                        'border-white': isActiveLesson,
                    })}>
                        AO VIVO
                    </span>
                   ) : (
                    <span className={classNames('text-xs rounded px-2 py-[0.125rem] text-white border border-orange-600 font-bold' ,{
                        'border-white': isActiveLesson
                    })}>
                        VÍDEO PRÁTICO
                    </span>

                   )}

                </header>

                <strong className={classNames(' mt-5 block', {
                    'text-gray-200': !isActiveLesson,
                    'text-white': isActiveLesson
                })}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}