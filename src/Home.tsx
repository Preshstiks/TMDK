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
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <header className="bg-[#182736] px-[5%] pb-[80px] relative">
        <div className="flex items-end h-[68vh] max-w-[80rem] mx-auto w-full">
          <div>
            <h1 className="font-MerriBold leading-[60px] text-[40px] text-white">
              Powering Growth Through
            </h1>
            <h1 className="font-MerriBold leading-[60px] text-[40px] text-white">
              Integrated Services
            </h1>
            <h1 className="text-[17px] leading-[30px] pt-4 font-MerriLight text-[#818E98]">
              Together we create a better and more sustainable future.
            </h1>
          </div>
          <img className="absolute bottom-0 right-0" src={bgColored} alt="bg" />
        </div>
      </header>

      {/* About Us */}
      <div className="bg-[#F8F8F8] px-4 md:px-8 lg:px-[5%] py-[40px] md:py-[60px] lg:py-[80px] flex justify-center">
        <div className="flex flex-col md:flex-row max-w-[80rem] w-full">
          <div className="w-full md:w-[45%] mb-6 md:mb-0">
            <h1 className="text-[12px] md:text-[14px] font-MerriSemiBold text-[#BB1B06]">
              About us
            </h1>
            <h1 className="text-[#131D2C] text-[36px] md:text-[48px] pt-[5px] md:pt-[10px] font-MerriSemiBold">
              TMDK Group
            </h1>
          </div>
          <div className="w-full md:w-[55%]">
            <h1 className="text-[#131D2C] font-MerriRegular text-[16px] md:text-[20px]">
              <span className="font-MerriExtraBold text-[#BB1B06]">
                Our vision
              </span>{" "}
              is to be a leading force in Nigeria's economic development,
              driving innovation and sustainable growth across key sectors while
              improving the lives of our fellow citizens.
            </h1>
            <h1 className="text-[12px] md:text-[14px] font-MerriRegular pt-5 md:pt-7 text-[#667085]">
              TMDK Group is a diversified conglomerate committed to driving
              innovation and excellence across multiple sectors. With our
              dynamic subsidiary companies, we are dedicated to fostering
              growth, sustainability, and positive impact in Nigeria and beyond.
            </h1>
            <button className="text-[12px] md:text-[14px] shadow-sm hover:text-[#182736] border hover:border-[#D1D1D6] hover:bg-white mt-[30px] md:mt-[60px] flex items-center gap-2 md:gap-3 py-[8px] md:py-[12px] px-[12px] md:px-[18px] text-white font-MerriRegular bg-[#BB1B06]">
              More about our company
              <GoArrowRight size={17} />
            </button>
          </div>
        </div>
      </div>

      {/* Industries */}
      {/* <div className="flex relative w-full">
        <div className="h-[75vh] bg-white px-[80px] w-full">
          <h1 className="text-[#BB1B06] pt-[80px] text-[24px] font-MerriBold heading">
            Our Industries
          </h1>
        </div>
        <div className="h-[75vh] bg-[#182736] pr-[80px] w-full"></div>
        <div className="absolute top-[150px] right-0 left-0 bottom-0">
          <div className="flex justify-center gap-3">
            <div className="relative w-[368px] h-[398px] group">
              <div className="absolute top-6 left-6 text-[#182736] text-[24px] font-MerriSemiBold heading-text transition-transform duration-500 ease-out group-hover:translate-y-[-100%] group-hover:opacity-0">
                Agro Park
              </div>
              <img
                src={Agro}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="agro"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0 opacity-0 bg-[#BB1B06] transition-all duration-300 group-hover:h-[180px] group-hover:opacity-100 p-8 font-MerriRegular text-[12px] text-white">
                <h1>We provide comprehensive infrastructure</h1>
                <h1>for agro-industrial operations, </h1>
                <h1>collaborating with local farmers to create </h1>
                <h1>job opportunities and boost agricultural </h1>
                <h1>productivity.</h1>
                <MdArrowOutward size={17} className="mt-4" />
              </div>
            </div>
            <div className="relative w-[368px] h-[398px] group">
              <div className="absolute top-6 left-6 text-[#182736] text-[24px] font-MerriSemiBold heading-text transition-transform duration-500 ease-out group-hover:translate-y-[-100%] group-hover:opacity-0">
                Petrochemicals
              </div>
              <img
                src={PetroChemical}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="infrastructure"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0 opacity-0 bg-[#BB1B06] transition-all duration-300 group-hover:h-[180px] group-hover:opacity-100 p-8 font-MerriRegular text-[12px] text-white">
                <h1>Our efficient operations include receiving</h1>
                <h1>vessels, storing petroleum products, and</h1>
                <h1>distributing them via reliable trucking </h1>
                <h1>services, thereby contributing to the</h1>
                <h1>nation's energy security.</h1>
                <MdArrowOutward size={17} className="mt-4" />
              </div>
            </div>
            <div className="relative w-[368px] h-[398px] group">
              <div className="absolute top-6 left-6 text-[#182736] text-[24px] font-MerriSemiBold heading-text transition-transform duration-500 ease-out group-hover:translate-y-[-100%] group-hover:opacity-0">
                Infrastructure
              </div>
              <img
                src={Infrastructure}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="petrochemical"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0 opacity-0 bg-[#BB1B06] transition-all duration-300 group-hover:h-[180px] group-hover:opacity-100 p-8 font-MerriRegular text-[12px] text-white">
                <h1>We provide comprehensive infrastructure</h1>
                <h1>for agro-industrial operations, </h1>
                <h1>collaborating with local farmers to create </h1>
                <h1>job opportunities and boost agricultural </h1>
                <h1>productivity.</h1>
                <MdArrowOutward size={17} className="mt-4" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative"></div>

      {/* Recent News */}
      <div className="bg-[#F8F8F8] px-4 sm:px-6 md:px-8 lg:px-[5%] py-[40px] md:py-[60px] lg:py-[80px]">
        <div className="max-w-[80rem] w-full mx-auto">
          <div className="flex items-center pb-7 justify-between">
            <h1 className="text-[#182736] text-[20px] sm:text-[22px] md:text-[24px] font-MerriSemiBold">
              Recent News
            </h1>
            <button className="flex items-center gap-2 text-[12px] sm:text-[14px] font-MerriRegular text-[#BB1B06] border-[1px] sm:border-[1.5px] border-[#182736] hover:transition-all hover:text-[#182736] py-[8px] sm:py-[10px] px-[12px] sm:px-[16px]">
              View all news <GoArrowRight size={20} />
            </button>
          </div>
          <div className="flex justify-center">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="relative max-w-full sm:max-w-[25rem] lg:max-w-[30rem] h-[358px] lg:h-[auto]">
                <div
                  className="absolute flex items-end inset-0 bg-news bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                  <div className="relative p-4 sm:p-6 lg:p-7">
                    <button className="border-[1px] sm:border-[1.5px] mb-3 rounded-[4px] border-white py-[6px] sm:py-[8px] text-white px-[8px] sm:px-[12px] text-[10px] sm:text-[12px] font-MerriRegular">
                      Design
                    </button>
                    <div className="text-[16px] sm:text-[18px] lg:text-[20px] font-MerriSemiBold text-white">
                      <h1>Life is rarely a straight line… it’s</h1>
                      <h1>full of corners. But, wherever it</h1>
                      <h1>may take you, we can help.</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white inline-block max-w-full sm:max-w-[25rem] lg:max-w-[30rem] shadow-sm w-full">
                <div className="grid grid-cols-1">
                  <img
                    className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                    src={bgone}
                    alt="Description"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <button className="border-[1px] sm:border-[1.5px] mb-3 rounded-[4px] border-[#D1D1D6] py-[6px] sm:py-[8px] text-[#475467] px-[8px] sm:px-[12px] text-[10px] sm:text-[12px] font-MerriRegular">
                    Design
                  </button>
                  <h1 className="text-[#101828] pb-2 text-[16px] sm:text-[18px] lg:text-[20px] font-MerriSemiBold">
                    Migrating to Linear 101
                  </h1>
                  <h1 className="text-[#B9C0C6] pb-1 text-[10px] sm:text-[12px] lg:text-[14px] font-MerriRegular">
                    19 Jan 2024 • TMDK Group
                  </h1>
                  <h1 className="text-[#667085] text-[12px] sm:text-[14px] lg:text-[16px] font-MerriLight">
                    In 2010, we agreed that it was the right time to take years
                    of managerial experience further. Since then, our
                    development programs have helped ...
                  </h1>
                </div>
              </div>

              <div className="bg-white inline-block max-w-full sm:max-w-[25rem] lg:max-w-[30rem] shadow-sm w-full">
                <div className="grid grid-cols-1">
                  <img
                    className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover"
                    src={bgtwo}
                    alt="Description"
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <button className="border-[1px] sm:border-[1.5px] mb-3 rounded-[4px] border-[#D1D1D6] py-[6px] sm:py-[8px] text-[#475467] px-[8px] sm:px-[12px] text-[10px] sm:text-[12px] font-MerriRegular">
                    Design
                  </button>
                  <h1 className="text-[#101828] pb-2 text-[16px] sm:text-[18px] lg:text-[20px] font-MerriSemiBold">
                    Migrating to Linear 101
                  </h1>
                  <h1 className="text-[#B9C0C6] pb-1 text-[10px] sm:text-[12px] lg:text-[14px] font-MerriRegular">
                    19 Jan 2024 • TMDK Group
                  </h1>
                  <h1 className="text-[#667085] text-[12px] sm:text-[14px] lg:text-[16px] font-MerriLight">
                    In 2010, we agreed that it was the right time to take years
                    of managerial experience further. Since then, our
                    development programs have helped ...
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor's corner */}
      <div className="bg-[#182736] px-[5%] py-[80px]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-white pb-7 font-MerriBold text-[24px] sm:text-[30px] lg:text-[36px]">
            Investors’ Corner
          </h1>
          <div className="flex flex-col lg:flex-row mb-[20px]">
            <div className="bg-white flex-1 p-[32px] lg:p-[64px] flex flex-col justify-between">
              <div>
                <h1 className="text-[24px] sm:text-[30px] md:text-[36px] font-MerriBold text-[#182736]">
                  Our Commitment
                </h1>
                <h1 className="text-[24px] sm:text-[30px] md:text-[36px] pb-4 sm:pb-6 lg:pb-8 font-MerriBold text-[#182736]">
                  Through Investment
                </h1>
              </div>
              <p className="text-[#5C6D84] text-[16px] sm:text-[18px] md:text-[20px] font-MerriLight">
                TMDK Agro Park collaborates closely with local farmers, engaging
                them in provincial agricultural projects and creating job
                opportunities for the whole community. We provide agricultural
                guidance and training, conducting professional seminars in
                agronomy and livestock management.
              </p>
            </div>
            <div className="flex-1 lg:w-[608px] h-auto">
              <div
                className="w-full h-[200px] lg:h-[448px] flex items-center justify-center"
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
          <div className="flex flex-col md:flex-row gap-5">
            <div className="bg-[#BB1B06] w-full text-center p-[32px] sm:p-[48px] lg:p-[64px]">
              <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] font-MerriMedium text-white">
                600%
              </h1>
              <h1 className="text-[16px] sm:text-[18px] lg:text-[18px] font-semibold pb-2 text-white">
                Return on investment%
              </h1>
              <h1 className="font-normal text-[#D2D2D2]">
                Our customers have reported
              </h1>
              <h1 className="font-normal text-[#D2D2D2]">
                an average of ~600% ROI.
              </h1>
            </div>
            <div className="bg-white w-full text-center p-[32px] sm:p-[48px] lg:p-[64px]">
              <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] font-MerriMedium text-[#BC1B06]">
                200+
              </h1>
              <h1 className="text-[16px] sm:text-[18px] lg:text-[18px] font-semibold pb-2 text-[#182736]">
                5-star reviews
              </h1>
              <h1 className="font-normal text-[#818E98]">
                We’re proud of our 5-star
              </h1>
              <h1 className="font-normal text-[#818E98]">
                rating with over 200 reviews.
              </h1>
            </div>
            <div className="bg-[#818E98] w-full text-center p-[32px] sm:p-[48px] lg:p-[64px]">
              <h1 className="text-[36px] sm:text-[42px] lg:text-[48px] font-MerriMedium text-white">
                400+
              </h1>
              <h1 className="text-[16px] sm:text-[18px] lg:text-[18px] font-semibold pb-2 text-[#182736]">
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
      </div>

      {/* Trusted Partners */}
      <div className="bg-[#F8F8F8] py-[80px] flex flex-col px-[5%]">
        <div className="max-w-[80rem] w-full mx-auto flex flex-col lg:flex-row">
          <div className="bg-[#182736] flex items-center justify-center p-[32px] lg:p-[64px] w-full lg:w-[40%]">
            <h1 className="text-white font-MerriBold text-[24px] lg:text-[30px]">
              Our Trusted Partners
            </h1>
          </div>
          <div className="bg-white grid grid-cols-2 gap-[32px] p-[32px] lg:grid-cols-3 lg:w-[60%] lg:p-[64px]">
            <div className="flex items-center gap-2">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <h1 className="text-[#101828] font-MerriBold text-[20px] lg:text-[24px]">
                Wildcrafted
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <h1 className="text-[#101828] font-MerriBold text-[20px] lg:text-[24px]">
                Wildcrafted
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <h1 className="text-[#101828] font-MerriBold text-[20px] lg:text-[24px]">
                Wildcrafted
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <h1 className="text-[#101828] font-MerriBold text-[20px] lg:text-[24px]">
                Wildcrafted
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <h1 className="text-[#101828] font-MerriBold text-[20px] lg:text-[24px]">
                Wildcrafted
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <img src={Icon} alt="icon" className="w-10 h-10" />
              <h1 className="text-[#101828] font-MerriBold text-[20px] lg:text-[24px]">
                Wildcrafted
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
