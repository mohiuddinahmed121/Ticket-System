import { useState } from "react";
import "./App.css";
import Banner from "./Component/Banner/Banner";
import CustomerTicket from "./Component/CustomerTicket/CustomerTicket";
import Navbar from "./Component/Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./Component/Footer/Footer";

const fetchTickets = async () => {
   const res = await fetch("/tickets.json");
   return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
   const [selectedTicket, setSelectedTicket] = useState([]);
   return (
      <>
         <Navbar></Navbar>
         <div className="bg-gray-200">
            <Banner selectedTicket={selectedTicket}></Banner>
            <CustomerTicket
               ticketsPromise={ticketsPromise}
               selectedTicket={selectedTicket}
               setSelectedTicket={setSelectedTicket}
            ></CustomerTicket>
         </div>
         <Footer></Footer>
         <ToastContainer />
      </>
   );
}

export default App;
