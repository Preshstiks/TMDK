import Map from "./assets/img/map.webp";
const Contactus = () => {
  return (
    <div className="px-[7%]">
      <div>
        <div>
          {/* Contact us form */}
          <div className="flex gap-[50px] py-[80px]">
            <div className=" w-1/2">
              <h1 className="text-[43px] pb-3 text-[#101828] font-MerriSemiBold">
                Contact us
              </h1>
              <h1 className="text-[17px] text-[#475467] font-MerriRegular">
                Our friendly team would love to hear from you.
              </h1>

              <form className="pt-[70px]">
                <div className="flex justify-between pb-5 space-x-4">
                  <div className="w-full">
                    <label className="text-[12px] gap-1 flex font-MerriMedium text-[#344054]">
                      First name
                      <span className="text-[#BC1B06] text-[12px]">*</span>
                    </label>
                    <div className="pt-2">
                      <input
                        type="text"
                        className="border-[1.5px] py-[10px] px-[14px] rounded-[8px] text-white text-[12px] w-full outline-none bg-transparent border-[#D0D5DD]"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <label className="text-[12px] gap-1 flex font-MerriMedium text-[#344054]">
                      Last name
                      <span className="text-[#BC1B06] text-[12px]">*</span>
                    </label>
                    <div className="pt-2">
                      <input
                        type="text"
                        className="border-[1.5px] py-[10px] px-[14px] rounded-[8px] text-white text-[12px] w-full outline-none bg-transparent border-[#D0D5DD]"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full pb-5">
                  <label className="text-[12px] gap-1 flex font-MerriMedium text-[#344054]">
                    Email
                    <span className="text-[#BC1B06] text-[12px]">*</span>
                  </label>
                  <div className="pt-2">
                    <input
                      type="email"
                      className="border-[1.5px] py-[10px] px-[14px] rounded-[8px] text-white text-[12px] w-full outline-none bg-transparent border-[#D0D5DD]"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>
                <div className="w-full pb-5">
                  <label className="text-[12px] gap-1 flex font-MerriMedium text-[#344054]">
                    Message
                    <span className="text-[#BC1B06] text-[12px]">*</span>
                  </label>
                  <div className="pt-2">
                    <textarea
                      rows={4}
                      className="border-[1.5px] py-[10px] px-[14px] rounded-[8px] text-white text-[12px] w-full outline-none resize-none bg-transparent border-[#D0D5DD]"
                    />
                  </div>
                </div>
                <div className="w-full pb-5">
                  <label className="text-[12px] gap-1 flex font-MerriMedium text-[#344054]">
                    Phone number
                    <span className="text-[#BC1B06] text-[12px]">*</span>
                  </label>
                  <div className="pt-2">
                    <input
                      type="text"
                      className="border-[1.5px] py-[10px] px-[14px] rounded-[8px] text-white text-[12px] w-full outline-none bg-transparent border-[#D0D5DD]"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="cursor-pointer" />
                  <h1 className="text-[13px] text-[#475467] font-MerriRegular">
                    You agree to our friendly{" "}
                    <span className="underline">privacy policy</span>.
                  </h1>
                </div>
                <button className="bg-[#BB1B06] text-white mt-9 rounded-[8px] text-[14px] font-MerriSemiBold py-[10px] px-[18px] w-full">
                  Send Message
                </button>
              </form>
            </div>
            <img src={Map} className="w-1/2" alt="map" />
          </div>

          {/* Our locations */}
          <div>
            <div className="bg-[#F8F8F8] flex justify-between py-[80px] my-[80px] px-[40px]">
              <div className="w-[40%]">
                <h1 className="text-[13px] text-[#BB1B06] pb-2 font-MerriSemiBold">
                  Our locations
                </h1>
                <h1 className="text-[#101828] pb-5 text-[30px] font-MerriSemiBold">
                  Visit our Offices
                </h1>
                <h1 className="text-[#475467] font-MerriRegular">
                  Find us at these locations.
                </h1>
              </div>
              <div className="w-[30%]">
                <div>
                  <h1 className="text-[17px] pb-3 text-[#101828] font-MerriSemiBold">
                    Lagos
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    No. 1, Pioneer Drive, Off Marwa Road,
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    Ijegun-Egba, Satellite Town, Lagos
                  </h1>
                </div>
                <div className="pt-[30px]">
                  <h1 className="text-[17px] pb-3 text-[#101828] font-MerriSemiBold">
                    Abuja
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    124 Ademola Adetokunbo Crescent,
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    Wuse 2, Abuja
                  </h1>
                </div>
                <div className="pt-[30px]">
                  <h1 className="text-[17px] pb-3 text-[#101828] font-MerriSemiBold">
                    Kano
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    No. 1 Rock Close, Off Hadeja Road, Kano
                  </h1>
                </div>
              </div>
              <div className="w-[30%]">
                <div>
                  <h1 className="text-[17px] pb-3 text-[#101828] font-MerriSemiBold">
                    Lagos
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    No. 13 Udi Road, Osborne Estate, Off
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    Osborne Road, Ikoyi, Lagos
                  </h1>
                </div>
                <div className="pt-[30px]">
                  <h1 className="text-[17px] pb-3 text-[#101828] font-MerriSemiBold">
                    Kaduna
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    No. 13 Udi Road, Osborne Estate, Off
                  </h1>
                  <h1 className="text-[13px] font-MerriRegular text-[#475467]">
                    Osborne Road, Ikoyi, Lagos
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
