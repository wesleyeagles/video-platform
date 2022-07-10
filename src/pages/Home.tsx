import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { useGetLaunchsQuery } from "../graphql/generated";

interface LaunchProps {

    name: string;
    launchSlug: string;
}



export function Home(props: LaunchProps) {

    const { launchSlug } = useParams<{launchSlug: string}>()
    
    const { data } = useGetLaunchsQuery()
    console.log(data)

    const navigate = useNavigate()

    function tokenCheck() {
        const token = localStorage.getItem('key')

        if (token == null) {
            navigate('/login')
        }
    }


    useEffect(() => {
        tokenCheck()
    }, [])

   



    return (
        <div className="flex flex-col min-h-screen">
        <Header />

        

        <div className="flex gap-3">
            {data?.launches.map(launch => {
                return (
                    <Link to={`/launches/${launch.launchSlug}`}>
                    <div key={launch.name}>
                    <h1>{launch.name}</h1>
                    </div>
                    </Link>
                )
            })}
            <div>
                
            </div>
        </div>
       
        
        </div>
    )
}