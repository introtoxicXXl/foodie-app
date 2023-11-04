import { Link, NavLink } from 'react-router-dom';
import F from '../../assets/F.svg';
import oodi from '../../assets/oodi.svg';
import { LuPhoneCall } from 'react-icons/lu';
import { BiSearch } from 'react-icons/bi';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import './Header.css';

const Header = () => {
    return (
        <nav className='flex items-center justify-between'>
            <Link to='/' className='flex cursor-pointer'>
                <img className="p-2 rounded-lg mr-1 bg-[#39DB4A]" src={F} alt="" />
                <img className="" src={oodi} alt="" />
            </Link>
            <div>
                <ul>
                    <NavLink to='/' className='mr-14 text-xl font-medium'>Home</NavLink>
                    <NavLink to='/menu' className='mr-14 text-xl font-medium'>Menu</NavLink>
                    <NavLink to='/services' className='mr-14 text-xl font-medium'>Services</NavLink>
                    <NavLink to='/offers' className='mr-14 text-xl font-medium'>Offer</NavLink>
                </ul>
            </div>
            <div className='flex items-center'>
                <BiSearch className='mr-5 text-xl'></BiSearch>
                <HiOutlineShoppingBag className='mr-5 text-xl'></HiOutlineShoppingBag>
                <Link to='/contact'>
                    <button className='flex items-center bg-[#39DB4A] text-xl px-7 py-4 rounded-3xl text-white'><LuPhoneCall className='mr-3'></LuPhoneCall> Contact</button>
                </Link>
            </div>
        </nav>
    );
};

export default Header;