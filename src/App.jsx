import "./App.css";
import Banner from "./Component/Banner/Banner";
import CustomerTicket from "./Component/CustomerTicket/CustomerTicket";
import Navbar from "./Component/Navbar/Navbar";

const fetchTickets = async () => {
   const res = await fetch("/tickets.json");
   return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
   return (
      <>
         <Navbar></Navbar>
         <div className="bg-gray-200">
            <Banner></Banner>
            <CustomerTicket ticketsPromise={ticketsPromise}></CustomerTicket>
         </div>
      </>
   );
}

export default App;
