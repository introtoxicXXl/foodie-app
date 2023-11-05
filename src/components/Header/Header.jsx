import { Link, NavLink } from 'react-router-dom';
import F from '../../assets/F.svg';
import oodi from '../../assets/oodi.svg';
import { LuPhoneCall } from 'react-icons/lu';
import { BiSearch } from 'react-icons/bi';
import './Header.css';
import Button from '../Button/Button';

const Header = () => {
    return (
        <nav className='mt-4"'>
            <div className="navbar justify-between">
                <div className=" justify-center lg:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="space-y-2 flex flex-col dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li>
                                <NavLink to='/menu'>Menu</NavLink>
                            </li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/offers'>Offers</NavLink></li>
                            <li>
                                <Link className=''>
                                    <button className='flex items-center bg-[#39DB4A] hover:bg-[#39DB4A] btn lg:btn-lg md:btn-md btn-sm rounded-3xl text-white'><LuPhoneCall className=''></LuPhoneCall> Contact</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link to='/' className="flex justify-center lg:justify-start">
                    <img src={F} alt="" />
                    <img src={oodi} alt="" />
                </Link>
                <div className="hidden lg:flex">
                    <ul className="space-x-5 menu-horizontal px-1">
                        <NavLink className='text-xl font-medium hover:text-[#39DB4A]' to='/'>Home</NavLink>
                        <NavLink className='text-xl font-medium hover:text-[#39DB4A]' to='/menu'>Menu</NavLink>
                        <NavLink className='text-xl font-medium hover:text-[#39DB4A]' to='/services'>Services</NavLink>
                        <NavLink className='text-xl font-medium hover:text-[#39DB4A]' to='/offers'>Offers</NavLink>
                    </ul>
                </div>
                <div className="lg:justify-end lg:flex lg:space-x-5 md:space-x-3 space-x-3 text-lg">
                    <BiSearch class></BiSearch>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item bg-[#39DB4A] text-white">8</span>
                    </div>
                    <Link to='/contact' className='lg:block md:block hidden'>
                        <Button name='Contact' icon={<LuPhoneCall></LuPhoneCall>}></Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;