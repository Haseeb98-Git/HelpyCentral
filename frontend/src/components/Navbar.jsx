import Icon from '@mdi/react';
import { mdiFileTableBoxMultipleOutline } from '@mdi/js';
import {Link} from 'react-router-dom';

function Navbar(){
 
    return(
        <>
            {/* Top Navbar */}
            <div className="flex h-1/14 items-center bg-white drop-shadow-md/15">
                {/* Left Flexbox for Logo and Name */}
                <div className="flex w-1/2 space-x-2 px-15">
                {/* Logo */}
                <div className="ml-10">
                    <Icon path={mdiFileTableBoxMultipleOutline} size={1}/>
                </div>
                <div className = "font-bold">
                    HelpyCentral
                </div>
                </div>
                {/* Right flexbox for Page links */}
                <div className = "flex w-1/2 pl-35">
                <div className = "py-1 font-semibold hover:text-blue-400">
                    <Link to = "/">Home</Link>
                </div>
                <div className = "ml-10 py-1 font-semibold hover:text-blue-400">
                    <Link to = "/about">About</Link>
                </div>
                <div className = "border-2 border-blue-400 rounded-2xl ml-10 px-8 py-1 font-semibold hover:text-blue-400">
                    <Link to = "/login">Login</Link>
                </div>
                <div className=" bg-blue-400 rounded-2xl ml-8 px-8 py-1 text-white font-semibold text-shadow-lg hover:bg-gray-500">
                    <Link to ='/signup'>Signup</Link>
                </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;