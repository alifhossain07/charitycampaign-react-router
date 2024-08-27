import { useLoaderData } from "react-router-dom";
import AllCategory from "../AllCategory/AllCategory";
import Banner from "../Banner/Banner";


const Home = () => {

    const allData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <AllCategory allData={allData}></AllCategory>
        </div>
    );
};

export default Home;