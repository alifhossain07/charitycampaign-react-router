import { Outlet } from "react-router-dom"; // Import Outlet if you plan to use it
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet /> 
            <Footer></Footer>
        </div>
    );
};

export default Root;
