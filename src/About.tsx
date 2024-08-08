import bgColored from "./assets/img/rainbow.webp";
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
    </div>
  );
};

export default About;
