import React, { use } from "react";
import calender from "../../assets/ri_calendar-line.png";

const CustomerTicket = ({ ticketsPromise }) => {
   const ticketsData = use(ticketsPromise);
   console.log(ticketsData);
   return (
      <div className="">
         <div className="max-w-[1200px] mx-auto py-10">
            <h2 className="text-3xl font-bold my-5">Customer Tickets</h2>
            <div className="">
               {
                  /* Map through the ticketsData and render each ticket */
                  ticketsData.map((tickets) => (
                     <div className="w-[440px] h-[190px] shadow-gray-400 bg-white rounded-xl py-3 px-3 mb-2">
                        <div className="flex justify-between">
                           <h1 className="font-bold text-xl">{tickets.title}</h1>
                           <h3 className="bg-green-300 w-[120px] h-[25px] rounded-3xl px-3 text-center">
                              {tickets.status}
                           </h3>
                        </div>
                        <p className="mt-2">{tickets.description}</p>
                        <div className="flex justify-between mt-4">
                           <div className="flex justify-between gap-2">
                              <p>#{tickets.id}</p>
                              <p className="text-red-500">{tickets.priority} Priority</p>
                           </div>
                           <div className="flex justify-between gap-3">
                              <p>{tickets.customer}</p>
                              <p className="flex gap-1">
                                 <img src={calender} alt="Calendar" />
                                 {tickets.createdAt}
                              </p>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
      </div>
   );
};

export default CustomerTicket;
