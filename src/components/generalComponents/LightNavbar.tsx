import { FiMenu } from "react-icons/fi";
import Logo from "../../assets/img/Logo.webp";
import blueLogo from "../../assets/img/blueLogo.webp";
import greenLogo from "../../assets/img/greenLogo.webp";
import orangeLogo from "../../assets/img/orangeLogo.webp";
import whiteLogo from "../../assets/img/whiteLogo.webp";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import NavOne from "../../assets/img/nav1.webp";
import NavTwo from "../../assets/img/nav2.webp";
import NavThree from "../../assets/img/nav3.webp";
import { Link, useLocation } from "react-router-dom";
const LightNavbar = () => {
  const [nav, setNav] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [route, setRoute] = useState("");
  const toggleNav = () => {
    setNav(!nav);
    setIndustries(false);
  };
  const toggleIndustries = () => {
    setIndustries(!industries);
  };

  const location = useLocation();
  return (
    <nav
      className={`flex justify-between items-center ${
        location.pathname === "/petrochemical" ? "bg-[#141C21]" : ""
      } py-5 relative px-[5%] ${
        industries
          ? location.pathname === "/agropark"
            ? "bg-[#D2EB75]"
            : location.pathname === "/petrochemical"
            ? "bg-[#141C21]"
            : location.pathname === "/infrastructure"
            ? "bg-[#08529D]"
            : "bg-[#BB1B06]"
          : location.pathname === "/petrochemical"
          ? "bg-[#141C21]"
          : "bg-white"
      }`}
    >
      {industries ? (
        <img src={whiteLogo} alt="logo" />
      ) : location.pathname === "/agropark" ? (
        <img src={greenLogo} alt="logo" />
      ) : location.pathname === "/petrochemical" ? (
        <img src={orangeLogo} alt="logo" />
      ) : location.pathname === "/infrastructure" ? (
        <img src={blueLogo} alt="logo" />
      ) : (
        <img src={Logo} alt="logo" />
      )}
      <div
        className={`flex ${
          industries
            ? location.pathname === "/agropark"
              ? "text-[#182F2A]"
              : location.pathname === "/petrochemical"
              ? "text-white"
              : "text-white"
            : location.pathname === "/petrochemical"
            ? "text-white"
            : "text-[#141C21]"
        } text-[17px] font-MerriRegular items-center ${
          nav ? "block" : "hidden"
        } space-x-[20px]`}
      >
        <Link to="/about">About</Link>
        <div
          className={`flex items-center ${
            industries ? "border-b-[1.5px] border-[#E6712D] text-[#E6712D]" : ""
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
              className={
                location.pathname === "/agropark"
                  ? "text-[#182F2A]"
                  : location.pathname === "/petrochemical"
                  ? "text-[#E6712D]"
                  : location.pathname === "/infrastructure"
                  ? "text-[#182F2A]"
                  : "text-[#BB1B06]"
              }
            />
          ) : (
            <FiMenu
              size={23}
              className={
                location.pathname === "/agropark"
                  ? "text-[#182F2A]"
                  : location.pathname === "/petrochemical"
                  ? "text-[#E6712D]"
                  : location.pathname === "/infrastructure"
                  ? "text-[#182F2A]"
                  : "text-[#BB1B06]"
              }
            />
          )}
        </button>
      </div>
      {industries &&
        (location.pathname === "/petrochemical" ? (
          <div className="bg-[#141C21] flex flex-col items-center border-t-[1.5px] border-white absolute left-0 right-0 z-40 top-[110px]">
            <div>
              <h1 className="text-white px-[12px] py-8 font-MerriSemiBold text-[14px]">
                Our subsidiary companies
              </h1>
              <div className="flex">
                <Link to="agropark" onClick={() => setIndustries(false)}>
                  <div className="flex hover:bg-white p-[12px] rounded-[8px] items-center gap-6 mb-4">
                    <img
                      src={NavOne}
                      className="w-[144px] h-[88px] rounded-md"
                      alt="img1"
                    />
                    <div>
                      <h1 className="font-MerriSemiBold text-white">
                        Agro Park
                      </h1>
                      <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                        Jump right in — get an overview
                      </h1>
                      <h1 className="text-[#D0D5DD] font-MerriRegular text-[14px]">
                        of the basics and fundamenta...
                      </h1>
                    </div>
                  </div>
                </Link>
                <Link to="petrochemical" onClick={() => setIndustries(false)}>
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
                </Link>
                <Link to="infrastructure" onClick={() => setIndustries(false)}>
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
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div
            className={`w-full ${
              location.pathname === "/agropark"
                ? "bg-[#D2EB75]"
                : location.pathname === "/infrastructure"
                ? "bg-[#08529D]"
                : "bg-[#BB1B06]"
            } flex justify-center border-t-[1.5px] border-white absolute left-0 right-0 z-40 top-[110px]`}
          >
            <div>
              <h1 className="text-white px-[12px] py-8 font-MerriSemiBold text-[14px]">
                Our subsidiary companies
              </h1>
              <Link to="agropark" onClick={() => setIndustries(false)}>
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
              </Link>
              <Link to="petrochemical" onClick={() => setIndustries(false)}>
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
              </Link>
              <Link to="infrastructure" onClick={() => setIndustries(false)}>
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
              </Link>
            </div>
          </div>
        ))}
    </nav>
  );
};

export default LightNavbar;
