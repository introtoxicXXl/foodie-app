import { useEffect, useState } from "react";
import CatagoriesCard from "../CatagoriesCard/CatagoriesCard";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';

const Catagories = () => {
    const [catagories, setCatagories] = useState([]);
    const [showAll, setShowAll] = useState(false);



    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCatagories(data.categories))
    }, [])

    const displayedCategories = showAll ? catagories : catagories.slice(0, 4);
    const remaining = parseInt(catagories.length) - parseInt(displayedCategories.length)
    return (
        <div className="mt-14">
            <p className="text-[#FF6868] md:text-xl text-base font-medium tracking-widest text-center uppercase space-x-1">Customer Favorites</p>
            <h1 className="text-center lg:text-6xl md:text-5xl text-3xl font-bold text-black md:mt-7 mt-4">Popular Catagories</h1>
            <div className="mt-10 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-5 md:w-10/12 mx-auto">
                {
                    displayedCategories.map(categoric => <CatagoriesCard key={categoric.idCategory} categoric={categoric}></CatagoriesCard>)
                }
                {!showAll && (
                    <div className="bg-white border border-gray-200 rounded-[20px] shadow card cursor-pointer p-5 flex justify-center flex-col items-center font-bold" onClick={() => setShowAll(true)}>
                        <p className="flex items-center">Show All <BsFillArrowRightCircleFill className="ml-2"></BsFillArrowRightCircleFill></p>
                        <p className="space-x-2">
                            ({
                                remaining
                            } <span className="ml-1">Items</span> )
                        </p>

                    </div>
                )}
                {showAll && (
                    <div className="bg-white border border-gray-200 rounded-[20px] card shadow cursor-pointer p-5 flex justify-center items-center font-bold" onClick={() => setShowAll(false)}>
                        <p className="flex items-center">Show Less <BsFillArrowLeftCircleFill className="ml-2"></BsFillArrowLeftCircleFill></p>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Catagories;