import { Outlet } from "react-router-dom"; // Import Outlet if you plan to use it
import Header from "../Header/Header";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet /> {/* Uncomment this to render child routes */}
        </div>
    );
};

export default Root;
