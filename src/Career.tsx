import { GoDotFill } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { LuClock4 } from "react-icons/lu";
import CareerImg from "./assets/img/career.webp";
const Career = () => {
  return (
    <div>
      <header className="px-[7%] pt-[80px] pb-[55px]">
        <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
          We're hiring!
        </h1>
        <h1 className="text-[30px] pb-5 text-[#131D2C] font-MerriSemiBold">
          Start doing work that matters
        </h1>
        <div className="text-[18px] font-MerriRegular text-[#475467]">
          <h1>
            Our philosophy is simple — hire a team of diverse, passionate people
            and foster a
          </h1>
          <h1>culture that empowers you to do you best work.</h1>
        </div>
      </header>

      {/* Hiring details */}
      <div className="px-[7%] py-[80px] space-x-[200px] justify-between flex">
        <div className="w-full">
          <div className="border-t-[1.5px] border-[#E4E7EC] pt-[24px] mb-[24px]">
            <div className="flex gap-4 items-center pb-3">
              <h1 className="font-MerriSemiBold text-[#101828]">
                Product Designer
              </h1>
              <div className="text-[#175CD3] items-center gap-1 py-[1px] px-[6px] inline-flex border border-[#B2DDFF] bg-[#EFF8FF] rounded-[16px] text-[12px] font-MerriMedium">
                <GoDotFill size={10} className="text-[#2E90FA]" />
                Design
              </div>
            </div>
            <h1 className="text-[#475467] font-MerriRegular pb-5 text-[14px]">
              We’re looking for a mid-level product designer to join our team.
            </h1>
            <div className="text-[#667085] font-MerriMedium text-[14px] flex items-center gap-7">
              <h1 className="flex items-center gap-2">
                <GrLocation size={19} className="text-[#98A2B3]" />
                Remote
              </h1>
              <h1 className="flex items-center gap-2">
                <LuClock4 size={19} className="text-[#98A2B3]" />
                Full-time
              </h1>
            </div>
          </div>
          <div className="border-t-[1.5px] border-[#E4E7EC] pt-[24px] mb-[24px]">
            <div className="flex gap-4 items-center pb-3">
              <h1 className="font-MerriSemiBold text-[#101828]">
                Engineering Manager
              </h1>
              <div className="text-[#C11574] items-center gap-1 py-[1px] px-[6px] inline-flex border border-[#FCCEEE] bg-[#FDF2FA] rounded-[16px] text-[12px] font-MerriMedium">
                <GoDotFill size={10} className="text-[#EE46BC]" />
                Software Development
              </div>
            </div>
            <h1 className="text-[#475467] font-MerriRegular pb-5 text-[14px]">
              We’re looking for an experienced engineering manager to join our
              team.
            </h1>
            <div className="text-[#667085] font-MerriMedium text-[14px] flex items-center gap-7">
              <h1 className="flex items-center gap-2">
                <GrLocation size={19} className="text-[#98A2B3]" />
                Remote
              </h1>
              <h1 className="flex items-center gap-2">
                <LuClock4 size={19} className="text-[#98A2B3]" />
                Full-time
              </h1>
            </div>
          </div>
          <div className="border-t-[1.5px] border-[#E4E7EC] pt-[24px] mb-[24px]">
            <div className="flex gap-4 items-center pb-3">
              <h1 className="font-MerriSemiBold text-[#101828]">
                Customer Success Manager
              </h1>
              <div className="text-[#067647] items-center gap-1 py-[1px] px-[6px] inline-flex border border-[#ABEFC6] bg-[#ECFDF3] rounded-[16px] text-[12px] font-MerriMedium">
                <GoDotFill size={10} className="text-[#17B26A]" />
                Careers
              </div>
            </div>
            <h1 className="text-[#475467] font-MerriRegular pb-5 text-[14px]">
              We’re looking for an experienced engineering manager to join our
              team.
            </h1>
            <div className="text-[#667085] font-MerriMedium text-[14px] flex items-center gap-7">
              <h1 className="flex items-center gap-2">
                <GrLocation size={19} className="text-[#98A2B3]" />
                Remote
              </h1>
              <h1 className="flex items-center gap-2">
                <LuClock4 size={19} className="text-[#98A2B3]" />
                Full-time
              </h1>
            </div>
          </div>
          <div className="border-t-[1.5px] border-[#E4E7EC] pt-[24px] mb-[24px]">
            <div className="flex gap-4 items-center pb-3">
              <h1 className="font-MerriSemiBold text-[#101828]">
                Account Executive
              </h1>
              <div className="text-[#3538CD] items-center gap-1 py-[1px] px-[6px] inline-flex border border-[#C7D7FE] bg-[#EEF4FF] rounded-[16px] text-[12px] font-MerriMedium">
                <GoDotFill size={10} className="text-[#6172F3]" />
                Sales
              </div>
            </div>
            <h1 className="text-[#475467] font-MerriRegular pb-5 text-[14px]">
              We’re looking for an account executive to join our team.
            </h1>
            <div className="text-[#667085] font-MerriMedium text-[14px] flex items-center gap-7">
              <h1 className="flex items-center gap-2">
                <GrLocation size={19} className="text-[#98A2B3]" />
                Remote
              </h1>
              <h1 className="flex items-center gap-2">
                <LuClock4 size={19} className="text-[#98A2B3]" />
                Full-time
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={CareerImg} className="w-[450px]" alt="career" />
        </div>
      </div>
    </div>
  );
};

export default Career;
