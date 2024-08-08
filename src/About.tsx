import bgColored from "./assets/img/rainbow.webp";
import AboutImg from "./assets/img/about.webp";
import Frame from "./assets/img/frame.webp";
import { RxDot } from "react-icons/rx";
import Logo from "./assets/img/trans.webp";
import { GoArrowRight } from "react-icons/go";
const About = () => {
  return (
    <div>
      <header className="bg-[#182736] h-[60vh] px-[7%]  pb-[80px] relative">
        <div className="pt-[112px]">
          <h1 className="font-MerriBold leading-[60px] text-[48px] text-white">
            Empowering Nigeria's Future:
          </h1>
          <h1 className="font-MerriBold leading-[60px] text-[48px] text-white">
            Building Prosperity, Creating
          </h1>
          <h1 className="font-MerriBold leading-[60px] text-[48px] text-white">
            Opportunities.
          </h1>
        </div>
        <img className="absolute bottom-0 right-0" src={bgColored} alt="bg" />
        <div className="absolute bottom-6 right-[70px]">
          <div className="text-[14px] font-MerriRegular border-t-2 inline-flex pt-2 text-white border-[#BB1B06]">
            <div className="py-[12px] px-[18px]">Our Philosophy</div>
            <div className="py-[12px] px-[18px]">Our Values </div>
            <div className="py-[12px] px-[18px]">Leadership</div>
          </div>
        </div>
      </header>

      {/* Who we are */}
      <div className="py-[80px] px-[7%] ">
        <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
          Who we are
        </h1>
        <h1 className="text-[30px] pb-7 text-[#131D2C] font-MerriSemiBold">
          The Company
        </h1>
        <div>
          <div className="relative">
            <div>
              <img src={AboutImg} className="w-[572px] h-[320px]" alt="about" />
            </div>
            <div className="py-[46px] px-[64px] absolute bottom-0 left-[500px] right-0 max-w-[798px] bg-[#F8F8F8]">
              <h1 className="text-[#131D2C] font-MerriRegular text-[24px]">
                Our philosophy is to boost
              </h1>
              <h1 className="text-[#131D2C] font-MerriRegular text-[24px]">
                prosperity, foster economic
              </h1>
              <h1 className="text-[#131D2C] font-MerriRegular text-[24px]">
                growth and advancing
              </h1>
              <h1 className="text-[#131D2C] font-MerriRegular text-[24px]">
                development.
              </h1>
              <div className="font-MerriRegular text-[14px] text-[#667085] pt-4">
                <h1>Our journey is marked by innovation, strategic growth,</h1>
                <h1>and a commitment to excellence in everything we do</h1>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="bg-[#F8F8F8] w-full px-[30px] py-[19px]">
              <div className="border-l-2 border-[#BB1B06] pl-3">
                <h1 className="text-[#131D2C] font-MerriLight">
                  “Our ambition is to be the preferred
                </h1>
                <h1 className="text-[#131D2C] font-MerriLight">
                  international financial partner for our clients”
                </h1>
                <h1 className="text-[14px] font-MerriRegular">
                  <span className="font-MerriBold">Buba Yusuf</span> - Managing
                  Director{" "}
                </h1>
              </div>
            </div>
            <div className="w-full">
              <img src={Frame} className="h-[110px] w-full" alt="frame" />
            </div>
          </div>
        </div>
        <div className="pt-[55px] flex justify-between">
          <div>
            <h1 className="text-[20px] text-[#BB1B06] font-MerriBold pb-3">
              Mission
            </h1>
            <div className="text-[17px] font-MerriLight text-[#5C6D84]">
              <h1>To be a leading force in Nigeria's</h1>
              <h1>economic development, driving </h1>
              <h1>innovation and sustainable growth</h1>
              <h1>across key sectors while improving the</h1>
              <h1>lives of our fellow citizens.</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] text-[#BB1B06] font-MerriBold pb-3">
              Vision
            </h1>
            <div className="text-[17px] font-MerriLight text-[#5C6D84]">
              <h1>To be a leading force in Nigeria's</h1>
              <h1>economic development, driving </h1>
              <h1>innovation and sustainable growth</h1>
              <h1>across key sectors while improving the</h1>
              <h1>lives of our fellow citizens.</h1>
            </div>
          </div>
          <div>
            <h1 className="text-[20px] text-[#BB1B06] font-MerriBold pb-3">
              Journey
            </h1>
            <div className="text-[17px] font-MerriLight text-[#5C6D84]">
              <h1>To be a leading force in Nigeria's</h1>
              <h1>economic development, driving </h1>
              <h1>innovation and sustainable growth</h1>
              <h1>across key sectors while improving the</h1>
              <h1>lives of our fellow citizens.</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-[#182736] px-[7%]  py-[80px]">
        <h1 className="text-[#BB1B06] pb-2 text-[20px] font-MerriSemiBold">
          Values
        </h1>
        <div className="flex justify-between pt-7">
          <div className="text-white text-[31px] font-MerriBold">
            <h1>Dedicated to</h1>
            <h1>sustained growth</h1>
          </div>
          <div className="text-[#5C6D84] font-MerriLight">
            <h1>We leverage our business and expertise to help address </h1>
            <h1>
              economic and societal challenges, supporting our clients and{" "}
            </h1>
            <h1>providing targeted capital to contribute to an inclusive, </h1>
            <h1>sustainable economy.</h1>
          </div>
        </div>
        <div className="pt-12 flex justify-between">
          <div className="border-4 border-[#BB1B06] inline-block p-[32px]">
            <div className="flex items-center space-x-2">
              <RxDot size={20} className="text-[#BB1B06]" />
              <h1 className="font-MerriLight text-[12px] text-white">01.</h1>
            </div>
            <div className="pt-8">
              <h1 className="text-white font-MerriRegular text-[20px]">
                Excellence
              </h1>
              <div className="text-[14px] pt-3 font-normal text-[#5C6D84]">
                <h1>We pursue the highest </h1>
                <h1>standards in all our </h1>
                <h1>endeavours.</h1>
              </div>
            </div>
          </div>
          <div className="border-4 border-[#BB1B06] bg-[#BB1B06] inline-block p-[32px]">
            <div className="flex items-center space-x-2">
              <RxDot size={20} className="text-[#182736]" />
              <h1 className="font-MerriLight text-[12px] text-white">02.</h1>
            </div>
            <div className="pt-8">
              <h1 className="text-white font-MerriRegular text-[20px]">
                Innovation
              </h1>
              <div className="text-[14px] pt-3 font-normal text-[#F8F8F8]">
                <h1>We constantly seek new </h1>
                <h1>and better ways to serve </h1>
                <h1>our customers and </h1>
                <h1>stakeholders.</h1>
              </div>
            </div>
          </div>
          <div className="border-4 border-[#BB1B06] inline-block p-[32px]">
            <div className="flex items-center space-x-2">
              <RxDot size={20} className="text-[#BB1B06]" />
              <h1 className="font-MerriLight text-[12px] text-white">03.</h1>
            </div>
            <div className="pt-8">
              <h1 className="text-white font-MerriRegular text-[20px]">
                Integrity
              </h1>
              <div className="text-[14px] pt-3 font-normal text-[#5C6D84]">
                <h1>We conduct our business </h1>
                <h1>with honesty, transparency,</h1>
                <h1>and ethical practices.</h1>
              </div>
            </div>
          </div>
          <div className="border-4 border-[#BB1B06] bg-[#BB1B06] inline-block p-[32px]">
            <div className="flex items-center space-x-2">
              <RxDot size={20} className="text-[#182736]" />
              <h1 className="font-MerriLight text-[12px] text-white">04.</h1>
            </div>
            <div className="pt-8">
              <h1 className="text-white font-MerriRegular text-[20px]">
                Sustainability
              </h1>
              <div className="text-[14px] pt-3 font-normal text-[#F8F8F8]">
                <h1>We are committed to</h1>
                <h1>environmentally responsible</h1>
                <h1>practices and long-term</h1>
                <h1>value creation.</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="px-[7%] py-[80px]">
        <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
          Our Team
        </h1>
        <h1 className="text-[30px] pb-7 text-[#131D2C] font-MerriSemiBold">
          Meet TMDK Leadership team
        </h1>

        <div>
          <div className="flex justify-between">
            <div>
              <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" />
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                  Nikolas Gibbons
                </h1>
                <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                  Group Chairman
                </h1>
              </div>
            </div>
            <div>
              {/* <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" /> */}
              <div className="w-[220px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                  Lily-Rose Chedjou
                </h1>
                <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                  Executive Director
                </h1>
              </div>
            </div>
            <div>
              {/* <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" /> */}
              <div className="w-[220px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                  Zahra Christensen
                </h1>
                <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                  Agro Park
                </h1>
              </div>
            </div>
            <div>
              {/* <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" /> */}
              <div className="w-[220px] h-[250px] bg-[#F8F8F8]"></div>
              <div className="pt-5">
                <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                  Sienna Hewitt
                </h1>
                <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                  Petrochemical
                </h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between pt-10">
            <img src={Logo} className="w-[350px] h-[490px]" alt="logo" />
            <div className="flex justify-between space-x-9 relative">
              <div>
                {/* <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" /> */}
                <div className="w-[220px] h-[250px] bg-[#F8F8F8]"></div>
                <div className="pt-5">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Lily-Rose Chedjou
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Executive Director
                  </h1>
                </div>
              </div>
              <div>
                {/* <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" /> */}
                <div className="w-[220px] h-[250px] bg-[#F8F8F8]"></div>
                <div className="pt-5">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Zahra Christensen
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Agro Park
                  </h1>
                </div>
              </div>
              <div>
                {/* <img src={AboutImg} alt="about" className="w-[400px] h-[250px]" /> */}
                <div className="w-[220px] h-[250px] bg-[#F8F8F8]"></div>
                <div className="pt-5">
                  <h1 className="text-[#101828] text-[20px] font-MerriSemiBold">
                    Sienna Hewitt
                  </h1>
                  <h1 className="text-[#BB1B06] text-[15px] font-MerriRegular">
                    Petrochemical
                  </h1>
                </div>
              </div>
              <div className="absolute bottom-0 left-[-35px]">
                <div className="w-full">
                  <div className="border-l-2 border-[#BB1B06] pl-3">
                    <h1 className="text-[#131D2C] font-MerriLight">
                      We believe that our people are our greatest asset. Our
                      diverse, talented, and
                    </h1>
                    <h1 className="text-[#131D2C] font-MerriLight">
                      dedicated workforce is the driving force behind our
                      success and continued
                    </h1>
                    <h1 className="text-[#131D2C] font-MerriLight">
                      growth. We are proud to have assembled a team of
                      professionals who bring
                    </h1>
                    <h1 className="text-[#131D2C] font-MerriLight">
                      passion, expertise, and innovation to every aspect of our
                      operations.
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Build your future */}
      <div className="bg-[#F8F8F8] px-[7%] py-[80px]">
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
