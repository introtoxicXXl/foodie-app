import { Link } from 'react-router-dom';
import F from '../../assets/F.svg';
import oodi from '../../assets/oodi.svg';
const Footer = () => {
    return (

        <footer className="bg-white mt-11">
            <div className="mx-auto max-w-screen-xl p-4 py-6 lg:py-8  w-11/12">
                <div className="md:flex md:justify-between grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div className="mb-6 md:mb-0">
                        <Link to='/' className="flex mb-4">
                            <img src={F} alt="" />
                            <img src={oodi} alt="" />
                        </Link>
                        <p className='text-gray-500 md:text-lg text-sm'>Savor the artistry where <br /> every dish is a culinary <br /> masterpiece</p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold text-black">Useful links</h2>
                        <ul className="font-medium text-gray-500">
                            <Link to='/'><li className="hover:underline hover:text-[#39DB4A] cursor-pointer">Home</li></Link>
                            <Link to='/menu'><li className="hover:underline cursor-pointer hover:text-[#39DB4A] ">Menu</li></Link>
                            <Link to='/services'><li className="hover:underline cursor-pointer hover:text-[#39DB4A] ">Services</li></Link>
                            <Link to='/offers'><li className="hover:underline cursor-pointer hover:text-[#39DB4A] ">Offer</li></Link>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-black">Follow us</h2>
                        <ul className="font-medium text-gray-500">
                            <li className="mb-2">
                                <a href="https://github.com/introtoxicXXl" target='blank' className="hover:underline hover:text-[#39DB4A] ">Github</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.facebook.com/minhajul.abedin.Dk" target='blank' className="hover:underline hover:text-[#39DB4A] ">Facebook</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.instagram.com/introtoxic.xxl/" target='blank' className="hover:underline hover:text-[#39DB4A] ">Instagram</a>
                            </li>
                            <li className="mb-2">
                                <a href="https://www.linkedin.com/in/minhajulabedin648/" target='blank' className="hover:underline hover:text-[#39DB4A] ">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-black">Legal</h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <a href="" className="hover:underline hover:text-[#39DB4A] ">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="" className="hover:underline hover:text-[#39DB4A] ">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="flex md:justify-between md:flex-row flex-col-reverse">
                    <div className='text-center md:mt-0 mt-3'>
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline hover:text-[#39DB4A] ">foodi</a>. All Rights Reserved.
                        </span>
                    </div>
                    <div className="flex mt-4 space-x-5 justify-center sm:mt-0">
                        <a href="https://www.facebook.com/minhajul.abedin.Dk" target='blank' className="text-gray-500 hover:text-[#39DB4A]">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                                <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a href="https://discord.gg/AnTqNajU" className="text-gray-500 hover:text-[#39DB4A]">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </a>
                        <a href="https://github.com/introtoxicXXl" target='blank' className="text-gray-500 hover:text-[#39DB4A]">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clipRule="evenodd" />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;