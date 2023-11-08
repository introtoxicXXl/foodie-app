import { AiFillStar } from 'react-icons/ai';

const CustomersSay = () => {


    return (
        <div className="min-h-screen">
            <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col  mt-12">
                <div className="flex justify-center">
                    <img className="w-3/4 rounded" src='https://i.ibb.co/rwyJWbY/Untitled-design-2.png' alt="" />
                </div>
                <div className=" items-start p-5">
                    <p className='text-[#FF6868] md:text-lg md:text-left text-center text-sm uppercase tracking-widest'>Testimonials</p>
                    <h1 className="lg:text-4xl md:text-3xl text-2xl mt-4 mb-5 font-extrabold text-black line leading-tight">What Our Customers <br /> Say <span className="text-[#39DB4A]">About</span> Us</h1>
                    <p className="lg:text-xl md:text-lg text-base font-medium text-[#4A4A4A] leading-tight text-justify">“I had the pleasure of dining at Foodi last night, and I am still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                    <div className='flex justify-around mt-12'>
                        <div className="avatar-group -space-x-6">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/0ZFdJQj/Screenshot-35.png" />
                                </div>

                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/28Df0wC/b32daa2404d37df13cf06f5e790f496a.png" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://i.ibb.co/q06WkxR/574f1e3ba2f4c7fb95d69a4fecfb6471.png" />
                                </div>
                            </div>
                        </div>
                        <div className=''>
                            <h4 className='lg:text-2xl text-base font-semibold text-black'>Customer Feedback</h4>
                            <p className='flex items-center text-lg'><AiFillStar className='text-yellow-500'></AiFillStar> <span className='text-[#807E7E]'>(18.6k Reviews)</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersSay;