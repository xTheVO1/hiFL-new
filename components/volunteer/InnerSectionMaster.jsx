import React from "react";
import Link from "next/link";
import Image from "next/image";

const InnerSectionMaster = ({ title, img, parag, name, designation, date }) => {
  return (
    <div className="flex align-top mb-5">
      <div className="text-black xl:w-[30%]   max-h-fit  ">
        <div className="hidden xl:inline w-[100%] mt-10  ">
          <img
            src={img}
            alt=""
            layout="responsive"
            height="100%"
            width="100%"
            className=" w-full h-fit object-cover "
          />
        </div>
        <div className="hidden  xl:flex flex-col p-3 pb-0 h-fit">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
      </div>

      <div className='w-100 xl:w-[70%] m-0 p-10 lg:pt-6 xl:pt-16  flex flex-col align-top justify-start bg-[url("/volunteer-bg.png")] bg-cover bg-right bg-no-repeat mix-blend-darken bg-[#000229]'>
        <p className="md:mb-5">{date}</p>
        <h1 className=" font-bold xl:text-xl sm:mb-2 sm:text-md  text-[#F4C316]">{title}</h1>
        <div className=" xl:hidden w-100  h-auto mb-3 ">
          <img src={img} alt="" height="70%" layout="responsive" className="w-[55%] md-[40%]" />
        </div>
        <div className="xl:hidden  flex flex-col text-[#F4C316]  h-fit">
          <p>{name}</p>
          <p>{designation}</p>
        </div>
        <p className="sm:my-2 sm:mt-0  ">{parag}</p>
        <div className=" text-[12px] flex  text-[#F4C316]  align-middle justify-between "></div>
      </div>
    </div>
  );
};

export default InnerSectionMaster;
