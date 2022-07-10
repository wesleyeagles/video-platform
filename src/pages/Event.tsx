import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";


export function Event() {


    


    const navigate = useNavigate()

    const { lessonSlug } = useParams<{lessonSlug: string}>()
    


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
        <main className="flex flex-1 flex-col-reverse lg:flex-row">
        { lessonSlug 

        ? <Video lessonSlug={lessonSlug}/> 
        : <div className="flex-1"></div>
        
        }

        <Sidebar />
        </main>
        
        </div>
    )
}