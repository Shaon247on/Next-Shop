import Logo from "./Logo";
import NavBarFlot from "./NavBarFlot";
import NavList from "./NavList";
import SideMenu from "./SideMenu";


const NavBar = () => {

    return (
        <>
            <>
                <div className="grid grid-cols-2 lg:grid-cols-10 xl:grid-cols-12 justify-between items-center z-[5] w-full h-[5rem] lg:h-[6.25rem]">

                    <div className='lg:col-span-2'>
                        <Logo />
                    </div>
                    <div className="md:col-span-0 lg:col-span-8 xl:col-span-10 hidden lg:flex justify-end items-center xl:gap-14">
                        <ul className="flex items-center gap-3">
                            <NavList/>
                        </ul>
                    </div>
                    <div className="col-span-1 xl:col-span-0 flex-1 md:mr-10  flex flex-row-reverse lg:flex-row justify-between items-center lg:hidden overflow-clip -pr-20">
                        <SideMenu />
                    </div>

                </div>
                <div id="navAnchor" className="absolute right-0 bottom-[0%]"></div>
            </>
            <NavBarFlot />
        </>
    );
};

export default NavBar;