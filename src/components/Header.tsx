import { useState } from "react";
import { List, X } from "phosphor-react"

import { Logo } from "./Logo"
import { SideBar } from "./SideBar";

export function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
            <header className="flex fixed z-[100] items-center top-0 xs:justify-between md:justify-center w-full pl-4 p-5 bg-gray-700 border-b border-gray-600">

                <Logo width={200} height={34} />

                <div className="md:hidden flex items-center gap-1 lg:hidden">

                    <span className="text-sm text-gray-100">
                        Aulas
                    </span>

                    {toggleMenu 
                    ? 
                        <X 
                            size={28} 
                            className="text-blue-500 cursor-pointer" 
                            onClick={() => setToggleMenu(false)} 
                        /> 
                    : 
                        <List 
                            size={28} 
                            className="text-blue-500 cursor-pointer" 
                            onClick={() => setToggleMenu(true)} 
                        />
                    }

                </div>

                {toggleMenu ? (
                    <div className="md:hidden z-[100] fixed overflow-auto top-[4.6875rem] pb-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-0 transition-all duration-500 ease-in-out">

                        <nav onClick={() => setToggleMenu(false)}>
                            <SideBar />
                        </nav>

                    </div>
                ) : (
                    <div className="md:hidden z-[100] fixed overflow-auto top-[4.6875rem] pb-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-500 ease-in-out">

                        <nav>
                            <SideBar />
                        </nav>

                    </div>
                )}

            </header>
    )
}
