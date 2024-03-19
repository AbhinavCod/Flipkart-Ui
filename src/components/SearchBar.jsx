import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className='flex xl:w-96 md:w-46 items-start px-4 bg-gray-100 mb-6'>
        <span className='my-auto'><FontAwesomeIcon icon={faMagnifyingGlass} /></span><input className='py-4 bg-gray-100 outline-none ml-4 w-full' type='text' placeholder='Search for Products,Brands, and more'></input>
    </div>
  )
}

export default SearchBar;