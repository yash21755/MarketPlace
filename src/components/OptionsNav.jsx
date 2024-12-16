import React from "react";


const OptionsNav = () => {
    return ( 
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-centre justify-between gap-3 px-10 text-xl'>
        <h2 className='w-48 text-center rounded cursor-pointer hover:bg-emerald-800'>Lost and Found</h2>
        <h2 className='w-48 text-center rounded cursor-pointer hover:bg-emerald-800'>Marketplace</h2>
        <h2 className='w-48 text-center rounded cursor-pointer hover:bg-emerald-800'>Donate</h2>
        <h2 className='w-48 text-center rounded cursor-pointer hover:bg-emerald-800'>My Uploads</h2>
        </div>
    );
}
 
export default OptionsNav;