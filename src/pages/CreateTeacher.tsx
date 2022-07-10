import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useCreateTeacherMutation } from "../graphql/generated";


export function CreateTeacher() {

    const navigate = useNavigate()


    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [avatarURL, setAvatarURL] = useState('');

    const [createTeacher, { data, loading }] = useCreateTeacherMutation()

    async function handleTeacherCreate(event: FormEvent) {
        event.preventDefault()

        createTeacher({
            variables: {
                name,
                bio,
                avatarURL
            }
        })

        console.log(name)

    }

  return (

            <div>
            <Header />
                <form onSubmit={handleTeacherCreate} className="flex flex-col gap-2 w-full">
                    <input 
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Seu nome completo" 
                    onChange={event => setName(event.target.value)}
                    />


                    <input
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Digite sua biografia"
                    onChange={event => setBio(event.target.value)}
                    />

                    <input
                    className="bg-gray-900 rounded px-5 h-14"
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Coloque o link do seu avatar"
                    onChange={event => setAvatarURL(event.target.value)}
                    />

                    <button
                    disabled={loading}
                    type="submit"
                    className="mt-4 bg-purple-700 rounded font-bold text-sm uppercase py-5 hover:bg-purple-900 transition-colors disabled:opacity-50"
                    >
                        Criar novo professor
                    </button>
                </form>
                </div>
            
  )
}
