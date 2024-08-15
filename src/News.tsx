import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
const News = () => {
  return (
    <div>
      <header className="px-[7%] pt-[80px] pb-[30px]">
        <div className="max-w-[80rem] mx-auto w-full">
          <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
            News/Media
          </h1>
          <h1 className="text-[30px] pb-7 text-[#131D2C] font-MerriSemiBold">
            Resources and insights
          </h1>
        </div>
      </header>

      {/* Improve design skills */}
      <div className="h-[60vh] bg-[#182736] px-[5%] py-[50px] md:py-[80px] flex items-end mx-[7%]">
        <div className="max-w-[80rem] mx-auto w-full">
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between w-full text-white">
              <div className="mb-4 md:mb-0">
                <h1 className="text-[18px] md:text-[20px] font-MerriSemiBold pb-2">
                  Improve your design skills: Develop an "eye" for design
                </h1>
                <h1 className="text-[12px] md:text-[13px] font-MerriRegular">
                  Tools and trends change, but good design is timeless. Learn
                  how to quickly develop an "eye" for design.
                </h1>
              </div>
              <div className="self-start md:self-end">
                <MdArrowOutward size={20} />
              </div>
            </div>
            <div className="text-white pt-5 md:pt-7 flex flex-col md:flex-row items-start md:items-end justify-between">
              <div className="mb-4 md:mb-0">
                <h1 className="text-[11px] md:text-[12px] font-MerriSemiBold pb-2">
                  Published on
                </h1>
                <h1 className="text-[13px] md:text-[14px] font-MerriSemiBold">
                  10 April 2024
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-[6px] md:gap-[8px]">
                <div className="border-[1.5px] text-[11px] md:text-[12px] font-MerriMedium inline-block border-white rounded-[16px] py-[2px] px-[8px] md:px-[10px]">
                  Agro Park
                </div>
                <div className="border-[1.5px] text-[11px] md:text-[12px] font-MerriMedium inline-block border-white rounded-[16px] py-[2px] px-[8px] md:px-[10px]">
                  Feed Mill
                </div>
                <div className="border-[1.5px] text-[11px] md:text-[12px] font-MerriMedium inline-block border-white rounded-[16px] py-[2px] px-[8px] md:px-[10px]">
                  Starter
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most recent */}
      <div className="px-[7%] py-[80px]">
        <div className="max-w-[80rem] mx-auto w-full">
          <div className="md:flex block flex-wrap items-end justify-between">
            <div className="flex sm:gap-[32px] gap-[16px] md:w-auto mb-4 w-full font-MerriSemiBold text-[14px] border-b-[1.5px] border-[#E4E7EC] text-[#667085]">
              <div className="text-[#BC1B06] pb-[12px] px-1 border-b-[1.5px] border-[#BC1B06]">
                View all
              </div>
              <div className="pb-[12px] px-[2px] sm:px-1">Group</div>
              <div className="pb-[12px] px-[2px] sm:px-1">Agro Park</div>
              <div className="pb-[12px] px-[2px] sm:px-1">Petrochemicals</div>
              <div className="pb-[12px] px-[2px] sm:px-1">Infrastructure</div>
            </div>
            <div className="text-[#101828] py-[10px] px-[14px] text-[14px] inline-block border-[1.5px] border-[#D0D5DD] rounded-[8px] font-MerriMedium">
              <h1 className="flex justify-between gap-7 items-center">
                Most recent
                <IoIosArrowDown size={20} className="text-[#667085]" />
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] pt-[60px]">
            {[
              "Dedicated to sustained growth",
              "Sustaining growth through innovation",
              "The future of technology in our sector",
              "Embracing sustainability for growth",
              "Achieving excellence in operations",
              "Driving growth through partnerships",
            ].map((title, index) => (
              <div key={index} className="flex flex-col">
                <div className="h-[250px] w-full bg-[#F8F8F8]"></div>
                <div className="flex-grow pt-5 flex flex-col">
                  <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                    {title}
                  </h1>
                  <div className="text-[#475467] text-[14px] font-MerriRegular">
                    <p>How do you create compelling presentations that</p>
                    <p>wow your colleagues and impress your managers?</p>
                  </div>
                  <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold mt-auto">
                    Read Post
                    <MdArrowOutward />
                  </h1>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t-[1.5px] mt-[50px] font-MerriSemiBold text-[12px] text-[#475467] flex pt-[20px] justify-between items-center border-[#E4E7EC] w-full">
            <h1 className="flex items-center gap-2">
              <GoArrowLeft size={17} />
              Previous
            </h1>
            <div className="font-MerriMedium flex items-center">
              <div className="h-[35px] w-[35px] flex items-center justify-center rounded-[20px] bg-[#F8F8F8]">
                1
              </div>
              <div className="h-[35px] w-[35px] flex items-center justify-center">
                2
              </div>
              <div className="h-[35px] w-[35px] flex items-center justify-center">
                3
              </div>
              <div className="h-[35px] w-[35px] flex items-center justify-center">
                ...
              </div>
              <div className="h-[35px] w-[35px] flex items-center justify-center">
                8
              </div>
              <div className="h-[35px] w-[35px] flex items-center justify-center">
                9
              </div>
              <div className="h-[35px] w-[35px] flex items-center justify-center">
                10
              </div>
            </div>
            <h1 className="flex items-center gap-2">
              Next
              <GoArrowRight size={17} />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
