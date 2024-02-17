import logo from "/logo.png";
import alertIcon from "/alerts.svg";
import trainingIcon from "/training.svg";
import automationIcon from "/automation.svg";
import portfollioIcon from "/portfollio.svg";
import tradingIcon from "/trading.svg";
import Icon from "../utils/icon";
import { useState } from "react";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <aside
        className={`max-sm:hidden absolute z-10 inset-0 h-screen bg-black ease-linear duration-300   ${
          isHovered ? "w-48 p-8" : " w-20 p-2"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={logo}
          alt="logo"
          className={` object-contain ${isHovered ? " h-16" : "h-16"}`}
        />

        <ul className="py-6 mx-auto">
          <li className=" flex space-x-4 items-center group cursor-pointer py-2">
            {!isHovered ? (
              <img
                src={alertIcon}
                alt="automation Icon"
                className="h-6 mx-auto my-1"
              />
            ) : (
              <Icon
                name="alerts"
                color={"text-white"}
                hoverColor={"text-blue"}
              />
            )}

            <h1
              className={`capitalize text-white font-semibold text-lg group-hover:text-blue ${
                !isHovered ? "hidden" : ""
              }`}
            >
              alerts
            </h1>
          </li>
          <li className=" flex space-x-4 items-center group cursor-pointer py-2">
            {!isHovered ? (
              <img
                src={trainingIcon}
                alt="training Icon"
                className="h-5 mx-auto my-1"
              />
            ) : (
              <Icon
                name="training"
                color={"text-white"}
                hoverColor={"text-blue"}
              />
            )}

            <h1
              className={`capitalize text-white font-semibold text-lg group-hover:text-blue ${
                !isHovered ? "hidden" : ""
              }`}
            >
              training
            </h1>
          </li>
          <li className=" relative flex gap-x-4 items-center group cursor-pointer py-2">
            <div className=" absolute w-36 h-full hidden group-hover:flex group-hover:animate-wiggle  bg-blue shadow-md shadow-blue rounded-lg">
              <h1 className="text-white  font-bold text-center m-auto">
                Coming Soon
              </h1>
            </div>

            <img
              src={automationIcon}
              alt="automation Icon"
              className={`ease-in duration-300 ${
                isHovered ? "h-5" : "h-6 mx-auto my-1"
              }`}
            />
            <h1
              className={`capitalize text-lightGray font-semibold text-lg font-poppins ${
                !isHovered ? "hidden" : ""
              } `}
            >
              automation
            </h1>
          </li>
          <li className=" relative flex gap-x-4 items-center group cursor-pointer py-2">
            <div className=" absolute w-36 h-full hidden group-hover:flex group-hover:animate-wiggle  bg-blue shadow-md shadow-blue rounded-lg">
              <h1 className="text-white  font-bold text-center m-auto">
                Coming Soon
              </h1>
            </div>

            <img
              src={portfollioIcon}
              alt="portfollio Icon"
              className={`ease-in duration-300 ${
                isHovered ? " h-5" : "h-6 mx-auto my-1"
              }`}
            />
            <h1
              className={`capitalize text-lightGray font-semibold text-lg font-poppins ${
                !isHovered ? "hidden" : ""
              } `}
            >
              portfollio
            </h1>
          </li>
          <li className=" relative flex gap-x-4 items-center group cursor-pointer py-2">
            <div className=" absolute w-36 h-full hidden group-hover:flex group-hover:animate-wiggle  bg-blue shadow-md shadow-blue rounded-lg">
              <h1 className="text-white  font-bold text-center m-auto">
                Coming Soon
              </h1>
            </div>

            <img
              src={tradingIcon}
              alt="trading Icon"
              className={`ease-in duration-300 ${
                isHovered ? " h-5" : "h-6 mx-auto my-1"
              }`}
            />
            <h1
              className={`capitalize text-lightGray font-semibold text-lg font-poppins ${
                !isHovered ? "hidden" : ""
              } `}
            >
              trading
            </h1>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
