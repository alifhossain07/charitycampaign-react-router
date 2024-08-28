import { useState } from "react";

const Banner = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchClick = () => {
        onSearch(searchTerm); // Pass the search term to the parent component
    };

    return (
        <div className="w-11/12 mx-auto flex flex-col md:mt-52 mt-36 space-y-10 items-center justify-center bg-red-100 md:h-[600px] h-[350px] bg-charity">
            <div>
                <h1 className="px-4 md:px-0 font-bold text-center md:text-4xl text-2xl text-white">
                    <span className="text-red-500 sha">Changing the World</span>, One Step at a Time
                </h1>
            </div>
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-error md:w-96 w-44 md:h-12 h-8"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Update the state with input value
                />
                <button
                    className="md:btn md:btn-error md:px-10 bg-red-600 px-5 rounded-xl hover:bg-red-300 duration-300 text-white md:text-lg"
                    onClick={handleSearchClick} // Call the search function on button click
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Banner;
