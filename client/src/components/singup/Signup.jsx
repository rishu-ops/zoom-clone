import banner from "../../assets/banner.png";
function Signup() {
  return (
    <div className=" md:flex h-screen items-center">
      <div className=" md:w-1/2 p-16">
        <img src={banner} alt="banner" />
      </div>
      <div className=" md:w-1/2 text-center p-3">
        <h1 className=" text-3xl md:text-5xl font-semibold my-5">Create Your Account</h1>
        <p>Enter your full name and password</p>
        <form className=" md:w-1/2 mx-auto flex flex-col text-center">
          <input
            className="border border-orange-900 p-4 my-2 rounded-2xl"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-orange-900 p-4 my-2 rounded-2xl"
            type="text"
            placeholder="Last name"
          />
          <input
            className="border border-orange-900 p-4 my-2 rounded-2xl"
            type="email"
            placeholder="Enter email"
          />
          <input
            className="border border-orange-900 p-4 my-2 rounded-2xl"
            type="password"
            placeholder="Password"
          />
          <button
            className="border bg-slate-200 p-4 my-2 rounded-2xl"
            type="submit"
          >
            continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
