import bg from "./assets/img/petrolbg.webp";
import map from "./assets/img/petrolmap.png";
import bgimg from "./assets/img/petrolbgimg.webp";
import { GoArrowRight, GoDot, GoDotFill } from "react-icons/go";
import Quote from "./assets/img/orangeQuote.webp";
const Petrochemical = () => {
  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[68vh] px-[5%] pb-[80px] relative flex items-end"
      >
        <div className="max-w-[80rem] w-full mx-auto">
          <div>
            <h1 className="font-MerriBold leading-[40px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] lg:leading-[60px] text-white">
              Providers & Terminal
            </h1>
            <h1 className="font-MerriBold leading-[40px] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] lg:leading-[60px] text-white">
              Operators
            </h1>
            <h1 className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[30px] pt-4 font-MerriLight text-[#E6712D]">
              VMI Managers | DIDS Operations | Oil Services | Services Station |
              Providers & Terminal Operators
            </h1>
          </div>
        </div>
      </header>

      {/* About us */}
      <div className="bg-[#141C21] py-[40px] md:py-[60px] lg:py-[80px] px-[5%] lg:px-[7%]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-[10px] md:text-[11px] lg:text-[12px] pb-2 md:pb-3 lg:pb-4 font-MerriSemiBold text-[#E6712D]">
            About us
          </h1>
          <div className="pb-[80px] md:pb-[100px] lg:pb-[120px]">
            <div>
              <h1 className="text-white text-[18px] md:text-[22px] lg:text-[25px] font-MerriRegular">
                TMDK Petrochemicals is dedicated to ensuring a reliable
              </h1>
              <h1 className="text-white text-[18px] md:text-[22px] lg:text-[25px] font-MerriRegular">
                and efficient supply of high-quality petroleum products
              </h1>
              <h1 className="text-white text-[18px] md:text-[22px] lg:text-[25px] font-MerriRegular">
                across Nigeria. Formerly known as TMDK Oil Traders, we
              </h1>
              <h1 className="text-white text-[18px] md:text-[22px] lg:text-[25px] font-MerriRegular">
                have been a key player in the downstream sector of the
              </h1>
              <h1 className="text-white text-[18px] md:text-[22px] lg:text-[25px] font-MerriRegular">
                oil and gas industry since 2013.
              </h1>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pb-[20px] md:pb-[30px] lg:pb-[40px] gap-[20px] md:gap-0">
            <div className="border-t-[2px] text-[#6B6B6B] inline-block py-[24px] md:py-[28px] lg:py-[32px] border-[#6B6B6B]">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold pb-2 md:pb-2 lg:pb-3">
                Petroleum Product Trading
              </h1>
              <div className="text-[12px] md:text-[13px] lg:text-[14px] font-MerriRegular">
                <p>We engage in wholesale and retail </p>
                <p>distribution of PMS, DPK, AGO, LPG, and</p>
                <p>lubricants.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#6B6B6B] inline-block py-[24px] md:py-[28px] lg:py-[32px] border-[#6B6B6B]">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold pb-2 md:pb-2 lg:pb-3">
                Retail Operations
              </h1>
              <div className="text-[12px] md:text-[13px] lg:text-[14px] font-MerriRegular">
                <p>We’ve expanded our network of Ultra </p>
                <p>Mega Service Stations across Nigeria</p>
                <p>reaching 100 stations.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#6B6B6B] inline-block py-[24px] md:py-[28px] lg:py-[32px] border-[#6B6B6B]">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold pb-2 md:pb-2 lg:pb-3">
                Logistics and Distribution
              </h1>
              <div className="text-[12px] md:text-[13px] lg:text-[14px] font-MerriRegular">
                <p>{`With our fleet of 95 trucks (50,000 and `}</p>
                <p>{`60,000-liter capacity), we ensure `}</p>
                <p>efficient and timely delivery of products</p>
                <p>across Nigeria.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-[20px] md:gap-0">
            <div className="border-t-[2px] text-[#6B6B6B] inline-block py-[24px] md:py-[28px] lg:py-[32px] border-[#6B6B6B]">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold">
                Storage and Terminal
              </h1>
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold pb-2 md:pb-2 lg:pb-3">
                Operations
              </h1>
              <div className="text-[12px] md:text-[13px] lg:text-[14px] font-MerriRegular">
                <p>Our state-of-the-art terminal, </p>
                <p>commissioned in November 2022, boasts</p>
                <p>a storage capacity of over 40 million liters,</p>
                <p>expanded to 70 million liters as at 2023.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#6B6B6B] inline-block py-[24px] md:py-[28px] lg:py-[32px] border-[#6B6B6B]">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold">
                Vendor Management
              </h1>
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold pb-2 md:pb-2 lg:pb-3">
                Inventory (VMI) Operations
              </h1>
              <div className="text-[12px] md:text-[13px] lg:text-[14px] font-MerriRegular">
                <p>We manage our customers' storage </p>
                <p>facilities, guaranteeing minimum stock</p>
                <p>levels and transparent fuel consumption </p>
                <p>management.</p>
              </div>
            </div>
            <div className="border-t-[2px] text-[#6B6B6B] inline-block py-[24px] md:py-[28px] lg:py-[32px] border-[#6B6B6B]">
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold">
                Direct Import Direct Supply
              </h1>
              <h1 className="text-[16px] md:text-[18px] lg:text-[20px] font-MerriBold pb-2 md:pb-2 lg:pb-3">
                (DIDS)
              </h1>
              <div className="text-[12px] md:text-[13px] lg:text-[14px] font-MerriRegular">
                <p>We offer direct importation services for </p>
                <p>clients, securing their annual product </p>
                <p>consumption needs.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investor corner */}
      <div>
        <div className="relative h-[68vh] px-[7%]">
          <div
            className="absolute inset-0 z-[-1] bg-cover bg-no-repeat filter grayscale"
            style={{ backgroundImage: `url(${bgimg})` }}
          />
          <div className="max-w-[80rem] w-full mx-auto">
            <div className="relative z-10 text-[#131D2C] pt-[80px] text-[30px] font-MerriSemiBold">
              <div>
                <h1 className="text-[24px] md:text-[30px]">
                  Our VMI and DIDS services
                </h1>
                <h1 className="text-[24px] md:text-[30px]">
                  have helped numerous
                </h1>
                <h1 className="text-[24px] md:text-[30px]">
                  organizations achieve
                </h1>
                <h1 className="text-[24px] md:text-[30px]">
                  savings of 5% to 20% in fuel
                </h1>
                <h1 className="text-[24px] md:text-[30px]">
                  consumption spending.
                </h1>
              </div>
            </div>
            <button className="text-white flex items-center mt-9 gap-2 font-MerriRegular text-[12px] py-[12px] px-[18px] bg-[#E6712D]">
              Investor Corner
              <GoArrowRight size={17} />
            </button>
            <div className="inline-block absolute bottom-[-95px] right-[10px] md:right-[50px] lg:right-[100px]">
              <div className="bg-[#141C21] p-[24px] md:p-[64px]">
                <img src={Quote} className="pb-5" alt="quote" />
                <h1 className="text-[24px] md:text-[30px] font-MerriBold text-white">
                  What people say about
                </h1>
                <h1 className="text-[24px] md:text-[30px] font-MerriBold pb-5 text-white">
                  TMDK Petrochemical
                </h1>
                <div className="text-[#74957A] font-MerriLight text-[14px] md:text-[17px]">
                  <h1>Spanish mackerel yellow weaver sixgill sandperch</h1>
                  <h1>flyingfish yellowfin cutthroat trout grouper</h1>
                  <h1>whitebait horsefi Bichir neon tetra blue eye bleak</h1>
                  <h1>sergeant major lumpsucker tilapia Ratfish darter</h1>
                  <h1>leatherjacket woody sculpin fierasfer Pacific</h1>
                </div>
                <h1 className="font-MerriLight text-[#E6712D] pt-5">
                  <span className="font-MerriRegular">Buba Ali</span> - CEO
                  Almat
                </h1>
              </div>
              <div className="p-[20px] md:p-[40px] bg-[#E6712D]">
                <div className="flex gap-3 justify-end">
                  <GoDotFill />
                  <GoDot />
                  <GoDotFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal location */}
      <div className="mx-[7%] mt-[180px]">
        <div className="max-w-[80rem] w-full mx-auto">
          <h1 className="text-[#101828] text-center pb-[25px] text-[30px] font-MerriSemiBold">
            Our Terminal Locations
          </h1>
          <div
            className="h-[60vh]"
            style={{
              backgroundImage: `url(${map})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Petrochemical;
