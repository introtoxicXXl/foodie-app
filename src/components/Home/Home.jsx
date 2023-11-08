import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import CustomersSay from "../CustomersSay/CustomersSay";
import PopularDish from "../PopularDish/PopularDish";

const Home = () => {
    return (
        <div className="">
        <Banner></Banner>
        <Catagories></Catagories>
        <PopularDish></PopularDish>
        <CustomersSay></CustomersSay>
        </div>
    );
};

export default Home;