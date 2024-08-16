import bg from "./assets/img/infrabg.webp";
import bgimg from "./assets/img/img.webp";
import { GoArrowRight } from "react-icons/go";
const Infrastructure = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[68vh] px-[5%] pb-[40px] md:pb-[80px] relative flex items-end"
      >
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="font-MerriBold leading-[40px] md:leading-[60px] text-[30px] md:text-[40px] text-white">
            Building Nigeria's
          </h1>
          <h1 className="font-MerriBold leading-[40px] md:leading-[60px] text-[30px] md:text-[40px] text-white">
            Future
          </h1>
        </div>
      </header>

      {/* about us */}
      <div className="bg-[#F8F8F8] p-[40px] md:p-[80px]">
        <div className="max-w-[80rem] w-full mx-auto flex flex-col xmd:gap-8 xmd:flex-row justify-between">
          <div className="mb-[40px] md:mb-0">
            <h1 className="text-[14px] font-MerriSemiBold text-[#0461BD]">
              About us
            </h1>
            <h1 className="text-[#131D2C] text-[32px] md:text-[48px] pt-[10px] font-MerriSemiBold">
              TMDK
            </h1>
            <h1 className="text-[#131D2C] text-[32px] md:text-[48px] font-MerriSemiBold">
              Infrastructure
            </h1>
          </div>
          <div>
            <h1 className="text-[#131D2C] font-MerriRegular text-[16px] md:text-[17px]">
              Focused on developing affordable, high-quality structures,
            </h1>
            <h1 className="text-[#131D2C] font-MerriRegular text-[16px] md:text-[17px]">
              TMDK Infrastructure is making its mark in the construction
            </h1>
            <h1 className="text-[#131D2C] font-MerriRegular text-[16px] md:text-[17px]">
              landscape. We also cater to the diverse needs of Commercial
            </h1>
            <h1 className="text-[#131D2C] font-MerriRegular text-[16px] md:text-[17px]">
              Real Estate, creating vibrant communities that combine
            </h1>
            <h1 className="text-[#131D2C] font-MerriRegular text-[16px] md:text-[17px]">
              comfort, functionality, and modern design.
            </h1>

            <button className="text-[14px] shadow-sm hover:text-[#182736] border hover:border-[#D1D1D6] hover:bg-white mt-[30px] md:mt-[60px] flex items-center gap-3 py-[12px] px-[18px] text-white font-MerriRegular bg-[#0461BD]">
              Download Brochure
              <GoArrowRight size={19} className="hover:text-white" />
            </button>
          </div>
        </div>
      </div>

      {/*What we do*/}
      <div className="bg-[#1C1C1C] py-[40px] sm:py-[60px] lg:py-[80px] px-[5%] md:px-[7%]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-[10px] sm:text-[12px] pb-2 sm:pb-4 font-MerriSemiBold text-white">
            Services
          </h1>
          <div className="flex flex-col xmd:flex-row justify-between pb-[80px] xmd:pb-[100px] lg:pb-[120px]">
            <div className="mb-4 sm:mb-0">
              <h1 className="text-[#0360BD] text-[20px] sm:text-[22px] lg:text-[25px] font-MerriRegular">
                What we do
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="border-t-[2px] text-[#484848] inline-block py-[24px] sm:py-[28px] lg:py-[32px] border-[#484848]">
              <h1 className="text-[18px] sm:text-[19px] lg:text-[20px] font-MerriBold">
                Residential Development
              </h1>
              <div className="text-[14px] font-MerriRegular">
                <p>We design and construct a range of</p>
                <p>housing options,from affordable </p>
                <p>apartments to premium homes, </p>
                <p>catering to diverse needs and budgets.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#484848] inline-block py-[24px] sm:py-[28px] lg:py-[32px] border-[#484848]">
              <h1 className="text-[18px] sm:text-[19px] lg:text-[20px] font-MerriBold">
                Commercial Real Estate
              </h1>
              <div className="text-[14px] font-MerriRegular">
                <p>Our portfolio includes office buildings,</p>
                <p>retail spaces, and mixed-use developments </p>
                <p>that foster economic growth and community </p>
                <p>engagement.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#484848] inline-block py-[24px] sm:py-[28px] lg:py-[32px] border-[#484848]">
              <h1 className="text-[18px] sm:text-[19px] lg:text-[20px] font-MerriBold">
                Urban Planning
              </h1>
              <div className="text-[14px] font-MerriRegular">
                <p>We work closely with local authorities to </p>
                <p>develop well-planned communities with </p>
                <p>essential amenities and green spaces.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#484848] inline-block py-[24px] sm:py-[28px] lg:py-[32px] border-[#484848]">
              <h1 className="text-[18px] sm:text-[19px] lg:text-[20px] font-MerriBold">
                Infrastructure Projects
              </h1>
              <div className="text-[14px] font-MerriRegular">
                <p>Beyond housing, we contribute to Nigeria's</p>
                <p>development through roads, bridges, and</p>
                <p>other critical infrastructure projects.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Get started */}
      <div className="bg-[#EDEDED] px-[5%] md:px-[7%] py-[40px] md:py-[80px]">
        <div className="text-[#101828] pb-[30px] md:pb-[60px] text-center py-4 font-MerriSemiBold text-[24px] md:text-[30px]">
          <h1>We’re only just getting started on our journey</h1>
          <h1 className="text-[#475467] text-[16px] md:text-[17px] pt-3">
            Everything you need to build modern UI and great products.
          </h1>
        </div>
        <div
          className="relative flex flex-col md:flex-row justify-center items-center gap-5 h-[auto] md:h-[60vh]"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bgimg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 md:p-8 text-center max-w-xs md:max-w-md mb-5 md:mb-0">
            <h1 className="text-[36px] md:text-[48px] font-MerriMedium text-white">
              400+
            </h1>
            <h1 className="text-[16px] md:text-[18px] font-semibold pb-2 text-white">
              Projects completed
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              We’ve helped build over 400 projects
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              with great companies.
            </h1>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 md:p-8 text-center max-w-xs md:max-w-md mb-5 md:mb-0">
            <h1 className="text-[36px] md:text-[48px] font-MerriMedium text-white">
              600%
            </h1>
            <h1 className="text-[16px] md:text-[18px] font-semibold pb-2 text-white">
              Return on investment
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              We’ve helped build over 400 projects
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              with great companies.
            </h1>
          </div>
          <div className="bg-white bg-opacity-20 backdrop-blur-md p-6 md:p-8 text-center max-w-xs md:max-w-md">
            <h1 className="text-[36px] md:text-[48px] font-MerriMedium text-white">
              10k
            </h1>
            <h1 className="text-[16px] md:text-[18px] font-semibold pb-2 text-white">
              Global downloads
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">
              Our free UI kit has been downloaded
            </h1>
            <h1 className="font-normal text-[#D2D2D2]">over 10k times.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
