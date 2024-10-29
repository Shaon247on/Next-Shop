"use client"
import { RiMenu5Line } from "react-icons/ri";
import { useState } from "react";
import SideMenuList from "./SideMenuList";
import Button from "@/src/Components/Button";
// import Logo from "./Logo";



const SideMenu = () => {
    const [toggle, setToggle] = useState(false)
    console.log(toggle);  
     
    return (
        <>
            <button onClick={() => setToggle(true)} className="mr-4 text-2xl block lg:hidden"><RiMenu5Line/></button>
            <div className={` absolute top-[0rem] left-0 w-[100%] animate__animated my-element block lg:hidden bg-white dark:bg-[#1E1E1E] ${toggle ? 'animate__slideInLeft' : "animate__slideOutLeft"} overflow-y-scroll  pb-8 h-[100vh] z-[100]`} >
                <div className="flex justify-between items-start">
                    <div>                       
                        <SideMenuList/>
                       
                    </div>
                    <button onClick={() => setToggle(false)} className="text-black text-lg pt-8 pr-16">X</button>
                </div>
                <div className="flex gap-7 flex-col w-[85%] mt-3 mx-auto">
                    
                    <Button text="Download CV"/>
                </div>
            </div>
        </>
    );
};

export default SideMenu;