
import PropTypes from 'prop-types'

const Service = ({ service }) => {

    const { img, title, description } = service;
    return (
        <div className="max-w-sm p-6 space-y-4 text-center bg-white border border-gray-200 rounded-lg shadow">
            <div className='flex justify-center'><img src={img} alt="" /></div>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#5FE26C]">{title}</h5>
            <p className="mb-3 font-normal text-xl text-[#5FE26C]">{description}</p>
        </div>
    )
}

Service.propTypes = {
    service: PropTypes.object.isRequired
}

export default Service
