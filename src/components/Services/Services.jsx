import { useEffect, useState } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="min-h-screen w-11/12 mx-auto">
            <div className="flex justify-between lg:flex-row flex-col gap-8 mt-12">
                <div className="p-5 flex-1 space-y-10 basis-2/4">
                    <p className='text-[#FF6868] md:text-lg md:text-left text-center text-sm uppercase tracking-widest'>Our Story & Services</p>
                    <h1 className="lg:text-5xl md:text-6xl text-3xl mt-4 mb-5 font-extrabold text-black line leading-tight">Our Culinary Journey And  <span className="text-[#39DB4A]">Services</span></h1>
                    <p className="lg:text-xl md:text-lg text-base font-medium text-[#4A4A4A] leading-tight text-justify">Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                </div>
                <div className="flex justify-center basis-2/4">
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-5 justify-items-center">
                        {
                            services.map(service => <Service key={service.id} service={service}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;