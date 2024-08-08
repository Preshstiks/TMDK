import bgColored from "./assets/img/rainbow.webp";
import AboutImg from "./assets/img/about.webp";
import Frame from "./assets/img/frame.webp";
const About = () => {
  return (
    <div>
      <header className="bg-[#182736] h-[60vh] px-[5%] pb-[80px] relative">
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
      <div className="py-[80px] px-[5%]">
        <h1 className="text-[#BB1B06] pb-2 text-[14px] font-MerriSemiBold">
          Who we are
        </h1>
        <h1 className="text-[36px] pb-7 text-[#131D2C] font-MerriSemiBold">
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
      </div>
    </div>
  );
};

export default About;
