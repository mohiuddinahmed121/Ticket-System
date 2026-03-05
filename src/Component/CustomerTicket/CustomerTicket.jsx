import React, { use, useState } from "react";
import calender from "../../assets/ri_calendar-line.png";
import { toast } from "react-toastify";

const CustomerTicket = ({ ticketsPromise, selectedTicket, setSelectedTicket }) => {
   const ticketsData = use(ticketsPromise);
   const [toggle, setToggle] = useState(true);

   const handleSelectedTicket = (ticketData) => {
      setSelectedTicket([...selectedTicket, ticketData]);
      toast("Ticket added successfully to Task Status");
   };
   const handleComplete = () => {
      toast("Task completed");
   };

   return (
      <div className="">
         <div className="max-w-[1300px] mx-auto py-10">
            <h2 className="text-3xl font-bold my-5">Customer Tickets</h2>
            <div className="flex justify-between gap-5">
               <div className="grid grid-cols-2  gap-5">
                  {
                     /* Map through the ticketsData and render each ticket */
                     ticketsData.map((tickets) => (
                        <div
                           key={tickets.id}
                           className={`w-[440px] h-[190px] shadow-gray-400 bg-white rounded-xl py-3 px-3 mb-2 ${selectedTicket.some((ticket) => ticket.id === tickets.id) ? "border-2 border-blue-500" : "border"}`}
                           onClick={() => {
                              (handleSelectedTicket(tickets), setToggle(false));
                           }}
                        >
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
               <div>
                  <div className="mb-5">
                     <h1 className="text-xl font-bold mb-2">Task Status</h1>
                     <div className="mb-2">
                        {toggle === true
                           ? "Select a ticket to add to Task Status"
                           : selectedTicket.map((ticket) => (
                                <div
                                   key={ticket.id}
                                   className="w-[350px] h-[120px] bg-white rounded-xl shadow-gray-300 py-5 px-5 mb-2"
                                >
                                   <h1 className="font-bold">{ticket.title}</h1>
                                   <button
                                      onClick={() => handleComplete()}
                                      className="btn btn-block btn-success mt-3"
                                   >
                                      Complete
                                   </button>
                                </div>
                             ))}
                     </div>
                  </div>
                  <div>
                     <h1 className="text-xl font-bold">Resolved Task</h1>
                     <p>No resolved tasks yet.</p>
                     <div className="bg-blue-200 w-[350px] h-[60pxn] rounded-xl px-2.5 py-4 showdow-gray-300 mt-3">
                        <h1 className="font-bold">Incorrect Billing Address</h1>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CustomerTicket;
