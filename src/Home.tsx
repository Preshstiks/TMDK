import bgColored from "./assets/img/rainbow.webp";
import { GoArrowRight } from "react-icons/go";
import Agro from "./assets/img/agro.webp";
import Infrastructure from "./assets/img/infrastructure.webp";
import PetroChemical from "./assets/img/petrochemical.webp";
import bg from "./assets/img/potatoes.webp";
import bgone from "./assets/img/construction.webp";
import bgtwo from "./assets/img/mobil.webp";
import bgthree from "./assets/img/bgthree.webp";
import Icon from "./assets/img/Logomark.png";
import { HiMiniPlayCircle } from "react-icons/hi2";
import footerLogo from "./assets/img/footerlogo.webp";
import { BsFacebook, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <header className="bg-[#182736] h-[90vh] px-[5%] pb-[80px] relative flex items-end">
        <div>
          <h1 className="font-MerriBold leading-[60px] text-[48px] text-white">
            Powering Growth Through
          </h1>
          <h1 className="font-MerriBold leading-[60px] text-[48px] text-white">
            Integrated Services
          </h1>
          <h1 className="text-[20px] leading-[30px] pt-4 font-MerriLight text-[#818E98]">
            Together we create a better and more sustainable future.
          </h1>
        </div>
        <img className="absolute bottom-0 right-0" src={bgColored} alt="bg" />
      </header>

      {/* About Us */}
      <div className="bg-[#F8F8F8] p-[80px] flex">
        <div className="w-[45%]">
          <h1 className="text-[14px] font-MerriSemiBold text-[#BB1B06]">
            About us
          </h1>
          <h1 className="text-[#131D2C] text-[48px] pt-[10px] font-MerriSemiBold">
            TMDK Group
          </h1>
        </div>
        <div className="w-[55%]">
          <h1 className="text-[#131D2C] font-MerriRegular text-[20px]">
            <span className="font-MerriExtraBold text-[#BB1B06]">
              Our vision
            </span>{" "}
            is to be a leading force in Nigeria's economic development, driving
            innovation and sustainable growth across key sectors while improving
            the lives of our fellow citizens.
          </h1>
          <h1 className="text-[14px] font-MerriRegular pt-7 text-[#667085]">
            TMDK Group is a diversified conglomerate committed to driving
            innovation and excellence across multiple sectors. With our dynamic
            subsidiary companies, we are dedicated to fostering growth,
            sustainability, and positive impact in Nigeria and beyond.
          </h1>
          <button className="text-[14px] shadow-sm hover:text-[#182736] border hover:border-[#D1D1D6] hover:bg-white mt-[60px] flex items-center gap-3 py-[12px] px-[18px] text-white font-MerriRegular bg-[#BB1B06]">
            More about our company
            <GoArrowRight size={19} />
          </button>
        </div>
      </div>

      {/* Industries */}
      <div className="flex relative w-full">
        <div className="h-[75vh] bg-white px-[80px] w-full">
          <h1 className="text-[#BB1B06] pt-[80px] text-[24px] font-MerriBold">
            Our Industries
          </h1>
        </div>
        <div className="h-[75vh] bg-[#182736] pr-[80px] w-full"></div>
        <div className="absolute top-[150px] right-0 left-0 bottom-0">
          <div className="flex justify-center gap-3">
            <div className="relative w-[368px] h-[398px]">
              <div className="absolute top-6 left-6 text-[#182736] text-[24px] font-MerriSemiBold">
                Agro Park
              </div>
              <img
                src={Agro}
                className="w-full h-full object-cover"
                alt="agro"
              />
            </div>
            <div className="relative w-[368px] h-[398px]">
              <div className="absolute top-6 left-6 text-[#182736] text-[24px] font-MerriSemiBold">
                Petrochemicals
              </div>
              <img
                src={Infrastructure}
                className="w-full h-full object-cover"
                alt="infrastructure"
              />
            </div>
            <div className="relative w-[368px] h-[398px]">
              <div className="absolute top-6 left-6 text-[#182736] text-[24px] font-MerriSemiBold">
                Infrastructure
              </div>
              <img
                src={PetroChemical}
                className="w-full h-full object-cover"
                alt="petrochemical"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recent News */}
      <div className="bg-[#F8F8F8] px-[5%] py-[80px]">
        <div className="flex items-center pb-7 justify-between">
          <h1 className="text-[#182736] text-[24px] font-MerriSemiBold">
            Recent News
          </h1>
          <button className="flex items-center gap-2 text-[14px] font-MerriRegular text-[#BB1B06] border-[1.5px] border-[#182736] py-[12px] px-[18px]">
            View all news <GoArrowRight size={20} />
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="relative w-[592px] h-[458px]">
              <div
                className="absolute flex items-end inset-0 bg-news bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div>
                  <div className="relative p-7">
                    <button className="border-[1.5px] mb-5 rounded-[4px] border-white py-[8px] text-white px-[12px] text-[12px] font-MerriRegular">
                      Design
                    </button>
                    <div className="text-[24px] font-MerriSemiBold text-white">
                      <h1>Life is rarely a straight line… it’s</h1>
                      <h1>full of corners. But, wherever it</h1>
                      <h1>may take you, we can help.</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white inline-block shadow-sm max-w-[280px] w-full">
              <div
                className="w-[280px] h-[200px]"
                style={{
                  backgroundImage: `url(${bgone})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-5">
                <button className="border-[1.5px] mb-3 rounded-[4px] border-[#D1D1D6] py-[8px] text-[#475467] px-[12px] text-[12px] font-MerriRegular">
                  Design
                </button>
                <h1 className="text-[#101828] pb-2 text-[18px] font-MerriSemiBold">
                  Migrating to Linear 101
                </h1>
                <h1 className="text-[#B9C0C6] pb-1 text-[12px] font-MerriRegular">
                  19 Jan 2024 • TMDK Group
                </h1>
                <h1 className="text-[#667085] text-[14px] font-MerriLight">
                  In 2010, we agreed that it was the right time to take years of
                  managerial experience further. Since then, our development
                  programs have helped ...
                </h1>
              </div>
            </div>
            <div className="bg-white inline-block shadow-sm max-w-[280px] w-full">
              <div
                className="w-[280px] h-[200px]"
                style={{
                  backgroundImage: `url(${bgtwo})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="p-5">
                <button className="border-[1.5px] mb-3 rounded-[4px] border-[#D1D1D6] py-[8px] text-[#475467] px-[12px] text-[12px] font-MerriRegular">
                  Design
                </button>
                <h1 className="text-[#101828] pb-2 text-[18px] font-MerriSemiBold">
                  Migrating to Linear 101
                </h1>
                <h1 className="text-[#B9C0C6] pb-1 text-[12px] font-MerriRegular">
                  19 Jan 2024 • TMDK Group
                </h1>
                <h1 className="text-[#667085] text-[14px] font-MerriLight">
                  In 2010, we agreed that it was the right time to take years of
                  managerial experience further. Since then, our development
                  programs have helped ...
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor's corner */}
      <div className="bg-[#182736] px-[5%] py-[80px]">
        <h1 className="text-white pb-7 font-MerriBold text-[24px]">
          Investors’ Corner
        </h1>
        <div className="flex mb-[20px]">
          <div className="bg-white w-full p-[64px] inline-block">
            <h1 className="text-[36px] font-MerriBold text-[#182736]">
              Our Commitment
            </h1>
            <h1 className="text-[36px] pb-8 font-MerriBold text-[#182736]">
              Through Investment
            </h1>
            <p className="text-[#5C6D84] text-[20px] font-MerriLight">
              TMDK Agro Park collaborates closely with local farmers, engaging
              them in provincial agricultural projects and creating job
              opportunities for the whole community. We provide agricultural
              guidance and training, conducting professional seminars in
              agronomy and livestock management.
            </p>
          </div>
          <div className="w-full">
            <div
              className="w-[608px] flex items-center justify-center h-[448px]"
              style={{
                backgroundImage: `url(${bgthree})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <HiMiniPlayCircle
                className="rounded-full text-gray-400 hover:text-gray-200 cursor-pointer"
                size={100}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="bg-[#BB1B06] w-full text-center p-[64px]">
            <h1 className="text-[48px] font-MerriMedium text-white">600%</h1>
            <h1 className="text-[18px] font-semibold pb-2 text-white">
              Return on investment%
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              Our customers have reported
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              an average of ~600% ROI.
            </h1>
          </div>
          <div className="bg-white w-full text-center p-[64px]">
            <h1 className="text-[48px] font-MerriMedium text-[#BC1B06]">
              200+
            </h1>
            <h1 className="text-[18px] font-semibold pb-2 text-[#182736]">
              5-star reviews
            </h1>
            <h1 className="font-normal text-[#818E98]">
              We’re proud of our 5-star
            </h1>
            <h1 className="font-normal text-[#818E98]">
              rating with over 200 reviews.
            </h1>
          </div>
          <div className="bg-[#818E98] w-full text-center p-[64px]">
            <h1 className="text-[48px] font-MerriMedium text-white">400+</h1>
            <h1 className="text-[18px] font-semibold pb-2 text-[#182736]">
              Projects completed
            </h1>
            <h1 className="font-normal text-[#182736]">
              We’ve helped build over
            </h1>
            <h1 className="font-normal text-[#182736]">
              400 amazing projects.
            </h1>
          </div>
        </div>
      </div>

      {/* Trusted Partners */}
      <div className="bg-[#F8F8F8] py-[80px] flex px-[5%]">
        <div className="bg-[#182736] flex items-center justify-center p-[64px] w-[40%]">
          <h1 className="text-white font-MerriBold text-[30px]">
            Our Trusted Partners
          </h1>
        </div>
        <div className="bg-white grid grid-cols-3 gap-[32px] w-[60%] px-[32px] py-[64px]">
          <div className="flex items-center gap-2">
            <img src={Icon} alt="icon" />
            <h1 className="text-[#101828] font-MerriBold text-[25px]">
              Wildcrafted
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icon} alt="icon" />
            <h1 className="text-[#101828] font-MerriBold text-[25px]">
              Wildcrafted
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icon} alt="icon" />
            <h1 className="text-[#101828] font-MerriBold text-[25px]">
              Wildcrafted
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icon} alt="icon" />
            <h1 className="text-[#101828] font-MerriBold text-[25px]">
              Wildcrafted
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icon} alt="icon" />
            <h1 className="text-[#101828] font-MerriBold text-[25px]">
              Wildcrafted
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <img src={Icon} alt="icon" />
            <h1 className="text-[#101828] font-MerriBold text-[25px]">
              Wildcrafted
            </h1>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="flex">
          <div className="w-[25%]">
            <div className="p-[64px]">
              <img src={footerLogo} alt="logo" />
            </div>
            <div className="bg-[#BC1B06] p-[64px] h-[250px] flex items-end">
              <div className="flex items-center gap-[24px]">
                <BsTwitterX
                  size={22}
                  className="text-white hover:text-[#98A2B3]"
                />
                <BsLinkedin
                  size={22}
                  className="text-white hover:text-[#98A2B3]"
                />
                <BsFacebook
                  size={22}
                  className="text-white hover:text-[#98A2B3]"
                />
                <BsYoutube
                  size={22}
                  className="text-white hover:text-[#98A2B3]"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#182736] relative w-[75%] ">
            <div className=" flex justify-between p-[64px]">
              <div>
                <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[14px]">
                  Company
                </h1>
                <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
                  <Link className="pb-3 hover:text-[#98A2B3]" to="#">
                    About
                  </Link>
                  <Link className="pb-3 hover:text-[#98A2B3]" to="#">
                    Agro Park
                  </Link>
                  <Link className="pb-3 hover:text-[#98A2B3]" to="#">
                    Petrochemical
                  </Link>
                  <Link className="pb-3 hover:text-[#98A2B3]" to="#">
                    Infrastructure
                  </Link>
                  <Link className="pb-3" to="#">
                    Media
                  </Link>
                  <Link className="pb-2" to="#">
                    Careers <span>New</span>
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="text-[#D0D5DD] font-MerriSemiBold text-[14px]">
                  Contact
                </h1>
                <div className="flex flex-col font-MerriSemiBold text-[#E4E7EC] pt-3">
                  <div className="pb-3 hover:text-[#98A2B3] cursor-pointer">
                    Email:
                  </div>
                  <div className="pb-3 hover:text-[#98A2B3] cursor-pointer">
                    info@tmdkgroup.com
                  </div>
                  <div className="pb-3 hover:text-[#98A2B3] cursor-pointer">
                    Phone:
                  </div>
                  <div className="pb-3 hover:text-[#98A2B3] cursor-pointer">
                    +234 900 000 0000
                  </div>
                  <div className="pb-3 hover:text-[#98A2B3] cursor-pointer">
                    Head Office
                  </div>
                  <div className="hover:text-[#98A2B3] cursor-pointer">
                    <div>100 Smith Street</div>
                    <div className="pb-3">Collingwood VIC 3066 AU</div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="font-bold text-[#FFFFFF]">Contact</h1>
                <h1 className="text-[#98A2B3] font-normal py-8">
                  Fill out the form below and we will get in touch shortly.
                </h1>
                <form>
                  <div className="flex justify-between pb-5 space-x-4">
                    <div className="w-full">
                      <label className="text-[14px] text-white">
                        First name
                        <span className="text-[#BC1B06] text-[16px]">*</span>
                      </label>
                      <div>
                        <input
                          type="text"
                          className="border-b pt-2 text-white text-[12px] w-full outline-none bg-transparent border-white"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label className="text-[14px] text-white">
                        Email
                        <span className="text-[#BC1B06] text-[16px]">*</span>
                      </label>
                      <div>
                        <input
                          type="email"
                          className="border-b pt-2 outline-none text-white text-[12px] w-full bg-transparent border-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-[14px] text-white">
                      Message
                      <span className="text-[#BC1B06] text-[16px]">*</span>
                    </label>
                    <div>
                      <textarea
                        rows={4}
                        className="border-b pt-2 text-white text-[12px] w-full  outline-none bg-transparent resize-none border-white"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-7">
                    <div className="text-[14px] text-white">
                      <span className="text-[#BC1B06] text-[16px]">*</span>
                      Mandatory Fields
                    </div>
                    <button className="text-white flex items-center gap-2 bg-[#BC1B06] font-semibold py-[12px] px-[18px]">
                      Get started
                      <MdArrowOutward size={20} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <h1 className="absolute bottom-[80px] left-[56px] text-[#D0D5DD] text-[14px] font-MerriRegular">
              © 2077 Untitled UI. All rights reserved.
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
