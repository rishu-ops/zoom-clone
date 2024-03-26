import { useState } from "react";
import { bannersingupImage } from "../../assets";

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
    <div className=" md:flex h-screen items-center">
      <div className=" md:w-1/2 p-16">
        <img src={bannersingupImage} alt="banner" />
      </div>
      <div className=" lg:w-2/3 text-center p-3">
        <h1 className=" text-3x md:text-4xl font-semibold my-8">
          Create Your Account
        </h1>
        <p>Enter your full name and password</p>
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
