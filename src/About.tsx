import bgColored from "./assets/img/rainbow.webp";
import AboutImg from "./assets/img/about.webp";
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
          <div>
            <div>
              <img src={AboutImg} className="w-[572px] h-[320px]" alt="about" />
            </div>
          </div>
          <div className="bg-[#F8F8F8] px-[30px] py-[19px]">
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
        </div>
      </div>
    </div>
  );
};

export default About;
