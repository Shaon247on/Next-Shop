const Button = ({text}) => {
    return (
        <button className='lg:w-[9.5rem] xl:w-[11.75rem] p-3 md:p-4 lg:p-[1rem] xl:p-[1.125rem] bg-[#FD6F00] rounded-2xl text-white xl:text-[1.313rem]'>
            {text}
        </button>
    );
};

export default Button;