import schedule from "../assets/schedule.svg";
import host from "../assets/host.svg";
import join from "../assets/join.svg";
import unknown from "../assets/unknown.png";
import logo from "../assets/logo.svg";
import tick from "../assets/tick.svg";

function Dashboard() {
  return (
    <div className="flex justify-between p-5 w-2/3 gap-5 float-right">
      <div className="w-2/3">
        <div className="shadow-md border rounded-lg p-5">
          <div className="flex justify-between items-start mb-4 ">
            <div className="flex justify-center items-start gap-3">
              <img src={unknown} className=" w-16 rounded-xl" alt="unknown" />
              <div>
                <h1 className=" text-2xl font-bold">Anil Kokkul</h1>
                <p>You are currently on a Basic Plan (Free)</p>
              </div>
            </div>
            <button className="border p-2 rounded-lg text-sm">
              Manage Plan
            </button>
          </div>
          <div className="  bg-[#f7f9fa] rounded-md p-3">
            <h1 className="mb-2">Included in your plan:</h1>
            <div className="flex gap-x-6 gap-y-2 flex-wrap">
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Meetings</span>
              </div>
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Whiteboard</span>
              </div>
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Team Chat</span>
              </div>
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Mail</span>
              </div>
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Calendar</span>
              </div>
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Clips</span>
              </div>
              <div className="flex justify-center items-center">
                <img src={logo} alt="logo" className=" inline" />
                <span>Notes</span>
              </div>
            </div>
            <p className="mt-2 text-[#0b5cff] font-semibold">
              View Plan Details
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="flex gap-4 justify-evenly p-3 border rounded-lg shadow-md">
          <div className=" flex flex-col justify-center items-center">
            <img src={schedule} alt="schedule" />
            <h1 className=" text-sm mt-1 font-semibold">Schedule</h1>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img src={join} alt="schedule" />
            <h1 className=" text-sm mt-1 font-semibold">Join</h1>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <img src={host} alt="schedule" />
            <h1 className=" text-sm mt-1 font-semibold">Host</h1>
          </div>
        </div>
        <div className="p-3 border mt-5 rounded-lg shadow-md">
          <div className="flex justify-between items-center py-2">
            <h1 className=" text-2xl font-semibold">Meetings</h1>
            <button className="text-[#0b5cff]">Visit Meetings</button>
          </div>
          <div className=" font-bold p-2 rounded-md mt-3 bg-[#f7f9fa]">
            No Upcoming Meetings
          </div>
          <div className=" text-center mx-auto mt-4 w-max p-1 text-sm rounded-md font-semibold border border-slate-800 cursor-pointer ">
            Test Audio and Video
          </div>
        </div>
        <div className="p-3 mt-5">
          <h1 className=" text-2xl font-bold">
            Do more with Zoom Workplace Pro
          </h1>
          <ul className=" mt-2">
            <li className="flex justify-start items-center gap-2">
              <img src={tick} alt="tick" />
              No 40-minute limit
            </li>
            <li className="flex justify-start items-center gap-2">
              <img src={tick} alt="tick" />
              Unlimited number of meetings
            </li>
            <li className="flex justify-start items-center gap-2">
              <img src={tick} alt="tick" />
              <span className=" bg-[#f7f9fa] p-1 text-sm text-[#0b5cff] ">
                NEW
              </span>
              AI Companion ✨
            </li>
            <li className="flex justify-start items-center gap-2">
              <img src={tick} alt="tick" />
              5GB of cloud recording storage
            </li>
            <li className="flex justify-start items-center gap-2">
              <img src={tick} alt="tick" />
              Access to game changing add-ons
            </li>
          </ul>
          <div className="">Upgrade to Pro</div>
          <div>View all Plans </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;