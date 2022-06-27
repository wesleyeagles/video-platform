import { Bug, Hamburger, HandbagSimple, List } from "phosphor-react";
import { useContext } from "react";
import { useDrawerContext } from "../contexts/MenuContext";

export function Header() {

    const { handleMenuClick} = useDrawerContext()

    


    return (
        <header className="w-full flex justify-center items-center py-5 bg-gray-700 border-b border-gray-600 p-8">
        <div className="flex-1"><h1 className="font-black">Hawk Logo</h1></div>
        <div>
                <div className="flex gap-6 lg:hidden">
                    <div onClick={handleMenuClick} className="flex gap-1 items-center">
                    <span>Vídeos</span>
                    <List size={28} color="#8800a3" weight="fill"/>
                    </div>
                </div>
        </div>
        </header>
    )
}