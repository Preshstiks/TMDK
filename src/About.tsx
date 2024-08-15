import bgColored from "./assets/img/rainbow.webp";
import AboutImg from "./assets/img/about.webp";
import Frame from "./assets/img/frame.webp";
import { RxDot } from "react-icons/rx";
import Logo from "./assets/img/trans.webp";
import { GoArrowRight } from "react-icons/go";
const About = () => {
  return (
    <div>
      <header className="bg-[#182736] px-[5%] sm:px-[7%] pb-[80px] relative">
        <div className="max-w-[80rem] h-[68vh] flex flex-col md:flex-row justify-between w-full mx-auto">
          <div className="sm:pt-[112px] pt-[80px]">
            <h1 className="font-MerriBold leading-[40px] sm:leading-[60px] text-[36px] sm:text-[48px] text-white">
              Empowering Nigeria's Future:
            </h1>
            <h1 className="font-MerriBold leading-[40px] sm:leading-[60px] text-[36px] sm:text-[48px] text-white">
              Building Prosperity, Creating
            </h1>
            <h1 className="font-MerriBold leading-[40px] sm:leading-[60px] text-[36px] sm:text-[48px] text-white">
              Opportunities.
            </h1>
          </div>
          <div className="flex justify-start md:justify-end items-end mt-4 sm:mt-0">
            <div className="text-[14px] font-MerriRegular border-t-2 inline-flex pt-2 text-white border-[#BB1B06]">
              <div className="py-[12px] px-[10px] sm:px-[18px]">
                Our Philosophy
              </div>
              <div className="py-[12px] px-[10px] sm:px-[18px]">Our Values</div>
              <div className="py-[12px] px-[10px] sm:px-[18px]">Leadership</div>
            </div>
          </div>
          <img
            className="absolute bottom-0 right-0 max-w-full sm:max-w-none"
            src={bgColored}
            alt="bg"
          />
        </div>
      </header>

      {/* Who we are */}
      <div className="py-[40px] sm:py-[80px] px-[5%] sm:px-[7%]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-[#BB1B06] pb-2 text-[14px] sm:text-[18px] font-MerriSemiBold">
            Who we are
          </h1>
          <h1 className="text-[24px] sm:text-[30px] sm:mb-0 mb-5 pb-4 sm:pb-7 text-[#131D2C] font-MerriSemiBold">
            The Company
          </h1>
          <div>
            <div className="relative flex flex-col sm:flex-row">
              <div className="w-full sm:w-[572px]">
                <img
                  src={AboutImg}
                  className="w-full sm:w-[572px] h-[200px] sm:h-[320px]"
                  alt="about"
                />
              </div>
              <div className="py-6 sm:py-[46px] px-6 sm:px-[64px] absolute sm:static bottom-0 left-0 sm:left-[500px] right-0 max-w-full sm:max-w-[798px] bg-[#F8F8F8]">
                <h1 className="text-[#131D2C] font-MerriRegular text-[20px] sm:text-[24px]">
                  Our philosophy is to boost
                </h1>
                <h1 className="text-[#131D2C] font-MerriRegular text-[20px] sm:text-[24px]">
                  prosperity, foster economic
                </h1>
                <h1 className="text-[#131D2C] font-MerriRegular text-[20px] sm:text-[24px]">
                  growth and advancing
                </h1>
                <h1 className="text-[#131D2C] font-MerriRegular text-[20px] sm:text-[24px]">
                  development.
                </h1>
                <div className="font-MerriRegular text-[14px] text-[#667085] pt-3 sm:pt-4">
                  <h1>
                    Our journey is marked by innovation, strategic growth,
                  </h1>
                  <h1>and a commitment to excellence in everything we do</h1>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mt-6 sm:mt-8">
              <div className="bg-[#F8F8F8] w-full sm:w-1/2 px-[20px] sm:px-[30px] py-[14px] sm:py-[19px]">
                <div className="border-l-2 border-[#BB1B06] pl-2 sm:pl-3">
                  <h1 className="text-[#131D2C] font-MerriLight">
                    “Our ambition is to be the preferred
                  </h1>
                  <h1 className="text-[#131D2C] font-MerriLight">
                    international financial partner for our clients”
                  </h1>
                  <h1 className="text-[14px] font-MerriRegular">
                    <span className="font-MerriBold">Buba Yusuf</span> -
                    Managing Director
                  </h1>
                </div>
              </div>
              <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                <img src={Frame} className="h-[110px] w-full" alt="frame" />
              </div>
            </div>
          </div>
          <div className="pt-8 sm:pt-[55px] flex flex-col sm:flex-row justify-between gap-8 sm:gap-0">
            <div>
              <h1 className="text-[18px] sm:text-[20px] text-[#BB1B06] font-MerriBold pb-2 sm:pb-3">
                Mission
              </h1>
              <div className="text-[16px] sm:text-[17px] font-MerriLight text-[#5C6D84]">
                <h1>To be a leading force in Nigeria's</h1>
                <h1>economic development, driving</h1>
                <h1>innovation and sustainable growth</h1>
                <h1>across key sectors while improving the</h1>
                <h1>lives of our fellow citizens.</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[18px] sm:text-[20px] text-[#BB1B06] font-MerriBold pb-2 sm:pb-3">
                Vision
              </h1>
              <div className="text-[16px] sm:text-[17px] font-MerriLight text-[#5C6D84]">
                <h1>To be a leading force in Nigeria's</h1>
                <h1>economic development, driving</h1>
                <h1>innovation and sustainable growth</h1>
                <h1>across key sectors while improving the</h1>
                <h1>lives of our fellow citizens.</h1>
              </div>
            </div>
            <div>
              <h1 className="text-[18px] sm:text-[20px] text-[#BB1B06] font-MerriBold pb-2 sm:pb-3">
                Journey
              </h1>
              <div className="text-[16px] sm:text-[17px] font-MerriLight text-[#5C6D84]">
                <h1>To be a leading force in Nigeria's</h1>
                <h1>economic development, driving</h1>
                <h1>innovation and sustainable growth</h1>
                <h1>across key sectors while improving the</h1>
                <h1>lives of our fellow citizens.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#182736] px-[5%] sm:px-[7%] py-10 sm:py-[80px]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-[#BB1B06] pb-2 text-[18px] sm:text-[20px] font-MerriSemiBold">
            Values
          </h1>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-[32px] pt-7">
            <div className="text-white text-[24px] sm:text-[31px] font-MerriBold">
              <h1>Dedicated to</h1>
              <h1>sustained growth</h1>
            </div>
            <div className="text-[#5C6D84] text-[16px] sm:text-[18px] font-MerriLight">
              <h1>We leverage our business and expertise to help address</h1>
              <h1>
                economic and societal challenges, supporting our clients and
              </h1>
              <h1>providing targeted capital to contribute to an inclusive,</h1>
              <h1>sustainable economy.</h1>
            </div>
          </div>
          <div className="pt-10 sm:pt-12 flex flex-col xmd:flex-row justify-between gap-8 sm:gap-0">
            <div className="border-4 border-[#BB1B06] w-full xmd:w-[24%] p-6 sm:p-[32px]">
              <div className="flex items-center space-x-2">
                <RxDot size={20} className="text-[#BB1B06]" />
                <h1 className="font-MerriLight text-[12px] text-white">01.</h1>
              </div>
              <div className="pt-6 sm:pt-8">
                <h1 className="text-white font-MerriRegular text-[18px] sm:text-[20px]">
                  Excellence
                </h1>
                <div className="text-[14px] sm:text-[14px] pt-2 sm:pt-3 font-normal text-[#5C6D84]">
                  <h1>We pursue the highest</h1>
                  <h1>standards in all our</h1>
                  <h1>endeavours.</h1>
                </div>
              </div>
            </div>
            <div className="border-4 border-[#BB1B06] bg-[#BB1B06] w-full sm:w-[24%] p-6 sm:p-[32px]">
              <div className="flex items-center space-x-2">
                <RxDot size={20} className="text-[#182736]" />
                <h1 className="font-MerriLight text-[12px] text-white">02.</h1>
              </div>
              <div className="pt-6 sm:pt-8">
                <h1 className="text-white font-MerriRegular text-[18px] sm:text-[20px]">
                  Innovation
                </h1>
                <div className="text-[14px] sm:text-[14px] pt-2 sm:pt-3 font-normal text-[#F8F8F8]">
                  <h1>We constantly seek new</h1>
                  <h1>and better ways to serve</h1>
                  <h1>our customers and</h1>
                  <h1>stakeholders.</h1>
                </div>
              </div>
            </div>
            <div className="border-4 border-[#BB1B06] w-full sm:w-[24%] p-6 sm:p-[32px]">
              <div className="flex items-center space-x-2">
                <RxDot size={20} className="text-[#BB1B06]" />
                <h1 className="font-MerriLight text-[12px] text-white">03.</h1>
              </div>
              <div className="pt-6 sm:pt-8">
                <h1 className="text-white font-MerriRegular text-[18px] sm:text-[20px]">
                  Integrity
                </h1>
                <div className="text-[14px] sm:text-[14px] pt-2 sm:pt-3 font-normal text-[#5C6D84]">
                  <h1>We conduct our business</h1>
                  <h1>with honesty, transparency,</h1>
                  <h1>and ethical practices.</h1>
                </div>
              </div>
            </div>
            <div className="border-4 border-[#BB1B06] bg-[#BB1B06] w-full sm:w-[25%] p-6 sm:p-[34px]">
              <div className="flex items-center space-x-2">
                <RxDot size={20} className="text-[#182736]" />
                <h1 className="font-MerriLight text-[12px] text-white">04.</h1>
              </div>
              <div className="pt-6 sm:pt-8">
                <h1 className="text-white font-MerriRegular text-[18px] sm:text-[20px]">
                  Sustainability
                </h1>
                <div className="text-[14px] sm:text-[14px] pt-2 sm:pt-3 font-normal text-[#F8F8F8]">
                  <h1>We are committed to</h1>
                  <h1>environmentally responsible</h1>
                  <h1>practices and long-term</h1>
                  <h1>value creation.</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}

      {/*New*/}

      <div className="px-[5%] sm:px-[7%] py-[80px]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
            Our Team
          </h1>
          <h1 className="text-[30px] pb-7 text-[#131D2C] font-MerriSemiBold">
            Meet TMDK Leadership team
          </h1>

          <div className="flex flex-wrap -mx-4">
            {/* Image card */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] relative overflow-hidden">
                  <img
                    src={AboutImg}
                    alt="about"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Nikolas Gibbons
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Group Chairman
                  </h1>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] bg-[#F8F8F8] relative"></div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] bg-[#F8F8F8] relative"></div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] bg-[#F8F8F8] relative"></div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] relative overflow-hidden">
                  <img
                    src={Logo}
                    className="absolute inset-0 w-full h-full object-contain"
                    alt="logo"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] bg-[#F8F8F8] relative"></div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] bg-[#F8F8F8] relative"></div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="h-full flex flex-col">
                <div className="w-full pb-[100%] bg-[#F8F8F8] relative"></div>
                <div className="pt-5 flex-grow">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-[64px]">
            <div className="max-w-2xl">
              <div className="border-l-2 text-[15.7px] border-[#BB1B06] pl-3">
                <h1 className="text-[#131D2C] font-MerriLight">
                  We believe that our people are our greatest asset. Our
                  diverse, talented, and dedicated workforce is the driving
                  force behind our success and continued growth. We are proud to
                  have assembled a team of professionals who bring passion,
                  expertise, and innovation to every aspect of our operations.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Build your future */}
      <div className="bg-[#F8F8F8] px-[5%] sm:px-[7%] py-[80px]">
        <div className="bg-white text-center p-[64px]">
          <h1 className="text-[#101828] pb-4 text-[30px] font-MerriBold">
            Build Your Future with Us
          </h1>
          <div className="text-[17px] text-[#475467] font-MerriRegular">
            <h1>We’re always looking for smart, motivated people.</h1>
            <h1>connect with us on Linkedin. We’d love to meet you!</h1>
          </div>
          <div className="flex justify-center pt-8">
            <button className="text-white flex items-center gap-2 bg-[#BB1B06] py-[12px] px-[64px] font-semibold text-[14px]">
              Linkedin
              <GoArrowRight size={19} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
