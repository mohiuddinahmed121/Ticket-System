import React from "react";

const Banner = () => {
   return (
      <div className=" bg-gray-300">
         <div className="max-w-[1200px] mx-auto flex justify-between items-center text-white py-20 gap-7">
            <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[600px] h-[200px] rounded-xl text-center">
               <h1 className="text-2xl mt-12">In-Progress</h1>
               <h1 className="text-4xl font-bold mt-2">{0}</h1>
            </div>
            <div className="bg-gradient-to-r from-[#54CF68] to-[#00827A] w-[600px] h-[200px] rounded-xl text-center">
               <h1 className="text-2xl mt-12">Resolved</h1>
               <h1 className="text-4xl font-bold mt-2">{0}</h1>
            </div>
         </div>
      </div>
   );
};

export default Banner;
