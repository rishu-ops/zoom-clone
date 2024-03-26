import { useState } from "react";
import banner from "../../assets/banner.png";
import * as yup from "yup";

function Signup() {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", user);
  };
  return (
    <div className=" lg:flex h-screen items-center lg:mx-16">
      <div className=" md:w-1/3 hidden lg:block">
        <img src={banner} alt="banner" className=" xl:ml-36 ml-24" />
      </div>
      <div className=" lg:w-2/3 text-center p-3">
        <h1 className=" text-3x md:text-4xl mb-16 font-extrabold">
          Create Your Account
        </h1>
        <p className=" mb-8">Enter your full name and password</p>
        <form
          className=" lg:w-1/2 lg:max-w-80 max-w-96 mx-auto flex flex-col"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-orange-900 p-3 my-2 rounded-xl"
            type="text"
            placeholder="First name"
            name="fName"
            value={user.fName}
            onChange={handleChange}
          />
          <input
            className="border border-orange-900 p-3 my-2 rounded-xl"
            type="text"
            placeholder="Last name"
            name="lName"
            value={user.lName}
            onChange={handleChange}
          />
          <input
            className="border border-orange-900 p-3 my-2 rounded-xl"
            type="email"
            placeholder="Enter email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="border border-orange-900 p-3 my-2 rounded-xl"
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
          <button
            className="border bg-slate-200 p-3 my-2 rounded-xl text-gray-600 font-bold"
            type="submit"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
