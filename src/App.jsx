
import { toast, ToastContainer} from "react-toastify";
import { Suspense, useState } from 'react'
import './App.css'
import Availablecards from './componants/Availablecards/Availablecards'


function handleclick() {
  toast(" we should solve your problem emedently");
}





 
async function fetachdata() {
  const res = await fetch("/players.json")
  return res.json() 

}

function App() {

const cardpromse = fetachdata()
 const [number, setCards] = useState(0)

  return (
    <>
      <div className="navbar bg-base-100 w-[1200px] mx-auto rounded-2xl shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
        >
          <li><a>Home</a></li>
          <li>Blog</li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Downlod</a></li>
          <li><a>Contact</a></li>
        </ul>
        </div>
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a>Home</a></li>
        <li><a>Blog</a></li>
        <li><a>FAQ</a></li>
        <li><a>Changelog</a></li>
        <li><a>Downlod</a></li>
        <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-indigo-500 to-blue-500"> + New Ticket</a>
      </div>
      </div>

      <div  className="banner-container translate-y-4  w-full">
      <div className="banner-item in-progress">
        <span>{number}</span>
        <p>In Progress</p>
      </div>
      <div className="banner-item resolved">
        <span>0</span>
        <p>Resolved</p>
      </div>
      </div>

<Suspense >
  <Availablecards  setCards={setCards} handleclick={handleclick} cardpromse  ={cardpromse} ></Availablecards>
</Suspense>





<div class="bg-black w-full h-[200px] text-white">
  <footer class="py-4 px-4 md:px-10"> 
    <div class="flex flex-col md:flex-row justify-between max-w-7xl mx-auto">
      <div class="mb-4 md:mb-0"> 
        <h3 class="text-lg font-semibold">CS — Ticket System</h3>
        <p class="text-sm mt-2">
          Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
        <div>
          <h4 class="text-md font-semibold">Company</h4>
          <ul class="mt-1 space-y-1 text-sm">
            <li><a href="#" class="hover:underline">About Us</a></li>
            <li><a href="#" class="hover:underline">Our Mission</a></li>
            <li><a href="#" class="hover:underline">Contact Sales</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-md font-semibold">Services</h4>
          <ul class="mt-1 space-y-1 text-sm">
            <li><a href="#" class="hover:underline">Products & Services</a></li>
            <li><a href="#" class="hover:underline">Customer Stories</a></li>
                      <li><a href="#" class="hover:underline">Download Apps</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-md font-semibold">Information</h4>
          <ul class="mt-1 space-y-1 text-sm">
            <li><a href="#" class="hover:underline">Privacy Policy</a></li>
                 <li><a href="#" class="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" class="hover:underline">Join Us</a></li>
          </ul>
                </div>
        <div>           
               <h4 class="text-md font-semibold">Social Links</h4>
          <ul class="mt-1 space-y-1 w-[120px] text-sm">
                     <li ><a  className="flex  " href=""> <img className="w-[20px] rounded-2xl" src="https://imgs.search.brave.com/A_pcMQ2Z2q_GuhbwTJ9b_ca28TPJ_xcNxiUKyL1lgC8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9iYW5u/ZXIyLmNsZWFucG5n/LmNvbS8yMDI0MDEx/OS9zdXQvdHJhbnNw/YXJlbnQteC1sb2dv/LWxvZ28tYnJhbmQt/aWRlbnRpdHktY29t/cGFueS1vcmdhbml6/YXRpb24tYmxhY2st/YmFja2dyb3VuZC13/aGl0ZS14LWxvZ28t/Zm9yLTE3MTA5MTYz/NzYyMTcud2VicA" alt="" />CS — Ticket System</a></li>
                     <li ><a  className="flex  " href=""> <img className="w-[20px] rounded-2xl" src="https://imgs.search.brave.com/7vcAQ7E2PisgTaOBWD7MqWxQ6VpaoCnz7GOOZThMDYU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9ibG9n/LndhYWxheHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIx/LzAxLzI5LTIuc3Zn" alt="" />CS — Ticket System</a></li>
                     <li ><a  className="flex  " href=""> <img className="w-[20px] rounded-2xl" src="https://imgs.search.brave.com/anFzZubCmVpSfFS5OeNvO3Ao_M5rz5PLcJF2wCLBRUM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2IyLzg0/LzAxL2IyODQwMWUx/ZWQ1NWUxZDk2MzU2/YTRiMGY0MTAxYWM0/LmpwZw" alt="" />CS — Ticket System</a></li>
           
            <li><a href="" >support@cst.com</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="text-center mt-4 text-xs">
      <p>&copy; 2025 CS — Ticket System. All rights reserved.</p>
    </div>
  </footer>
</div>










<ToastContainer/>


    </>
    )
}

export default App
