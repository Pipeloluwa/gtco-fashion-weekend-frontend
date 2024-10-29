import React from 'react'
import { FaSearch } from 'react-icons/fa';


interface ISearchUrl{
    searchUrl: string;
}

const SearchComponent:React.FC<ISearchUrl> = () => {
    return (
        <div className="relative mt-[20px]  flex items-center w-full mx-auto">
            <input type="text" placeholder="Search users" className="absolute border rounded-3xl p-4 pr-[145px] w-full sm:h-[53px] h-[40px] my-shadow-style sm:focus:pl-[68px] focus:pl-[40px] outline-orange-500 sm:pl-[64px] pl-[35px] sm:text-base text-sm"/>

            <FaSearch className="absolute left-0 sm:mx-[30px] mx-[12px] scale-[130%] text-gray-500"/>

            <button className="my-button-style rounded-3xl sm:text-[18px] text-sm my-0 absolute right-0 sm:py-[16px] sm:px-[29px] px-2 sm:h-[55px] h-[43px] shadow-sm shadow-gray-500">Search</button>
        </div>  
    );
}

export default SearchComponent