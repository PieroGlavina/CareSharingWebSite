import React from 'react'
import {instagramLogo, mainLogo, tiktokLogo} from "../utils/index.js";
import {navList} from "../costants/index.jsx";
import CustomButton from "./CustomButton.jsx";

const NavBar = () => {
    return (
        <header className="w-full py-5 px-5 flex items-center justify-between rounded-b-4xl glassmorphism">
            <nav className="flex w-full screen-max-width">
                <img src={mainLogo} alt="careSharing" width={80} height={80} className="ml-5"/>

                <div className="flex flex-1 justify-center items-center">
                    {navList.map((nav) => (
                        <div key={nav} className="px-10 text-lg font-bold cursor-pointer hover:text-custom-blue transition-all max-md:hidden">
                            {nav}
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-10 mr-5 max-md:justify-end max-sm:hidden ">
                    <img src={instagramLogo} alt="search" width={32} height={32}/>
                    <img src={tiktokLogo} alt="bag" width={32} height={32}/>
                </div>


                <div className="flex items-center mx-5 max-sm:justify-end max-sm:flex-1">
                    <CustomButton title={"Contattaci!"}/>
                </div>


            </nav>


        </header>
    )
}
export default NavBar
