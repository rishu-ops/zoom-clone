import React from "react";
import { Homeimage9 } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contex/Auth";
import axios from "axios";

const Navbar = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get("http://localhost:4000/logout");

      setAuth({
        ...auth,
        user: null,
        token: "",
      });

      localStorage.removeItem("auth");
      // Consider using a user-friendly alert library here
      alert("Logout successfully");
      navigate("/");
    } catch (error) {
      alert("Somthing Went Wrong While Logging Out ");
    }
  };
  return (
    <div className='flex  justify-between p-6 fixed top-0 left-0 right-0 bg-white z-10 '>
       
       <div> 
         <Link to='/' >
         <img src={Homeimage9} alt="" className='h-10' />
         </Link>
       </div>

      <div className="lg:flex md:flex gap-5 text-xl font-semibold hidden">
        <button className="border border-blue-600  rounded-2xl pl-2 pr-2 text-blue-700 ">
          {" "}
          Contact Sales{" "}
        </button>
        {!auth?.user ? (
          <>
            <button className="bg-blue-600 hover:bg-blue-700 text-white  pl-4 pr-4 w-[120px] rounded-2xl flex items-center justify-center">
              <Link to={"/signup"}>Sing Up </Link>
            </button>

        <button className='bg-blue-600 hover:bg-blue-700 text-white pl-4 pr-4  w-[120px] rounded-2xl flex items-center justify-center'> 
        <Link to={'/signin'}> Sing In </Link>
        </button>
        </>
) :  (
  <button className='bg-blue-600 hover:bg-blue-700 text-white rounded-2xl pl-2 pr-2 text-blue-700' onClick={handleLogout}>
   <Link to={'/signin'}> Log Out </Link>
     </button >

)  }
       </div>
        
    </div>
  );
};

export default Navbar;
