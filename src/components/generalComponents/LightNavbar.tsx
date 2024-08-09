import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/img/Logo.webp";
import whiteLogo from "../../assets/img/whiteLogo.webp";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NavOne from "../../assets/img/nav1.webp";
import NavTwo from "../../assets/img/nav2.webp";
import NavThree from "../../assets/img/nav3.webp";
import { Link } from "react-router-dom";
const LightNavbar = () => {
  const [nav, setNav] = useState(false);
  const [industries, setIndustries] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
    setIndustries(false);
  };
  const toggleIndustries = () => {
    setIndustries(!industries);
  };
  return (
    <nav
      className={`flex justify-between items-center py-5 relative px-[5%] ${
        industries ? "bg-[#BC1B06]" : "bg-white"
      }`}
    >
      {industries ? (
        <img src={whiteLogo} alt="logo" />
      ) : (
        <img src={Logo} alt="logo" />
      )}
      <div
        className={`flex ${
          industries ? "text-white" : "text-[#182736]"
        } text-[17px] font-MerriRegular items-center ${
          nav ? "block" : "hidden"
        } space-x-[20px]`}
      >
        <Link to="/about">About</Link>
        <div
          className={`flex items-center ${
            industries ? "border-b-[1.5px] border-white" : ""
          } gap-2`}
        >
          Industries
          <button onClick={toggleIndustries}>
            {industries ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
        <Link to="/news">News/Media</Link>
        <Link to="/career">Career</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="flex items-center space-x-[20px]">
        <div
          className={`text-[#667085] ${
            nav ? "hidden" : "block"
          } font-MerriLight text-[10px]`}
        >
          info@tmdkgroup.com
        </div>
        <div
          className={`text-[#667085] ${
            nav ? "hidden" : "block"
          } font-MerriLight text-[10px]`}
        >
          +234 900 900 9000
        </div>
        <button onClick={toggleNav}>
          {nav ? (
            <IoClose
              size={23}
              className={industries ? "text-white" : "text-[#BB1B06]"}
            />
          ) : (
            <FiMenu size={23} className="text-[#BB1B06]" />
          )}
        </button>
      </div>
      {industries && (
        <div className="w-full bg-[#BB1B06] flex justify-center border-t-[1.5px] border-white absolute left-0 right-0 z-40 top-[110px]">
          <div>
            <h1 className="text-white px-[12px] py-8 font-MerriSemiBold text-[14px]">
              Our subsidiary companies
            </h1>
            <div className="flex hover:bg-white p-[12px] rounded-[8px] items-center gap-6 mb-4">
              <img
                src={NavOne}
                className="w-[144px] h-[88px] rounded-md"
                alt="img1"
              />
              <div>
                <h1 className="font-MerriSemiBold text-white">Agro Park</h1>
                <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                  Jump right in — get an overview
                </h1>
                <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                  of the basics and fundamenta...
                </h1>
              </div>
            </div>
            <div className="flex hover:bg-white p-[12px] rounded-[8px] items-center gap-6 mb-4">
              <img
                src={NavTwo}
                className="w-[144px] h-[88px] rounded-md"
                alt="img2"
              />
              <div>
                <h1 className="font-MerriSemiBold text-white">
                  Petrochemicals
                </h1>
                <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                  The latest best practices and tips
                </h1>
                <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                  from the best in the industry. Le...
                </h1>
              </div>
            </div>
            <div className="flex hover:bg-white p-[12px] rounded-[8px] items-center gap-6 mb-4">
              <img
                src={NavThree}
                className="w-[144px] h-[88px] rounded-md"
                alt="img3"
              />
              <div>
                <h1 className="font-MerriSemiBold text-white">
                  Infrastructure
                </h1>
                <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                  Synthesis is the mysterious rabbit
                </h1>
                <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                  hole that all data scientists hav...
                </h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LightNavbar;
