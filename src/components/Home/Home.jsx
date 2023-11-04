import { Outlet } from "react-router-dom";
import Header from "../Header/Header";


const Home = () => {
    return (
        <div className="container mx-auto mt-4">
        <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Home;