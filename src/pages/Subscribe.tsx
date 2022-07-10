import { useState, FormEvent, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";


export function Subscribe() {
    const navigate = useNavigate()

    function tokenCheck() {
        const token = localStorage.getItem('key')

        if (token != null) {
            navigate('/')
        }
    }


    useEffect(() => {
        tokenCheck()
    }, [])


    

    const nameInput: any = useRef(null)


    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [errorName, setErrorName] = useState(false)
    const [errorToken, setErrorToken] = useState(false)

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault()

        createSubscriber({
            variables: {
                name,
                token,
            }
        })



        if (name == 'Wesley' || name == 'Jonatas' || name == 'Pamela' || name == 'Rafaela' || name == 'Gustavo' || name == 'Jeferson' || name == 'Mariana' || name == 'Mateus' || name == 'William' || name == 'Roger' || name == 'Gabriel' || name == 'Lucas' || name == 'Camila') {
            if (token == "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9") {
           

                localStorage.setItem("key", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")
                await navigate('/')
    
                
    
            } else {
                setErrorToken(true)
            }

            
        } 
        
        else {
            setErrorName(true)
            
        } return
        

       
        
    }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
        <div className="w-full max-w-[330px] md:max-w-[1100px] flex flex-col md:flex-row items-center justify-between mt-20 mx-auto">
            <div className="max-w-[540px]">
                <h1>HAWK LOGO</h1>
                <small>DEV MODE</small>
                <h1 className="mt-8 text-[2.5rem] leading-tight">Lorem ipsum, <strong className="text-purple-700">dolor</strong> sit amet consectetur adipisicing <strong className="text-purple-700">elit.</strong></h1>
                <p className="mt-4 text-gray-200 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint error eius nemo esse maxime minus voluptas atque laudantium. Odio aspernatur numquam dolorem dicta pariatur vero, rerum consectetur tempora sed. Veniam!</p>
            </div>

            <div className="p-8 bg-gray-700 border border-gray-500 rounded mt-5 md:mt-0 w-[330px] md:w-[400px]">
                <strong className="mb-6 text-2xl block">Acesse a plataforma</strong>

                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                  
                   
                   <label className="flex flex-col" htmlFor="">
                   {(errorName? <small className="text-red-600">Digite um nome válido</small> : null )}
                   <input
                    className={`bg-gray-900 rounded px-5 h-14  ${errorName? 'border border-red-600 placeholder:text-red-600 animate-pulse' : null}`}
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Seu nome completo" 
                    onChange={event => setName(event.target.value)}
                    onClick={() => setErrorName(false)}
                    />
                    </label>


                    <label className="flex flex-col" htmlFor="">
                    {(errorToken? <small className="text-red-600">Token inválido</small> : null )}
                    <input
                    className={`bg-gray-900 rounded px-5 h-14 ${errorToken? 'border border-red-600 placeholder:text-red-600 animate-pulse' : null}`}
                    type="text" 
                    name="" 
                    id=""
                    placeholder="Token de Acesso"
                    onChange={event => setToken(event.target.value)}
                    onClick={() => setErrorToken(false)}
                    />
                    </label>

                    <button
                    disabled={loading}
                    type="submit"
                    className="mt-4 bg-purple-700 rounded font-bold text-sm uppercase py-5 hover:bg-purple-900 transition-colors disabled:opacity-50"
                    >
                        Acessar
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}
