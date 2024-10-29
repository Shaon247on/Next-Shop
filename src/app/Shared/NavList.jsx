"use client"
import Button from '@/src/Components/Button';
import { Link as ScrollLink } from 'react-scroll';

const NavList = ({button=true}) => {
    return (
        <>
            <div className="flex items-center lg:gap-3 xl:gap-0 list-none">
                <ScrollLink                    
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Home</li></ScrollLink>
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={400}
                    offset={-50}                    
                    ><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">About Us</li></ScrollLink>
                <ScrollLink
                    to="services"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Services</li></ScrollLink>
                <ScrollLink
                    to="projects"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Projects</li></ScrollLink>
                <ScrollLink
                    to="testimonials"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Testimonials</li></ScrollLink>
                <ScrollLink
                    to="contact"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl xl:ml-8 font-medium hover:text-white">Contact</li></ScrollLink>
            </div>
            <div className={`flex gap-3 xl:gap-6 xl:ml-3 ${button? "inline":"hidden"}`}>
                {/* <ThemeSwitcher /> */}
                <Button text={"Download CV"} />
            </div>
        </>
    );
};

export default NavList;