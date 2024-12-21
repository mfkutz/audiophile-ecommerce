import { Link } from "react-router-dom";
import { Button } from "../ui/button";


export default function Text() {
  return (
    <div className="text-center sp:text-left sps:mb-40 mb-24">
      <p className=" text-white sps:text-[14px] text-[13px] leading-[19px] tracking-[10px] uppercase sps:mt-[130px] mt-[80px]">New product</p>
      <h1 className="text-white mt-[27px]">XX99 Mark II</h1>
      <h2 className="text-white sps:text-[56px] text-[36px] mt-[5px]">Headphones</h2>
      {/* <p className="text-white sps:text-[14px] text-[14px] mt-[33px] tracking-[1px]">Experience natural, lifelike audio and exceptional</p>
      <p className="text-white sps:text-[14px] text-[14px] mt-[4px] tracking-[1px]">build quality made for the passionate music</p>
      <p className="text-white sps:text-[14px] text-[14px] mt-[4px] tracking-[1px]">enthusiast.</p> */}


      <p className="text-white sps:text-[14px] text-[14px] mt-[33px] tracking-[1px] max-w-[380px] sp:mx-0 mx-auto mb-[43px] ">Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
      {/* <button className="bg-more-ec hover:bg-more-cc px-[34px] py-[16px] uppercase text-white text-[12px] font-semibold tracking-[1.3px] mt-[43px]">See product</button> */}

      <Button
        variant="default"
        asChild
      >
        <Link to="/">see product</Link>
      </Button>

      {/* <div className="sps:mt-40 mt-36">

      </div> */}
    </div>
  )
}
