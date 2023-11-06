import './CatagoriesCard.css';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function CatagoriesCard({ categoric }) {
    const { strCategory, strCategoryThumb } = categoric;
    const [dishCount, setDishCount]  = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)
        .then(res=>res.json())
        .then(data=>setDishCount(data.meals))
    }, [strCategory])
    return (
        < div className='bg-white border border-gray-200 rounded-[20px] shadow p-5 card cursor-pointer ' >
            <div className='flex justify-center'>
                <img className="w-32 h-32 rounded-full" src={strCategoryThumb} alt="" />
            </div>
            <div className="p-5">
                <h5 className="mb-2 text-[#1E1E1E] tracking-tight text-center text-xl font-medium">{strCategory}</h5>
                <p className='text-sm text-[#555] font-medium text-center'>({dishCount.length} {strCategory})</p>
            </div>
        </div>
    )
}

CatagoriesCard.propTypes = {
    categoric: PropTypes.object.isRequired,
}

export default CatagoriesCard

