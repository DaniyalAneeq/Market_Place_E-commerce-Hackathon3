import { ArrowRight } from "lucide-react";
import Image from "next/image";
import seat from "../../public/seat.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-[#F0F2F3] rounded-b-[48px] mb-20">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-24 mx-4 sm:mx-8 lg:mx-12 min-h-[500px] md:min-h-[750px] items-center">
            <div className="left-side flex flex-col gap-4 w-full md:w-1/2">
                <p className="font-inter font-normal text-xs sm:text-sm leading-sm tracking-[12%] pt-10 md:pt-0 ">
                    Welcome to chairy
                </p>
                <div className="flex flex-col gap-12 sm:gap-24">
                    <h1 className="font-inter font-bold text-3xl sm:text-4xl lg:text-[60px] leading-tight lg:leading-[66px] text-[#272343] max-w-[557px]">
                        Best Furniture
                        Collection for your
                        interior.
                    </h1>
                    <div className="w-[140px] sm:w-[171px] h-[44px] sm:h-[52px] rounded-[8px] px-4 sm:px-6 py-[10px] sm:py-[14px] flex gap-3 sm:gap-5 items-center justify-center bg-[#029FAE] hover:scale-105 hover:bg-gray-300 hover:text-slate-950 transition-all cursor-pointer">
                        <Link href="/shop" className="font-inter text-sm sm:text-base leading-tight sm:leading-[17.6px] text-[#FFFFFF] hover:text-black">
                            Shop Now
                        </Link>
                        <span className="text-[#FFFFFF]"> <ArrowRight size={18} /> </span>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
                <Image 
                    src={seat} 
                    alt="seat"
                    className="object-contain"
                    width={693} 
                    height={946}
                />
            </div>
        </div>
    </div>
  )
}

export default Hero