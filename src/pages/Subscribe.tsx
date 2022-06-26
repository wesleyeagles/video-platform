import { useState, FormEvent } from "react"
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {

    const navigate = useNavigate()


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        createSubscriber({
            variables: {
                name,
                email,
            }
        })

        await navigate('/event')
    }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
            <div className="max-w-[640px]">
                <h1>HAWK LOGO</h1>
                <h1 className="mt-8 text-[2.5rem] leading-tight">Lorem ipsum, <strong className="text-purple-700">dolor</strong> sit amet consectetur adipisicing <strong className="text-purple-700">elit.</strong></h1>
                <p className="mt-4 text-gray-200 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error eius nemo esse maxime minus voluptas atque laudantium. Odio aspernatur numquam dolorem dicta pariatur vero, rerum consectetur tempora sed. Veniam!</p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                <strong className="mb-6 text-2xl block">Inscreva-se gratuitamente</strong>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
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
                    type="email" 
                    name="" 
                    id=""
                    placeholder="Digite seu e-mail"
                    onChange={event => setEmail(event.target.value)}
                    />

                    <button
                    disabled={loading}
                    type="submit"
                    className="mt-4 bg-purple-700 rounded font-bold text-sm uppercase py-5 hover:bg-purple-900 transition-colors disabled:opacity-50"
                    >
                        Garantir minha participação
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
