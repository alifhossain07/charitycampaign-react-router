import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCategory from "../AllCategory/AllCategory";
import Banner from "../Banner/Banner";

const Home = () => {

    const allData = useLoaderData();
    const [filteredData, setFilteredData] = useState(allData); // State to store filtered data



    const handleSearch = (searchTerm) => {
        
        if (searchTerm.trim() === "") {
            setFilteredData(allData); // If search term is empty, show all data
        } else {
            const filtered = allData.filter(data =>
                data.category.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredData(filtered); // Filter data based on the search term
        }
    };



    return (
        <div>
            <Banner onSearch={handleSearch} /> {/* Pass the search function to the Banner */}
            <AllCategory allData={filteredData} /> {/* Pass the filtered data to the AllCategory component */}
        </div>
    );
};

export default Home;
