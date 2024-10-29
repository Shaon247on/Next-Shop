"use client"

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './Logo';
import { useEffect } from 'react';
import NavList from './NavList';
import SideMenu from './SideMenu';




const NavBarFlot = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>
            <div
                data-aos="fade-down"
                data-aos-delay="50"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-anchor="#navAnchor"
                className="nav_bar lg:px-[3.125rem] xl:px-[15.625rem] grid grid-cols-2 lg:grid-cols-10 xl:grid-cols-12 justify-between items-center z-[5] w-full h-[5rem] lg:h-[6.25rem]">

                <div className='lg:col-span-2 ml-[2.5rem] lg:ml-0 xl:ml-[2.5rem]'>
                    <Logo />
                </div>
                <div className="md:col-span-0 lg:col-span-8 xl:col-span-10 hidden lg:flex justify-end items-center xl:gap-14">
                    <ul className="flex items-center gap-3">
                        <NavList />
                    </ul>
                </div>
                <div className="col-span-1 xl:col-span-0 flex-1 md:mr-10  flex flex-row-reverse lg:flex-row justify-between items-center lg:hidden overflow-clip">
                    <SideMenu />
                </div>

            </div>
            <div id="navAnchor" className="absolute right-0 bottom-[0%]"></div>
        </>
    );
};

export default NavBarFlot;