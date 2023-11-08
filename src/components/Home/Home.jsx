import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import CustomersSay from "../CustomersSay/CustomersSay";
import PopularDish from "../PopularDish/PopularDish";
import Services from "../Services/Services";

const Home = () => {
    return (
        <div className="">
        <Banner></Banner>
        <Catagories></Catagories>
        <PopularDish></PopularDish>
        <CustomersSay></CustomersSay>
        <Services></Services>
        </div>
    );
};

export default Home;