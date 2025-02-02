import React from "react";


const LF = (props) => {
    return (
        <div className="cursor-pointer h-72 w-72 m-5 ml-2 mr-2 border-spacing-2 border-2 border-emerald-200  rounded bg-slate-200 text-black inline-block  text-left px-2 py-2 transition-transform transform hover:scale-105">
                <img className='w-72 h-36 mb-3' src={props.photo} alt="" />
                <h1 className='text-2xl font-bold '>{props.situation},{props.item}</h1>
                <h1 className="text-l font-semibold ">Location : {props.location}</h1>
                <h2 className="text-sm text-slate-600 font-semibold">Contact : {props.contact}</h2>
        </div>
    );
}
 
export default LF;