import { Link as ScrollLink } from 'react-scroll';

const SideMenuList = () => {
    return (
        <ul className="mt-10">
            <ScrollLink                    
                    href="/"><li className="xl:text-xl mt-5 ml-8 font-medium hover:text-white">Home</li></ScrollLink>
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={400}
                    offset={-50}                    
                    ><li className="xl:text-xl mt-5 ml-8 font-medium hover:text-white">About Us</li></ScrollLink>
                <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl mt-5 ml-8 font-medium hover:text-white">Services</li></ScrollLink>
                <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl mt-5 ml-8 font-medium hover:text-white">Projects</li></ScrollLink>
                <ScrollLink
                    to="Testimonials"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl mt-5 ml-8 font-medium hover:text-white">Testimonials</li></ScrollLink>
                <ScrollLink
                    to="section1"
                    smooth={true}
                    duration={400}
                    offset={-50}
                    href="/"><li className="xl:text-xl mt-5 ml-8 font-medium hover:text-white">Contact</li></ScrollLink>
        </ul>
    );
};

export default SideMenuList;