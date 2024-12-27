import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function NewProduct() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row justify-between gap-5 mt-[63px] sps:mt-[120px] md:mt-[160px] ">

            <div className="flex w-full rounded-lg bg-[url('./xx99two/xx99image-product-tablet.png')] md:bg-[url('./xx99two/xx99image-product-desktop.jpg')] bg-no-repeat bg-cover bg-center h-[350px] md:h-auto">

            </div>


            <div className=" rounded-lg flex justify-center text-center md:text-left md:justify-end w-full">

                <div className=" max-w-[562px] md:max-w-[445px] mb-[105px] flex flex-col items-center md:items-start   ">
                    <p className="font-normal text-[14px] leading-[19px] tracking-[10px] uppercase text-more-ec mt-[10px] sps:mt-[32px] md:mt-[110px]">new product</p>
                    <h2 className="mt-[27px] sps:mt-[15px] leading-[39px] sps:leading-[45px] max-w-[350px] text-[28px] sps:text-[40px]">xx99 mark II headphones</h2>
                    <p className="mt-[22px] sps:mt-[33px] text-[15px] leading-[24.5px] mb-[23px] sps:mb-[43px] text-gray-text-prod">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the
                        balanced depth and precision of studio-quality sound.
                    </p>
                    <Button
                        asChild
                        variant="default"
                    >
                        <Link to="/headphones/mark-two">see product</Link>
                    </Button>
                </div>
            </div>


        </div>
    )
}
