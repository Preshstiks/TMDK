import { BsFacebook, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import footerLogo from "../../assets/img/footerlogo.webp";
const Footer = () => {
  return (
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
                <Link className="pb-3 hover:text-[#98A2B3]" to="/about">
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
                <Link className="pb-3" to="/news">
                  Media
                </Link>
                <Link className="pb-2 flex items-center gap-2" to="/career">
                  Careers{" "}
                  <span className="text-[11px] font-MerriMedium p-2 rounded-[6px] border border-white">
                    New
                  </span>
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
  );
};

export default Footer;
