import { useState } from 'react';
import hero_pic from '../assets/tech_illustration_gears.svg';
import Navbar from '../components/Navbar.jsx';
function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className = "flex flex-col h-screen">
        {/* Navbar */}
        <Navbar/>
        {/* Hero Section */}
        <div className= "flex flex-1">
          {/* Right Side Flex for Heading, Description and Buttons */}
          <div className = "flex flex-col justify-center w-3/5 bg-white">
            {/* Heading */}
            <div className = "text-3xl ml-50 font-bold">
              Simplify Customer Support with HelpyCentral
            </div>
            {/* Description */}
            <div className = "text-xl mt-5 ml-50 w-180">
            Easily manage support tickets, streamline team communication, and respond faster, all while providing a seamless customer experience. Empower your team and delight your customers with everything you need in one powerful, unified platform.
            </div>
            {/* Horizontal Flex box for Get Started and Contact Us Buttons */}
            <div className = "flex mt-10 ml-50">
              <div className = "bg-blue-500 rounded-2xl px-8 py-1 text-white font-semibold hover:bg-gray-400">
                Get Started
              </div>
              <div className = "border-2 border-blue-400 rounded-2xl px-8 ml-5 py-1 font-semibold hover:text-blue-400">
                Contact Us
              </div>
            </div>
          </div>
          {/* Left Side Flex for Image */}
          <div className = "flex w-2/5 items-center justify-start">
            <img src={hero_pic} className="h-1/2"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
