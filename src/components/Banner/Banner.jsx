import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className="flex justify-center items-center lg:flex-row md:flex-row flex-col-reverse">
            <div className=" space-y-6">
                <h1 className="lg:text-6xl md:text-4xl text-2xl mt-4 font-extrabold text-black line leading-tight">Dive into Delights Of Delectable <span className="text-[#39DB4A]">Food</span></h1>
                <p className="lg:text-2xl md:text-lg text-base font-medium text-[#4A4A4A] leading-tight">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
                <Button name='Order Now'></Button>
            </div>
            <div className="">
                <div className="relative flex justify-center">
                    <img className="w-full" src='https://i.ibb.co/t30z5Yg/Untitled-design.png' alt="" />
                </div>
            </div>

        </div>
    );
};

export default Banner;