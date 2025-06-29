import Navbar from '../components/Navbar.jsx';
const Login = ()=>{
    return(
        <>
        <div className = "flex flex-col h-screen">
            {/* Navbar */}
            <Navbar/>
            <div className= "flex flex-1"></div>
                {/* Background Flex box*/}
                <div className="flex h-screen justify-center items-center bg-gray-200">
                    {/* Login Box (flex box item)*/}
                    <div className="flex flex-col h-2/4 w-2/8 rounded-lg shadow-lg border-2 border-gray-300 bg-white">
                        {/* Login Heading*/}
                        <div className="font-bold mx-10 mt-5 text-4xl">
                            Login
                        </div>

                        {/* Description Text*/}
                        <div className="text-xl mx-10">
                            via your existing account
                        </div>

                        {/* Email field*/}
                        <div className="text-sm mx-10 mt-10 text-gray-500">
                            Email
                        </div>
                        <input className="border-2 mt-1 border-gray-300 rounded-sm w-4/5 h-9/100 mx-10 placeholder:text-sm px-2"
                        placeholder="Enter your email"/>

                        {/* Password field*/}
                        <div className="text-sm mx-10 mt-2 text-gray-500">
                            Password
                        </div>
                        <input className="border-2 mt-1 border-gray-300 rounded-sm w-4/5 h-9/100 mx-10 placeholder:text-sm px-2"
                        placeholder="Enter your password"/>
                        
                        {/* Login button*/}
                        <div className="border-2 text-center pt-1 mt-5 mx-10 rounded-sm w-4/5 h-9/100 bg-blue-500 font-semibold text-white text-sm text-shadow-sm hover:bg-gray-500">
                            Login
                        </div>
                        {/* Already have an account text */}
                        <div className="flex justify-center mt-2 mx-10">
                            <div className="text-sm text-gray-600">
                                Don't have an account?
                            </div>
                            <div className="ml-1 text-sm text-blue-600 hover:text-purple-500">
                                Signup
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Login;