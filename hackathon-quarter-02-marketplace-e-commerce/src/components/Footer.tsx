import Image from "next/image";
import Logo from "../../public/Logo Icon.png";
import Link from "next/link";
import americanExpress from "../../public/anmerican_express.jpeg";
import payPal from "../../public/paypal.png";
import visa from "../../public/visa.png";
import circles from "../../public/circles.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest, 
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full px-4 md:px-6 lg:px-8">
      <div className="h-[2px] bg-[#E1E3E5] w-full mb-10 md:mb-20"/>
      <div className="mx-auto max-w-5xl xl:max-w-7xl flex flex-col md:flex-row justify-between md:flex-wrap 2xl:flex-nowrap items-start md:items-center gap-10 md:gap-4">
        <div className="Logo-div flex flex-col gap-6 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="Logo" 
              width={40}
              height={40}
              className="w-8 sm:w-10 h-auto"
            />
            <Link href="/" className="font-inter font-medium text-xl sm:text-2xl lg:text-[26px] text-[#272343]">
              Comforty
            </Link>
          </div>
          <p className="text-[#272343]/60 font-inter font-normal text-sm md:text-base leading-6 w-full md:w-[350px]">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus
          </p>
          <div className="flex gap-2">
            <div className="social-icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-slate-200 hover:scale-110 transition-all">
              <div className="bg-[#007580] rounded-full w-[28px] h-[28px] flex items-center justify-center">
                <Link href="/">
                    <FaFacebook className="bg-white text-[#007580] rounded-full" />
                </Link>
              </div>
            </div>
            <div className="social-icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-slate-200 hover:scale-110 transition-all">
                <Link href="/">
                    <FaTwitter className="bg-white/50 text-gray-500 rounded-full" />
                </Link>
            </div>
            <div className="social-icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-slate-200 hover:scale-110 transition-all">
                <Link href="/">
                    <FaInstagram className="bg-white/50 text-gray-500 rounded-full" />
                </Link>
            </div>
            <div className="social-icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-slate-200 hover:scale-110 transition-all">
                <Link href="/">
                    <FaPinterest className="bg-white/50 text-gray-500 rounded-full" />
                </Link>
            </div>
            <div className="social-icon w-[38px] h-[38px] flex items-center justify-center rounded-full bg-[#FFFFFF] hover:bg-slate-200 hover:scale-110 transition-all">
                <Link href="/">
                    <FaYoutube className="bg-white/50 text-gray-500 rounded-full" />
                </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
          <div className="flex flex-col gap-4">
            <h1 className="footer-title font-inter font-normal text-sm leading-[15.4px] tracking-[6%] text-[#9A9CAA]">
              Category
            </h1>
            <div className="flex flex-col gap-2 font-inter text-sm md:text-base font-normal text-[#272343] leading-[17.6px]">
              <Link href="/" className="link link-hover">Sofa</Link>
              <Link href="/" className="link link-hover">Armchair</Link>
              <Link href="/" className="link link-hover">Wing Chair</Link>
              <Link href="/" className="link link-hover underline text-[#007580]">Desk Chair</Link>
              <Link href="/" className="link link-hover">Wooden Chair</Link>
              <Link href="/" className="link link-hover">Park Bench</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h1 className="footer-title font-inter font-normal text-sm leading-[15.4px] tracking-[6%] text-[#9A9CAA]">
              Support
            </h1>
            <div className="flex flex-col gap-2 font-inter text-sm md:text-base font-normal text-[#272343] leading-[17.6px]">
              <Link href="/" className="link link-hover">Help & Support</Link>
              <Link href="/" className="link link-hover">Terms & Conditions</Link>
              <Link href="/" className="link link-hover">Privacy Policy</Link>
              <Link href="/" className="link link-hover">Help</Link>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-auto">
            <h1 className="font-inter font-medium text-sm leading-[15.4px] tracking-[6%] text-[#9A9CAA]">
              Newsletter
            </h1>
            <div className="flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                placeholder="Your email"
                className="w-full sm:w-[285px] h-[46px] rounded-[8px] border-2 border-[#E1E3E5] bg-[#FFFFFF] shadow-sm px-4"
              />
              <button className="w-full sm:w-[127px] h-[46px] py-[14px] px-6 bg-[#029FAE] rounded-[8px] text-white font-inter text-base leading-[17.6px] hover:bg-[#0f7680]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[2px] bg-[#E1E3E5] w-full mt-10 md:mt-20"/>
      
      <div className="mx-auto max-w-7xl py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-poppins font-normal text-xs md:text-sm leading-[21px] text-[#9A9CAA] text-center sm:text-left">
            &copy; 2021 - by <span className="text-[#272343]">Zakirsoft</span>    
          </p> 
          <div className="flex gap-2 flex-wrap justify-center">
            <Image src={circles} alt="payment-method" width={27} height={27} className="h-auto w-auto"/>
            <Image src={payPal} alt="payment-method" width={27} height={27} className="h-auto w-auto"/>
            <Image src={americanExpress} alt="payment-method" width={27} height={27} className="h-auto w-auto"/>
            <Image src={visa} alt="payment-method" height={27} width={27} className="h-auto w-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;