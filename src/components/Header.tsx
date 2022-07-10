import { Bug, Hamburger, HandbagSimple, List } from "phosphor-react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDrawerContext } from "../contexts/MenuContext";

export function Header() {

    const { handleMenuClick} = useDrawerContext()

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    


    return (
        <header className="w-full flex justify-center items-center py-5 bg-gray-700 border-b border-gray-600 p-8">
       <Link  className="flex-1" to='/'><div><h1 className="font-black">Hawk Logo</h1></div></Link>
        <div>
                <div className="flex gap-6 lg:hidden">
                    <div onClick={handleMenuClick} className="flex gap-1 items-center">
                    <span>Vídeos</span>
                    <List size={28} color="#8800a3" weight="fill"/>
                    </div>
                </div>
        </div>
        <div>
         <span 
         className="block cursor-pointer"
         onClick={handleLogout}
         >
        LOGOUT
         </span>   
        </div>
        </header>
    )
}