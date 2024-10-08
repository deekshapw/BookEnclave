import React from 'react';
import Cards from "./Cards";
import kist from "../../public/kist.json";
import {Link} from "react-router-dom";

function Course() {
  return(
    <>
    <div className="max-w-screen-2xl conatiner mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
            <h1 className="text-2xl font-semibold md:text-4xl italic"> 
                We`re delighted to have you {" "}
                <span className="text-pink-500">Here! :)</span>
                </h1>
                <p className="mt-12">
                Stay focused, keep learning, and let us help you reach your full potential
                </p>
               <Link to="/">
               <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                    Back
                </button>
               </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
            {
                kist.map((item)=>(
                <Cards key={item.id} item={item}/>
            ))
            }
        </div>
    </div>
    </>
  )
 
  
}

export default Course
