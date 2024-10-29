import logo from "@/public/next.svg"
import Image from "next/image";

const Logo = ({width='lg:w-[40px] xl:w-[67px]', height='lg:h-[40px] xl:h-[67px]', position=''}) => {
    return (
        <div className={`${position} flex items-center gap-3 xl:gap-5 lg:ml-0`}>
            {/* <Image src={logo} alt="Logo" className={`${width} ${height}`} /> */}
            <h1 className="lg:text-4xl xl:text-5xl "><span className="font-bold">M</span>umair</h1>
        </div>
    );
};

export default Logo;