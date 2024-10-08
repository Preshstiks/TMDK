import { BsFacebook, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import footerLogo from "../../assets/img/footerlogo.webp";
import greenFooterLogo from "../../assets/img/greenFooterLogo.webp";
import blueFooterLogo from "../../assets/img/blueFooterLogo.webp";
import orangeFooterLogo from "../../assets/img/orangeFooterLogo.webp";
const Footer = () => {
  const location = useLocation();
  return (
    // <footer className="max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8">
    //   <div className="flex flex-col lg:flex-row">
    //     <div className="w-full lg:w-[25%]">
    //       <div className="py-8 lg:py-[64px] flex justify-center lg:justify-start">
    //         {location.pathname === "/agropark" ? (
    //           <img src={greenFooterLogo} alt="logo" />
    //         ) : location.pathname === "/petrochemical" ? (
    //           <img src={orangeFooterLogo} alt="logo" />
    //         ) : location.pathname === "/infrastructure" ? (
    //           <img src={blueFooterLogo} alt="logo" />
    //         ) : (
    //           <img src={footerLogo} alt="logo" />
    //         )}
    //       </div>
    //       <div
    //         className={`${
    //           location.pathname === "/agropark"
    //             ? "bg-[#D2EB75]"
    //             : location.pathname === "/petrochemical"
    //             ? "bg-[#E6712D]"
    //             : location.pathname === "/infrastructure"
    //             ? "bg-[#08529D]"
    //             : "bg-[#BB1B06]"
    //         } py-8 lg:py-[64px] px-4 h-[300px] flex items-end`}
    //       >
    //         <div
    //           className={`flex items-center justify-center lg:justify-start gap-4 lg:gap-6 ${
    //             location.pathname === "/agropark"
    //               ? "text-[#182F2A]"
    //               : "text-white"
    //           }`}
    //         >
    //           <BsTwitterX size={22} className="hover:text-[#98A2B3]" />
    //           <BsLinkedin size={22} className="hover:text-[#98A2B3]" />
    //           <BsFacebook size={22} className="hover:text-[#98A2B3]" />
    //           <BsYoutube size={22} className="hover:text-[#98A2B3]" />
    //         </div>
    //       </div>
    //     </div>
    //     {/* Footer Links and Contact Form */}
    //     <div
    //       className={`w-full lg:w-[75%] ${
    //         location.pathname === "/agropark"
    //           ? "bg-[#182F2A]"
    //           : location.pathname === "/petrochemical"
    //           ? "bg-[#141C21]"
    //           : location.pathname === "/infrastructure"
    //           ? "bg-[#1C1C1C]"
    //           : "bg-[#182736]"
    //       }`}
    //     >
    //       <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-[64px]">
    //         <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    //           <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[16px] lg:text-[14px]">
    //             Company
    //           </h1>
    //           <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
    //             <Link className="pb-2 hover:text-[#98A2B3]" to="/about">
    //               About
    //             </Link>
    //             <Link className="pb-2 hover:text-[#98A2B3]" to="#">
    //               Agro Park
    //             </Link>
    //             <Link className="pb-2 hover:text-[#98A2B3]" to="#">
    //               Petrochemical
    //             </Link>
    //             <Link className="pb-2 hover:text-[#98A2B3]" to="#">
    //               Infrastructure
    //             </Link>
    //             <Link className="pb-2 hover:text-[#98A2B3]" to="/news">
    //               Media
    //             </Link>
    //             <Link className="pb-2 flex items-center gap-2" to="/career">
    //               Careers{" "}
    //               <span className="text-[10px] lg:text-[11px] font-MerriMedium p-1 lg:p-2 rounded-[4px] border border-white">
    //                 New
    //               </span>
    //             </Link>
    //           </div>
    //         </div>
    //         <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    //           <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[16px] lg:text-[14px]">
    //             Contact
    //           </h1>
    //           <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
    //             <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //               Email:
    //             </div>
    //             <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //               info@tmdkgroup.com
    //             </div>
    //             <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //               Phone:
    //             </div>
    //             <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //               +234 900 000 0000
    //             </div>
    //             <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //               Head Office
    //             </div>
    //             <div className="hover:text-[#98A2B3] cursor-pointer">
    //               <div>100 Smith Street</div>
    //               <div className="pb-2">Collingwood VIC 3066 AU</div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full lg:w-1/3">
    //           <h1 className="text-[#FFFFFF] font-bold text-[16px] lg:text-[18px]">
    //             Contact
    //           </h1>
    //           <h1 className="text-[#98A2B3] font-normal py-4 lg:py-8 text-[14px] lg:text-[16px]">
    //             Fill out the form below and we will get in touch shortly.
    //           </h1>
    //           <form>
    //             <div className="flex flex-col lg:flex-row lg:space-x-4 pb-5">
    //               <div className="w-full mb-4 lg:mb-0">
    //                 <label className="text-[12px] lg:text-[14px] text-white">
    //                   First name
    //                   <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                     *
    //                   </span>
    //                 </label>
    //                 <input
    //                   type="text"
    //                   className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent border-white"
    //                 />
    //               </div>
    //               <div className="w-full">
    //                 <label className="text-[12px] lg:text-[14px] text-white">
    //                   Email
    //                   <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                     *
    //                   </span>
    //                 </label>
    //                 <input
    //                   type="email"
    //                   className="border-b pt-2 outline-none text-white text-[12px] w-full bg-transparent border-white"
    //                 />
    //               </div>
    //             </div>
    //             <div className="w-full mb-6">
    //               <label className="text-[12px] lg:text-[14px] text-white">
    //                 Message
    //                 <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                   *
    //                 </span>
    //               </label>
    //               <textarea
    //                 rows={4}
    //                 className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent resize-none border-white"
    //               />
    //             </div>
    //             <div className="flex flex-col lg:flex-row items-center lg:justify-between">
    //               <div className="text-[12px] lg:text-[14px] text-white mb-4 lg:mb-0">
    //                 <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                   *
    //                 </span>
    //                 Mandatory Fields
    //               </div>
    //               <button
    //                 className={`text-white flex items-center gap-2 ${
    //                   location.pathname === "/agropark"
    //                     ? "bg-[#D2EB75] text-[#182F2A]"
    //                     : location.pathname === "/petrochemical"
    //                     ? "bg-[#E6712D] text-[#182F2A]"
    //                     : location.pathname === "/infrastructure"
    //                     ? "bg-[#08529D]"
    //                     : "bg-[#BB1B06]"
    //                 } font-semibold py-2 px-4 lg:py-[12px] lg:px-[18px]`}
    //               >
    //                 Get started
    //                 <MdArrowOutward size={20} />
    //               </button>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //       <h1 className="absolute bottom-4 lg:bottom-8 left-4 lg:left-[56px] text-[#D0D5DD] text-[12px] lg:text-[14px] font-MerriRegular">
    //         © 2077 Untitled UI. All rights reserved.
    //       </h1>
    //     </div>
    //   </div>
    // </footer>

    // <footer className="w-full">
    //   <div className="max-w-[80rem] mx-auto relative">
    //     <div className="flex flex-col lg:flex-row">
    //       <div className="w-full lg:w-[25%] relative">
    //         <div
    //           className={`absolute inset-0 left-auto w-[39vw] ${
    //             location.pathname === "/agropark"
    //               ? "bg-[#D2EB75]"
    //               : location.pathname === "/petrochemical"
    //               ? "bg-[#E6712D]"
    //               : location.pathname === "/infrastructure"
    //               ? "bg-[#08529D]"
    //               : "bg-[#BB1B06]"
    //           } `}
    //         >
    //            <div className="bg-white h-1/2 w-full"></div>
    //           <div className="bg-[#BB1B06] h-1/2 w-full"></div>
    //         </div>
    //         <div className="relative">
    //           <div className="py-8 lg:py-[64px] flex justify-center lg:justify-start">
    //             {location.pathname === "/agropark" ? (
    //               <img src={greenFooterLogo} alt="logo" />
    //             ) : location.pathname === "/petrochemical" ? (
    //               <img src={orangeFooterLogo} alt="logo" />
    //             ) : location.pathname === "/infrastructure" ? (
    //               <img src={blueFooterLogo} alt="logo" />
    //             ) : (
    //               <img src={footerLogo} alt="logo" />
    //             )}
    //             <div
    //               className={`flex items-center justify-center lg:justify-start gap-4 lg:gap-6 ${
    //                 location.pathname === "/agropark"
    //                   ? "text-[#182F2A]"
    //                   : "text-white"
    //               }`}
    //             >
    //               <BsTwitterX size={22} className="hover:text-[#98A2B3]" />
    //               <BsLinkedin size={22} className="hover:text-[#98A2B3]" />
    //               <BsFacebook size={22} className="hover:text-[#98A2B3]" />
    //               <BsYoutube size={22} className="hover:text-[#98A2B3]" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="w-full lg:w-[75%] relative">
    //         <div
    //           className={`absolute inset-0 right-auto w-[61vw] ${
    //             location.pathname === "/agropark"
    //               ? "bg-[#182F2A]"
    //               : location.pathname === "/petrochemical"
    //               ? "bg-[#141C21]"
    //               : location.pathname === "/infrastructure"
    //               ? "bg-[#1C1C1C]"
    //               : "bg-[#182736]"
    //           }`}
    //         ></div>
    //         <div className="relative">
    //           <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-[64px]">
    //             <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    //               <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[16px] lg:text-[14px]">
    //                 Company
    //               </h1>
    //               <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
    //                 <Link className="pb-2 hover:text-[#98A2B3]" to="/about">
    //                   About
    //                 </Link>
    //                 <Link className="pb-2 hover:text-[#98A2B3]" to="#">
    //                   Agro Park
    //                 </Link>
    //                 <Link className="pb-2 hover:text-[#98A2B3]" to="#">
    //                   Petrochemical
    //                 </Link>
    //                 <Link className="pb-2 hover:text-[#98A2B3]" to="#">
    //                   Infrastructure
    //                 </Link>
    //                 <Link className="pb-2 hover:text-[#98A2B3]" to="/news">
    //                   Media
    //                 </Link>
    //                 <Link className="pb-2 flex items-center gap-2" to="/career">
    //                   Careers{" "}
    //                   <span className="text-[10px] lg:text-[11px] font-MerriMedium p-1 lg:p-2 rounded-[4px] border border-white">
    //                     New
    //                   </span>
    //                 </Link>
    //               </div>
    //             </div>
    //             <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
    //               <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[16px] lg:text-[14px]">
    //                 Contact
    //               </h1>
    //               <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
    //                 <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //                   Email:
    //                 </div>
    //                 <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //                   info@tmdkgroup.com
    //                 </div>
    //                 <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //                   Phone:
    //                 </div>
    //                 <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //                   +234 900 000 0000
    //                 </div>
    //                 <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
    //                   Head Office
    //                 </div>
    //                 <div className="hover:text-[#98A2B3] cursor-pointer">
    //                   <div>100 Smith Street</div>
    //                   <div className="pb-2">Collingwood VIC 3066 AU</div>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="w-full lg:w-1/3">
    //               <h1 className="text-[#FFFFFF] font-bold text-[16px] lg:text-[18px]">
    //                 Contact
    //               </h1>
    //               <h1 className="text-[#98A2B3] font-normal py-4 lg:py-8 text-[14px] lg:text-[16px]">
    //                 Fill out the form below and we will get in touch shortly.
    //               </h1>
    //               <form>
    //                 <div className="flex flex-col lg:flex-row lg:space-x-4 pb-5">
    //                   <div className="w-full mb-4 lg:mb-0">
    //                     <label className="text-[12px] lg:text-[14px] text-white">
    //                       First name
    //                       <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                         *
    //                       </span>
    //                     </label>
    //                     <input
    //                       type="text"
    //                       className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent border-white"
    //                     />
    //                   </div>
    //                   <div className="w-full">
    //                     <label className="text-[12px] lg:text-[14px] text-white">
    //                       Email
    //                       <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                         *
    //                       </span>
    //                     </label>
    //                     <input
    //                       type="email"
    //                       className="border-b pt-2 outline-none text-white text-[12px] w-full bg-transparent border-white"
    //                     />
    //                   </div>
    //                 </div>
    //                 <div className="w-full mb-6">
    //                   <label className="text-[12px] lg:text-[14px] text-white">
    //                     Message
    //                     <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                       *
    //                     </span>
    //                   </label>
    //                   <textarea
    //                     rows={4}
    //                     className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent resize-none border-white"
    //                   />
    //                 </div>
    //                 <div className="flex flex-col lg:flex-row items-center lg:justify-between">
    //                   <div className="text-[12px] lg:text-[14px] text-white mb-4 lg:mb-0">
    //                     <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
    //                       *
    //                     </span>
    //                     Mandatory Fields
    //                   </div>
    //                   <button
    //                     className={`text-white flex items-center gap-2 ${
    //                       location.pathname === "/agropark"
    //                         ? "bg-[#D2EB75] text-[#182F2A]"
    //                         : location.pathname === "/petrochemical"
    //                         ? "bg-[#E6712D] text-[#182F2A]"
    //                         : location.pathname === "/infrastructure"
    //                         ? "bg-[#08529D]"
    //                         : "bg-[#BB1B06]"
    //                     } font-semibold py-2 px-4 lg:py-[12px] lg:px-[18px]`}
    //                   >
    //                     Get started
    //                     <MdArrowOutward size={20} />
    //                   </button>
    //                 </div>
    //               </form>
    //             </div>
    //           </div>
    //           <h1 className="absolute bottom-4 lg:bottom-8 left-4 lg:left-[56px] text-[#D0D5DD] text-[12px] lg:text-[14px] font-MerriRegular">
    //             © 2077 Untitled UI. All rights reserved.
    //           </h1>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer className="w-full">
      <div className="max-w-[80rem] mx-auto relative">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[25%] relative">
            <div
              className={`absolute inset-0 left-auto w-[39vw] ${
                location.pathname === "/agropark"
                  ? "bg-[#D2EB75]"
                  : location.pathname === "/petrochemical"
                  ? "bg-[#E6712D]"
                  : location.pathname === "/infrastructure"
                  ? "bg-[#08529D]"
                  : "bg-[#BB1B06]"
              }`}
            >
              <div className="bg-white h-1/2 w-full"></div>
              <div
                className={`h-1/2 w-full flex items-center justify-center lg:justify-start gap-4 lg:gap-6 left-auto w-[39vw] ${
                  location.pathname === "/agropark"
                    ? "bg-[#D2EB75]"
                    : location.pathname === "/petrochemical"
                    ? "bg-[#E6712D]"
                    : location.pathname === "/infrastructure"
                    ? "bg-[#08529D]"
                    : "bg-[#BB1B06]"
                }`}
              >
                <BsTwitterX
                  size={22}
                  className="hover:text-[#98A2B3] text-white"
                />
                <BsLinkedin
                  size={22}
                  className="hover:text-[#98A2B3] text-white"
                />
                <BsFacebook
                  size={22}
                  className="hover:text-[#98A2B3] text-white"
                />
                <BsYoutube
                  size={22}
                  className="hover:text-[#98A2B3] text-white"
                />
              </div>
            </div>
            <div className="relative">
              <div className="py-8 lg:py-[64px] flex justify-center lg:justify-start">
                {location.pathname === "/agropark" ? (
                  <img src={greenFooterLogo} alt="logo" />
                ) : location.pathname === "/petrochemical" ? (
                  <img src={orangeFooterLogo} alt="logo" />
                ) : location.pathname === "/infrastructure" ? (
                  <img src={blueFooterLogo} alt="logo" />
                ) : (
                  <img src={footerLogo} alt="logo" />
                )}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[75%] relative">
            <div
              className={`absolute inset-0 right-auto w-[61vw] ${
                location.pathname === "/agropark"
                  ? "bg-[#182F2A]"
                  : location.pathname === "/petrochemical"
                  ? "bg-[#141C21]"
                  : location.pathname === "/infrastructure"
                  ? "bg-[#1C1C1C]"
                  : "bg-[#182736]"
              }`}
            ></div>
            <div className="relative">
              <div className="flex flex-col lg:flex-row justify-between p-6 lg:p-[64px]">
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                  <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[16px] lg:text-[14px]">
                    Company
                  </h1>
                  <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
                    <Link className="pb-2 hover:text-[#98A2B3]" to="/about">
                      About
                    </Link>
                    <Link className="pb-2 hover:text-[#98A2B3]" to="#">
                      Agro Park
                    </Link>
                    <Link className="pb-2 hover:text-[#98A2B3]" to="#">
                      Petrochemical
                    </Link>
                    <Link className="pb-2 hover:text-[#98A2B3]" to="#">
                      Infrastructure
                    </Link>
                    <Link className="pb-2 hover:text-[#98A2B3]" to="/news">
                      Media
                    </Link>
                    <Link className="pb-2 flex items-center gap-2" to="/career">
                      Careers{" "}
                      <span className="text-[10px] lg:text-[11px] font-MerriMedium p-1 lg:p-2 rounded-[4px] border border-white">
                        New
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                  <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[16px] lg:text-[14px]">
                    Contact
                  </h1>
                  <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
                    <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
                      Email:
                    </div>
                    <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
                      info@tmdkgroup.com
                    </div>
                    <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
                      Phone:
                    </div>
                    <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
                      +234 900 000 0000
                    </div>
                    <div className="pb-2 hover:text-[#98A2B3] cursor-pointer">
                      Head Office
                    </div>
                    <div className="hover:text-[#98A2B3] cursor-pointer">
                      <div>100 Smith Street</div>
                      <div className="pb-2">Collingwood VIC 3066 AU</div>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/3">
                  <h1 className="text-[#FFFFFF] font-bold text-[16px] lg:text-[18px]">
                    Contact
                  </h1>
                  <h1 className="text-[#98A2B3] font-normal py-4 lg:py-8 text-[14px] lg:text-[16px]">
                    Fill out the form below and we will get in touch shortly.
                  </h1>
                  <form>
                    <div className="flex flex-col lg:flex-row lg:space-x-4 pb-5">
                      <div className="w-full mb-4 lg:mb-0">
                        <label className="text-[12px] lg:text-[14px] text-white">
                          First name
                          <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent border-white"
                        />
                      </div>
                      <div className="w-full">
                        <label className="text-[12px] lg:text-[14px] text-white">
                          Email
                          <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
                            *
                          </span>
                        </label>
                        <input
                          type="email"
                          className="border-b pt-2 outline-none text-white text-[12px] w-full bg-transparent border-white"
                        />
                      </div>
                    </div>
                    <div className="w-full mb-6">
                      <label className="text-[12px] lg:text-[14px] text-white">
                        Message
                        <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
                          *
                        </span>
                      </label>
                      <textarea
                        rows={4}
                        className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent resize-none border-white"
                      />
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                      <div className="text-[12px] lg:text-[14px] text-white mb-4 lg:mb-0">
                        <span className="text-[#BC1B06] text-[14px] lg:text-[16px]">
                          *
                        </span>
                        Mandatory Fields
                      </div>
                      <button
                        className={`text-white flex items-center gap-2 ${
                          location.pathname === "/agropark"
                            ? "bg-[#D2EB75] text-[#182F2A]"
                            : location.pathname === "/petrochemical"
                            ? "bg-[#E6712D] text-[#182F2A]"
                            : location.pathname === "/infrastructure"
                            ? "bg-[#08529D]"
                            : "bg-[#BB1B06]"
                        } font-semibold py-2 px-4 lg:py-[12px] lg:px-[18px]`}
                      >
                        Get started
                        <MdArrowOutward size={20} />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <h1 className="absolute bottom-4 lg:bottom-8 left-4 lg:left-[56px] text-[#D0D5DD] text-[12px] lg:text-[14px] font-MerriRegular">
                © 2077 Untitled UI. All rights reserved.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
