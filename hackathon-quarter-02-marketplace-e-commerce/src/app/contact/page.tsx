import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import trophy from "../../../public/trophy 1.png";
import group from "../../../public/Group (2).png";
import customer_support from "../../../public/customer-support.png";

const ContactPage = () => {
  return (
    <>
      <div className="max-w-full mx-auto flex flex-col gap-14 md:gap-28 px-4">
        <div className="flex flex-col pt-2 items-center gap-2">
          <h1 className="font-poppins font-semibold text-2xl md:text-4xl leading-tight md:leading-[54px] text-[#000000] text-center pt-14 md:pt-28">
            Get In Touch With Us
          </h1>
          <p className="font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 text-[#9F9F9F] max-w-[644px] text-center px-4">
            For More Information About Our Product & Services. Please Feel Free To
            Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
            Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-4">
          <div className="left-side flex flex-col justify-center gap-8 md:gap-12 w-full lg:w-1/2 px-32">
            <div className="flex gap-4">
              <FaLocationDot className="min-w-[24px]"/>
              <div className="flex flex-col gap-1">
                <h1 className="font-poppins font-medium text-xl md:text-2xl leading-9 text-[#000000]">Address</h1>
                <p className="font-inter font-normal text-sm md:text-base leading-tight text-[#000000]">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <FaPhoneAlt className="min-w-[24px]"/>
              <div className="flex flex-col gap-1">
                <h1 className="font-poppins font-medium text-xl md:text-2xl leading-9 text-[#000000]">Phone</h1>
                <p className="font-inter font-normal text-sm md:text-base leading-tight text-[#000000]">
                  Mobile: +(84) 546-6789<br/>
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <MdOutlineAccessTimeFilled className="min-w-[24px]"/>
              <div className="flex flex-col gap-1">
                <h1 className="font-poppins font-medium text-xl md:text-2xl leading-9 text-[#000000]">Working Time</h1>
                <p className="font-inter font-normal text-sm md:text-base leading-tight text-[#000000]">
                  Monday-Friday: 9:00 - 22:00<br/>
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          <div className="right-side flex flex-col gap-4 md:gap-6 w-full lg:w-1/2 px-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-poppins font-medium text-base leading-6 text-[#000000]">Your name</h1>
              <input type="text" placeholder="Abc" className="rounded-[10px] border-[2px] border-[#9F9F9F] font-poppins w-full h-[50px] md:h-[75px] pl-4 pt-2"/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-poppins font-medium text-base leading-6 text-[#000000]">Email address</h1>
              <input type="text" placeholder="Abc@def.com" className="rounded-[10px] border-[2px] border-[#9F9F9F] font-poppins w-full h-[50px] md:h-[75px] pl-4 pt-2"/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-poppins font-medium text-base leading-6 text-[#000000]">Subject</h1>
              <input type="text" placeholder="This is an optional" className="rounded-[10px] border-[2px] border-[#9F9F9F] font-poppins w-full h-[50px] md:h-[75px] pl-4 pt-4"/>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-poppins font-medium text-base leading-6 text-[#000000]">Message</h1>
              <textarea placeholder="Hi! i'd like to ask about" className="w-full h-[120px] border-[2px] border-[#9F9F9F] rounded-[10px] pl-4 pt-6"/>
            </div>
            <div className="w-full md:w-[273px] h-[55px] rounded-[5px] border-[1px] border-[#B88E2F] bg-[#029FAE] hover:scale-105 hover:bg-[#077c86] flex justify-center items-center mb-10">
              <Link href="/contact" className="font-poppins font-normal text-base leading-6 text-[#FFFFFF]">Submit</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto bg-[#F4F4F4] py-10 md:py-[100px] px-4 md:px-[50px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex gap-4 items-center">
            <Image src={trophy} alt="trophy" className="w-[40px] md:w-[52.66px] h-[45px] md:h-[60px]"/>
            <div className="flex flex-col gap-1">
              <h1 className="font-poppins font-semibold text-xl md:text-[25px] leading-tight md:leading-[37.5px] text-[#242424]">High Quality</h1>
              <p className="font-poppins font-medium text-base md:text-xl leading-tight md:leading-[30px] text-[#898989]">crafted from top materials</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Image src={group} alt="warranty" className="w-[40px] md:w-[52.66px] h-[45px] md:h-[60px]"/>
            <div className="flex flex-col gap-1">
              <h1 className="font-poppins font-semibold text-xl md:text md:leading-[37.5px] text-[#242424]">Warranty Protection</h1>
              <p className="font-poppins font-medium text-base md:text-xl leading-tight md:leading-[30px] text-[#898989]">Over 2 years</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <Image src={customer_support} alt="support" className="w-[40px] md:w-[52.66px] h-[45px] md:h-[60px]"/>
            <div className="flex flex-col gap-1">
              <h1 className="font-poppins font-semibold text-xl md:text-[25px] leading-tight md:leading-[37.5px] text-[#242424]">24 / 7 Support</h1>
              <p className="font-poppins font-medium text-base md:text-xl leading-tight md:leading-[30px] text-[#898989]">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;