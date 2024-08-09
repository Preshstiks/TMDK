import bg from "./assets/img/agrobg.webp";
import map from "./assets/img/agromap.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import One from "./assets/img/one.webp";
import Two from "./assets/img/two.webp";
import Three from "./assets/img/three.webp";
import Field from "./assets/img/field.webp";
import Quote from "./assets/img/Quote.webp";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { RxDot } from "react-icons/rx";
import { GoDot, GoDotFill } from "react-icons/go";
const AgroPark = () => {
  const CustomPrevArrow = ({ onClick }: any) => {
    return (
      <div className="custom-arrow prev" onClick={onClick}>
        <IoIosArrowBack size={24} />
      </div>
    );
  };

  const CustomNextArrow = ({ onClick }: any) => {
    return (
      <div className="custom-arrow next" onClick={onClick}>
        <IoIosArrowForward size={24} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div>
      <header
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="h-[90vh] px-[5%] pb-[80px] relative flex items-end"
      >
        <div>
          <h1 className="font-MerriBold leading-[60px] text-[40px] text-white">
            Reinventing
          </h1>
          <h1 className="font-MerriBold leading-[60px] text-[40px] text-white">
            Agriculture in Nigeria
          </h1>
          <h1 className="text-[17px] leading-[30px] pt-4 font-MerriLight text-[#B3DA20]">
            Together we create a better and more sustainable future.
          </h1>
        </div>
      </header>

      {/* About us */}
      <div className="bg-[#182F2A] py-[80px] px-[7%]">
        <h1 className="text-[12px] pb-4 font-MerriSemiBold text-[#B3DA20]">
          About us
        </h1>
        <div className="flex justify-between pb-[120px]">
          <div>
            <h1 className="text-white text-[40px] font-MerriSemiBold">
              Agro Park is at the forefront of{" "}
            </h1>
            <h1 className="text-white text-[40px] font-MerriSemiBold">
              agricultural innovation in Nigeria.
            </h1>
          </div>
          <div className="text-white text-[17px] font-MerriRegular">
            <h1>We provide comprehensive </h1>
            <h1>infrastructure for agro-industrial </h1>
            <h1>operations, collaborating with local </h1>
            <h1>farmers to create job opportunities</h1>
            <h1>and boost agricultural productivity.</h1>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="border-t-[2px] text-[#74957A] inline-block py-[32px] border-[#74957A]">
            <h1 className="text-[20px] font-MerriBold pb-3">Our Commitment</h1>
            <div className="text-[14px] font-MerriRegular">
              <p>TMDK Agro Park collaborates closely with</p>
              <p>local farmers, engaging them in provincial</p>
              <p>agricultural projects and creating job </p>
              <p>opportunities for the whole community.</p>
            </div>
          </div>
          <div className="border-t-[2px] text-[#74957A] inline-block py-[32px] border-[#74957A]">
            <h1 className="text-[20px] font-MerriBold pb-3">Our Impact</h1>
            <div className="text-[14px] font-MerriRegular">
              <p>We are investing $500 million to establish </p>
              <p>more industrial parks in three geopolitical </p>
              <p>more industrial parks in three geopolitical </p>
              <p>years.</p>
            </div>
          </div>
          <div className="border-t-[2px] text-[#74957A] inline-block py-[32px] border-[#74957A]">
            <h1 className="text-[20px] font-MerriBold pb-3">Sustainability</h1>
            <div className="text-[14px] font-MerriRegular">
              <p>We are committed to environmentally </p>
              <p>responsible practices, efficient resource </p>
              <p>utilization, and minimizing our carbon </p>
              <p>footprint.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our services */}
      <div className="py-[80px] px-[7%]">
        <h1 className="text-[#182F2A] text-[30px] font-MerriBold">
          Our Services
        </h1>
        <div className="pt-[50px] grid grid-cols-3 gap-[64px]">
          <div className="border-l-4 border-[#D2EB75] px-[32px]">
            <h1 className="text-[#182F2A] pb-2 text-[20px] font-MerriBold">
              Noodles Production
            </h1>
            <div className="text-[14px] font-MerriRegular text-[#74957A]">
              <p>Our three production lines can </p>
              <p>produce over a million packets of </p>
              <p>various sizes of noodles daily</p>
            </div>
          </div>
          <div className="border-l-4 border-[#D2EB75] px-[32px]">
            <h1 className="text-[#182F2A] pb-2 text-[20px] font-MerriBold">
              Corn Milling
            </h1>
            <div className="text-[14px] font-MerriRegular text-[#74957A]">
              <p>With a capacity of 750 tons per</p>
              <p>day, we produce corn flour and </p>
              <p>grits for domestic and industrial</p>
              <p>uses</p>
            </div>
          </div>
          <div className="border-l-4 border-[#D2EB75] px-[32px]">
            <h1 className="text-[#182F2A] pb-2 text-[20px] font-MerriBold">
              Edible Oil Production
            </h1>
            <div className="text-[14px] font-MerriRegular text-[#74957A]">
              <p>Our facility can process 300 metric</p>
              <p>tons of various vegetable oils daily.</p>
            </div>
          </div>
          <div className="border-l-4 border-[#D2EB75] px-[32px]">
            <h1 className="text-[#182F2A] pb-2 text-[20px] font-MerriBold">
              Animal Feed
            </h1>
            <div className="text-[14px] font-MerriRegular text-[#74957A]">
              <p>We operate a 200-ton-per-day </p>
              <p>pasta production facility, blending </p>
              <p>local contents with wheat flour to</p>
              <p>produce high-grade, healthy </p>
              <p>pasta.</p>
            </div>
          </div>
          <div className="border-l-4 border-[#D2EB75] px-[32px]">
            <h1 className="text-[#182F2A] pb-2 text-[20px] font-MerriBold">
              Pasta Production
            </h1>
            <div className="text-[14px] font-MerriRegular text-[#74957A]">
              <p>We operate a 200-ton-per-day </p>
              <p>pasta production facility, blending</p>
              <p>local contents with wheat flour to</p>
              <p>lproduce high-grade, healthy</p>
              <p>pasta.</p>
            </div>
          </div>
          <div className="border-l-4 border-[#D2EB75] px-[32px]">
            <h1 className="text-[#182F2A] pb-2 text-[20px] font-MerriBold">
              PP Sack Production
            </h1>
            <div className="text-[14px] font-MerriRegular text-[#74957A]">
              <p>We manufacture various sizes and</p>
              <p>categories of PP woven sacks for </p>
              <p>farmers and agro-processing </p>
              <p>companies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our products */}
      <div className="py-[80px] px-[7%]">
        <div className="flex items-center justify-between pb-[60px]">
          <h1 className="text-[#182F2A] text-[30px] font-MerriBold">
            Our Services
          </h1>
          <div className="border-y-[1.5px] font-MerriRegular text-[12px] inline-flex items-center gap-2  text-[#74957A] p-[16px] border-[#74957A]">
            <h1 className="px-[8px]">Corn Mill</h1>
            <h1 className="text-[#182F2A] px-[8px]">Corn Mill</h1>
            <h1 className="px-[8px]">Corn Mill</h1>
            <h1 className="px-[8px]">Corn Mill</h1>
          </div>
        </div>
        <Slider {...settings}>
          <div>
            <img src={One} alt="one" />
          </div>
          <div>
            <img src={Two} alt="one" />
          </div>
          <div>
            <img src={Three} alt="one" />
          </div>
          <div>
            <img src={Two} alt="one" />
          </div>
        </Slider>
      </div>

      {/* what people say */}
      <div
        className="h-[70vh] mb-[180px] relative"
        style={{
          backgroundImage: `url(${Field})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="inline-block absolute bottom-[-100px] right-[100px]">
          <div className="bg-[#182F2A] p-[64px]">
            <img src={Quote} className="pb-5" alt="quote" />
            <h1 className="text-[30px] font-MerriBold text-white">
              What people say
            </h1>
            <h1 className="text-[30px] font-MerriBold pb-5 text-white">
              about Agro Park
            </h1>
            <div className="text-[#74957A] font-MerriLight text-[17px]">
              <h1>Spanish mackerel yellow weaver sixgill sandperch</h1>
              <h1>flyingfish yellowfin cutthroat trout grouper </h1>
              <h1>whitebait horsefi Bichir neon tetra blue eye bleak</h1>
              <h1>sergeant major lumpsucker tilapia Ratfish darter </h1>
              <h1>leatherjacket woody sculpin fierasfer Pacific</h1>
            </div>
            <h1 className="font-MerriLight text-[#D2EB75] pt-5">
              <span className="font-MerriRegular">Buba Ali </span> - CEO Almat
            </h1>
          </div>
          <div className="p-[40px] bg-[#D2EB75]">
            <div className="flex gap-3 justify-end">
              <GoDotFill />
              <GoDot />
              <GoDotFill />
            </div>
          </div>
        </div>
      </div>

      {/* Agro park location */}
      <div className="mx-[7%]">
        <h1 className="text-[#101828] text-center pb-[25px] text-[30px] font-MerriSemiBold">
          Our Agro Park Locations
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
  );
};

export default AgroPark;
