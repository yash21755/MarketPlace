import React from "react";
import { Link } from "react-router-dom";


const card = () => {
    return (
        <Link 
        to="/myuploads/upload+new+item"
         className="cursor-pointer h-72 w-72 m-5 ml-2 mr-2 border-spacing-2 border-2 border-slate-200  rounded bg-emerald-700 text-amber-200 inline-block  text-left px-2 py-2 transition-transform transform hover:scale-105">
                <div className='w-68 h-36 mb-3 bg-amber-100 text-emerald-900 text-9xl text-center align-middle font-semibold'>?</div>
                <h1 className='text-3xl font-bold mb-1 text-center'>SELL or REPORT</h1>
                <h1 className='text-3xl font-bold mb-1 text-center'>NEW ITEM</h1>
        </Link>
    );
}
 
export default card;             
