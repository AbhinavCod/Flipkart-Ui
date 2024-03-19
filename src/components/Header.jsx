import React from 'react'
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import DropDownButton from './Dropdown';

const Header = () => {
  return (
    <div className='flex mb-auto gap-4 justify-between border-1 border-slate-100 shadow-md py-2'>
        <div>
            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg" alt="" />
        </div>

        <div className='flex flex-col '>
            <SearchBar />
        </div>

        <div className='flex gap-4'>
            <a href='/login'><button className='hover:bg-blue-500 rounded-md text-xl border-gray-400 hover:text-white py-2 px-4 '><span className='mx-2'><FontAwesomeIcon icon={faUser} /></span>Login</button></a>
            <a href='/login'><button className='hover:bg-blue-500 rounded-md text-xl border-gray-400 hover:text-white py-2 px-4 '><span className='mx-2'><FontAwesomeIcon icon={faShoppingCart} /></span>Cart</button></a>
            <DropDownButton label={"Login"} val1={"My Profile"} val2={"Wishlist"} val3={"My Cart"} val4={"My Accounts"} />
            <a href='/login'><button className='hover:bg-blue-500 rounded-md text-xl border-gray-400 hover:text-white py-2 px-4 '><span className='mx-2'><FontAwesomeIcon icon={faTruckFast} /></span>Become a seller</button></a>
        </div>
    </div>
  )
}

export default Header;