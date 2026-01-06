import React from "react";
import { FaHome } from "react-icons/fa";
import { FaCircleInfo } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="w-80 bg-[#1f5bbd] h-screen text-[#F9FAFD] flex flex-col  ">
      <div className="p-6  text-4xl justify-items-center cursor-pointer">
        <h1>CoachAdmin</h1>
      </div>
      <div>
        <ul className="flex flex-col justify-center w-full p-6 text-2xl space-y-2">
          <li>
            <a
              href="#"
              className="flex w-full items-center gap-4 px-10 py-3 hover:bg-[#1a499c]"
            >
              <FaHome size={30} />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-full items-center gap-4 px-10 py-3 hover:bg-[#1a499c]"
            >
              <BsFillPeopleFill size={30} />
              <span>Students</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-full items-center gap-4 px-10 py-3 hover:bg-[#1a499c]"
            >
              <AiFillDollarCircle size={30} />
              <span>Fees</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-full items-center gap-4 px-10 py-3 hover:bg-[#1a499c]"
            >
              <FaCircleInfo size={30} />
              <span>About</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
