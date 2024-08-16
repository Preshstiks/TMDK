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
import otherOne from "../../assets/img/otheragro.webp";
import otherTwo from "../../assets/img/otherpetro.webp";
import otherThree from "../../assets/img/otherinfra.webp";
import AgroDark from "../../assets/img/agrodark.webp";
import InfraDark from "../../assets/img/infradark.webp";
const LightNavbar = () => {
  const [nav, setNav] = useState(false);
  const [industries, setIndustries] = useState(false);
  const [mobileIndustries, setMobileIndustries] = useState(false);
  const [navOneHover, setNavOneHover] = useState(false);
  const [navTwoHover, setNavTwoHover] = useState(false);
  const [navThreeHover, setNavThreeHover] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const handleNavOneMouseEnter = () => {
    setNavOneHover(true);
  };
  const handleNavTwoMouseEnter = () => {
    setNavTwoHover(true);
  };
  const handleNavThreeMouseEnter = () => {
    setNavThreeHover(true);
  };
  const handleNavOneMouseLeave = () => {
    setNavOneHover(false);
  };
  const handleNavTwoMouseLeave = () => {
    setNavTwoHover(false);
  };
  const handleNavThreeMouseLeave = () => {
    setNavThreeHover(false);
  };
  const toggleNav = () => {
    setNav(!nav);
    setIndustries(false);
  };
  const toggleIndustries = () => {
    setIndustries(!industries);
  };
  const toggleMobileIndustries = () => {
    setMobileIndustries(!mobileIndustries);
  };
  const toggleMobileMenu = () => {
    setMobileNav((prev) => !prev);
  };
  const closeMobileNav = () => {
    setMobileNav(false);
    setMobileIndustries(false);
  };
  const location = useLocation();
  return (
    <nav
      className={`flex relative justify-center${
        location.pathname === "/petrochemical" ? "bg-[#141C21]" : ""
      } py-5 relative px-[5%] ${
        industries
          ? location.pathname === "/agropark"
            ? "bg-[#131B1F]"
            : location.pathname === "/petrochemical"
            ? "bg-[#141C21]"
            : location.pathname === "/infrastructure"
            ? "bg-[#1C1C1C]"
            : "bg-[#BB1B06]"
          : location.pathname === "/petrochemical"
          ? "bg-[#141C21]"
          : "bg-white"
      }`}
    >
      <div className="flex justify-between max-w-[80rem] mx-auto w-full items-center">
        <Link
          to="/"
          className="md:block hidden"
          onClick={() => setIndustries(false)}
        >
          {industries ? (
            location.pathname === "/agropark" ? (
              <img src={AgroDark} alt="logo" />
            ) : location.pathname === "/infrastructure" ? (
              <img src={InfraDark} alt="logo" />
            ) : (
              <img src={whiteLogo} alt="logo" />
            )
          ) : location.pathname === "/agropark" ? (
            <img src={greenLogo} alt="logo" />
          ) : location.pathname === "/petrochemical" ? (
            <img src={orangeLogo} alt="logo" />
          ) : location.pathname === "/infrastructure" ? (
            <img src={blueLogo} alt="logo" />
          ) : (
            <img src={Logo} alt="logo" />
          )}
        </Link>
        <Link to="/" className="md:hidden block" onClick={closeMobileNav}>
          {industries ? (
            location.pathname === "/agropark" ? (
              <img src={AgroDark} alt="logo" />
            ) : location.pathname === "/infrastructure" ? (
              <img src={InfraDark} alt="logo" />
            ) : (
              <img src={whiteLogo} alt="logo" />
            )
          ) : location.pathname === "/agropark" ? (
            <img src={greenLogo} alt="logo" />
          ) : location.pathname === "/petrochemical" ? (
            <img src={orangeLogo} alt="logo" />
          ) : location.pathname === "/infrastructure" ? (
            <img src={blueLogo} alt="logo" />
          ) : (
            <img src={Logo} alt="logo" />
          )}
        </Link>
        <div className="md:block hidden">
          <div
            className={`flex ${
              industries
                ? "text-white"
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
                industries
                  ? location.pathname === "/"
                    ? "border-b-[1.5px] border-white text-white"
                    : location.pathname === "/agropark"
                    ? "border-b-[1.5px] border-[#D2EB75] text-[#D2EB75]"
                    : location.pathname === "/petrochemical"
                    ? "border-b-[1.5px] border-[#E6712D] text-[#E6712D]"
                    : " border-b-[1.5px] border-[#08529D] text-[#08529D]"
                  : location.pathname !== "/petrochemical"
                  ? "text-[#141C21]"
                  : "text-white"
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
          <button className="md:block hidden" onClick={toggleNav}>
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
          <button className="block md:hidden" onClick={toggleMobileMenu}>
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
        {industries && (
          <div
            className={`w-full ${
              location.pathname === "/agropark"
                ? "bg-[#131B1F]"
                : location.pathname === "/infrastructure"
                ? "bg-[#1C1C1C]"
                : location.pathname === "/petrochemical"
                ? "bg-[#141C21]"
                : "bg-[#BB1B06]"
            } flex justify-center border-t-[1.5px] border-white absolute left-0 right-0 z-40 top-[110px]`}
          >
            <div>
              <h1
                className={`px-[12px] py-8 font-MerriSemiBold text-[14px] ${
                  location.pathname === "/agropark"
                    ? "text-[#D2EB75]"
                    : location.pathname === "/petrochemical"
                    ? " text-[#e0702f]"
                    : location.pathname === "/infrastructure"
                    ? "text-[#08529D]"
                    : "text-white"
                }`}
              >
                Our subsidiary companies
              </h1>
              <div className="flex gap-[60px]">
                <Link to="agropark" onClick={() => setIndustries(false)}>
                  <div
                    onMouseEnter={handleNavOneMouseEnter}
                    onMouseLeave={handleNavOneMouseLeave}
                    className="hover:bg-white p-[12px] rounded-[8px] gap-6 mb-4"
                  >
                    {navOneHover ? (
                      <img
                        src={NavOne}
                        className="w-[200px] h-[120px] rounded-md"
                        alt="img1"
                      />
                    ) : (
                      <img
                        src={otherOne}
                        className="w-[200px] h-[120px] rounded-md"
                        alt="img1"
                      />
                    )}
                    <div>
                      <h1
                        className={`font-MerriSemiBold pt-3 text-white ${
                          location.pathname === "/"
                            ? "text-white"
                            : location.pathname === "/agropark"
                            ? "text-[#D2EB75]"
                            : location.pathname === "/petrochemical"
                            ? " text-[#e0702f]"
                            : "text-[#08529D]"
                        }`}
                      >
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
                  <div
                    onMouseEnter={handleNavTwoMouseEnter}
                    onMouseLeave={handleNavTwoMouseLeave}
                    className=" hover:bg-white p-[12px] rounded-[8px] gap-6 mb-4"
                  >
                    {navTwoHover ? (
                      <img
                        src={NavOne}
                        className="w-[200px] h-[120px] rounded-md"
                        alt="img1"
                      />
                    ) : (
                      <img
                        src={otherTwo}
                        className="w-[200px] h-[120px] rounded-md"
                        alt="img2"
                      />
                    )}
                    <div>
                      <h1
                        className={`font-MerriSemiBold pt-3 text-white ${
                          location.pathname === "/"
                            ? "text-white"
                            : location.pathname === "/agropark"
                            ? "text-[#D2EB75]"
                            : location.pathname === "/petrochemical"
                            ? " text-[#e0702f]"
                            : "text-[#08529D]"
                        }`}
                      >
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
                  <div
                    onMouseEnter={handleNavThreeMouseEnter}
                    onMouseLeave={handleNavThreeMouseLeave}
                    className="hover:bg-white p-[12px] rounded-[8px] gap-6 mb-4"
                  >
                    {navThreeHover ? (
                      <img
                        src={NavOne}
                        className="w-[200px] h-[120px] rounded-md"
                        alt="img1"
                      />
                    ) : (
                      <img
                        src={otherThree}
                        className="w-[200px] h-[120px] rounded-md"
                        alt="img3"
                      />
                    )}
                    <div>
                      <h1
                        className={`font-MerriSemiBold pt-3 text-white ${
                          location.pathname === "/"
                            ? "text-white"
                            : location.pathname === "/agropark"
                            ? "text-[#D2EB75]"
                            : location.pathname === "/petrochemical"
                            ? " text-[#e0702f]"
                            : "text-[#08529D]"
                        }`}
                      >
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
        )}
      </div>
      {mobileNav && (
        <div className="absolute top-[100px] z-50 left-0 right-0">
          <div
            className={`w-full h-screen  ${
              location.pathname === "/petrochemical"
                ? "bg-[#141C21]"
                : "bg-white"
            }`}
          >
            <div
              className={`${
                industries
                  ? "text-white"
                  : location.pathname === "/petrochemical"
                  ? "text-white"
                  : "text-[#141C21]"
              } text-[17px] font-MerriRegular flex flex-col pt-[60px] items-center space-x-[20px]`}
            >
              <Link onClick={closeMobileNav} className="mb-3" to="/about">
                About
              </Link>
              <div
                className={`flex items-center mb-3 ${
                  industries
                    ? location.pathname === "/"
                      ? "border-b-[1.5px] border-white text-white"
                      : location.pathname === "/agropark"
                      ? "border-b-[1.5px] border-[#D2EB75] text-[#D2EB75]"
                      : location.pathname === "/petrochemical"
                      ? "border-b-[1.5px] border-[#E6712D] text-[#E6712D]"
                      : " border-b-[1.5px] border-[#08529D] text-[#08529D]"
                    : location.pathname !== "/petrochemical"
                    ? "text-[#141C21]"
                    : "text-white"
                } gap-2`}
              >
                Industries
                <button onClick={toggleMobileIndustries}>
                  {mobileIndustries ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {mobileIndustries && (
                <div className="flex flex-col py-4 text-[14px] pl-[30px]">
                  <Link
                    onClick={closeMobileNav}
                    className="pb-3"
                    to="/agropark"
                  >
                    AgroPark
                  </Link>
                  <Link
                    onClick={closeMobileNav}
                    className="pb-3"
                    to="/petrochemical"
                  >
                    Petrochemical
                  </Link>
                  <Link onClick={closeMobileNav} to="/infrastructure">
                    Infrastructure
                  </Link>
                </div>
              )}
              <Link onClick={closeMobileNav} className="mb-3" to="/news">
                News/Media
              </Link>
              <Link onClick={closeMobileNav} className="mb-3" to="/career">
                Career
              </Link>
              <Link onClick={closeMobileNav} to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LightNavbar;
