import Image from "next/image";
import zapier from "../../public/zapier.png";
import pipdrive from "../../public/pipdrive.png";
import clbBank from "../../public/clbBank.png";
import Z_logo from "../../public/Z_logo.png";
import burnt from "../../public/burnt.png";
import pandaDoc from "../../public/pandaDoc.png";
import moz from "../../public/moz.png";

const Sponsors = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center hover:cursor-pointer">
        <Image 
          src={zapier} 
          alt="zapier"
          height={85}
          width={87}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src={pipdrive} 
          alt="pipdrive"
          width={107}
          height={109}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src={clbBank} 
          alt="clbBank"
          height={139}
          width={135}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src={Z_logo} 
          alt="Z_logo"
          height={63}
          width={63}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src={burnt} 
          alt="burnt"
          height={101}
          width={98}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src={pandaDoc} 
          alt="pandaDoc"
          height={115}
          width={113}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src={moz} 
          alt="moz"
          height={87}
          width={84}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
      </div>
    </div>
  )
}

export default Sponsors