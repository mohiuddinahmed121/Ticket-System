import React from "react";

const Footer = () => {
   return (
      <div>
         <footer className="footer sm:footer-horizontal bg-black text-white p-10">
            <aside>
               <h1 className="font-bold text-xl">CS—Ticket System</h1>
               <p>
                  A Customer Support Ticket System <br /> is a structured way to manage customer{" "}
                  <br />
                  problems. Instead of handling complaints <br /> randomly through calls, emails, or{" "}
                  <br />
                  DMs, every issue becomes a ticket <br /> with tracking, status, and priority.
               </p>
            </aside>
            <nav>
               <h6 className="footer-title">Services</h6>
               <a className="link link-hover">Products & Services</a>
               <a className="link link-hover">Customer Stories</a>
               <a className="link link-hover">Download Apps</a>
            </nav>
            <nav>
               <h6 className="footer-title">Company</h6>
               <a className="link link-hover">About us</a>
               <a className="link link-hover">Our Mission</a>
               <a className="link link-hover">Contact Sale</a>
            </nav>
            <nav>
               <h6 className="footer-title">Information</h6>
               <a className="link link-hover">Terms & Conditions</a>
               <a className="link link-hover">Privacy policy</a>
               <a className="link link-hover">Join Us</a>
            </nav>
            <nav>
               <h6 className="footer-title">Social Links</h6>
               <a className="link link-hover">Facebook</a>
               <a className="link link-hover">Twitter</a>
               <a className="link link-hover">Instagram</a>
            </nav>
         </footer>
         <hr />
         <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
            <aside>
               <p>
                  Copyright © {new Date().getFullYear()} - All right reserved by CS—Ticket System
               </p>
            </aside>
         </footer>
      </div>
   );
};

export default Footer;
