import { Bug } from "phosphor-react";

export function Header() {
    return (
        <header className="w-full flex justify-center items-center py-5 bg-gray-700 border-b border-gray-600 p-8">
        <div className="flex-1"><h1 className="font-black">Hawk Logo</h1></div>
        <div>
            <a href="">
                <div className="flex gap-6">
                    <Bug size={24} color="#8800a3" weight="fill"/>
                </div>
            </a>
        </div>
        </header>
    )
}