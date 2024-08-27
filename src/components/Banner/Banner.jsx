const Banner = () => {
    return (
        <div className="w-11/12 mx-auto flex flex-col space-y-10 items-center justify-center bg-red-100 md:h-[600px] h-[350px] bg-charity">
        <div className="">
            <h1 className="px-4 md:px-0 font-bold text-center md:text-4xl text-2xl text-white"><span className="text-red-500 sha">Changing the World</span>, One Step at a Time</h1>
        </div>
           <div className="flex gap-4">
           <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-error md:w-96 w-44 md:h-12 h-8 " />
                <button className="md:btn md:btn-error md:px-10 bg-red-600 px-5 rounded-xl hover:bg-red-300 duration-300  text-white md:text-lg">Search</button>
           </div>
        </div>
    );
};

export default Banner;