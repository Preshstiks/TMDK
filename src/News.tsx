import { MdArrowOutward } from "react-icons/md";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const News = () => {
  return (
    <div>
      <header className="px-[7%] pt-[80px] pb-[30px]">
        <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
          News/Media
        </h1>
        <h1 className="text-[30px] pb-7 text-[#131D2C] font-MerriSemiBold">
          Resources and insights
        </h1>
      </header>

      {/* Improve design skills */}
      <div className="h-[70vh] bg-[#182736] px-[30px] py-[80px] flex items-end mx-[7%]">
        <div className="w-full">
          <div className="flex justify-between w-full text-white">
            <div>
              <h1 className="text-[20px] font-MerriSemiBold pb-2">
                Improve your design skills: Develop an "eye" for design
              </h1>
              <h1 className="text-[13px] font-MerriRegular">
                Tools and trends change, but good design is timeless. Learn how
                to quickly develop an "eye" for design.
              </h1>
            </div>
            <div>
              <MdArrowOutward size={20} />
            </div>
          </div>
          <div className="text-white pt-7 flex items-end justify-between">
            <div>
              <h1 className="text-[12px] font-MerriSemiBold pb-2">
                Published on
              </h1>
              <h1 className="text-[14px] font-MerriSemiBold">10 April 2024</h1>
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="border-[1.5px] text-[12px] font-MerriMedium inline-block border-white rounded-[16px] py-[2px] px-[10px]">
                Agro Park
              </div>
              <div className="border-[1.5px] text-[12px] font-MerriMedium inline-block border-white rounded-[16px] py-[2px] px-[10px]">
                Feed Mill
              </div>
              <div className="border-[1.5px] text-[12px] font-MerriMedium inline-block border-white rounded-[16px] py-[2px] px-[10px]">
                Starter
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most recent */}
      <div className="px-[7%] py-[80px]">
        <div className="flex items-end justify-between">
          <div className="flex gap-[32px] font-MerriSemiBold text-[14px] border-b-[1.5px] border-[#E4E7EC] text-[#667085]">
            <div className="text-[#BC1B06] pb-[12px] px-1 border-b-[1.5px] border-[#BC1B06]">
              View all
            </div>
            <div className=" pb-[12px] px-1">Group</div>
            <div className=" pb-[12px] px-1">Agro Park</div>
            <div className=" pb-[12px] px-1">Petrochemicals</div>
            <div className=" pb-[12px] px-1">Infrastructure</div>
          </div>
          <div className="text-[#101828] py-[10px] px-[14px] text-[14px] inline-block border-[1.5px] border-[#D0D5DD] rounded-[8px] font-MerriMedium ">
            <h1 className="flex justify-between gap-7 items-center">
              Most recent
              <IoIosArrowDown size={20} className="text-[#667085]" />
            </h1>
          </div>
        </div>
        <div>
          <div className="flex justify-between pt-[60px]">
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  How do you create compelling presentations that
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  wow your colleagues and impress your managers?
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  Linear helps streamline software projects, sprints,
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  tasks, and bug tracking. Here’s how to get started.
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  The rise of RESTful APIs has been met by a rise in
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  tools for creating, testing, and managing them.
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-[40px]">
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  Like to know the secrets of transforming a 2-14
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  team into a 3x Super Bowl winning Dynasty?
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  Mental models are simple expressions of complex
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  processes or relationships.
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  Introduction to Wireframing and its Principles
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  Learn from the best in the industry.
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-[40px]">
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  Collaboration can make our teams stronger, and
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  our individual designs better.
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  JavaScript frameworks make development easy
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  with extensive features and functionalities
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
            <div>
              <div className="w-[340px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] pb-2 font-MerriSemiBold">
                  Dedicated to sustained growth
                </h1>
                <h1 className="text-[#475467] text-[14px] font-MerriRegular">
                  Starting a community doesn’t need to be
                </h1>
                <h1 className="text-[#475467] text-[14px] pb-3 font-MerriRegular">
                  complicated, but how do you get started?
                </h1>
                <h1 className="text-[#BB1B06] flex items-center gap-2 text-[13px] font-MerriBold">
                  Read Post
                  <MdArrowOutward />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
