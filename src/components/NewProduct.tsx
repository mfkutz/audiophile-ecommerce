import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function NewProduct() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row justify-between gap-5 mt-[63px] sps:mt-[120px] md:mt-[160px] ">

            <div className="flex w-full rounded-lg bg-[url('./xx59/xx99image-product-tablet.png')] md:bg-[url('./xx59/xx99image-product-desktop.jpg')] bg-no-repeat bg-cover bg-center h-[350px] md:h-auto">

            </div>


            <div className=" rounded-lg flex justify-center text-center md:text-left md:justify-end w-full">

                <div className="max-w-[445px] mb-[105px]  ">
                    <p className="font-normal text-[14px] leading-[19px] tracking-[10px] uppercase text-more-ec mt-[32px] md:mt-[110px]">new product</p>
                    <h2 className="mt-[15px]">xx99 mark II headphones</h2>
                    <p className="mt-[33px] text-[15px] leading-[24.5px] mb-[43px] text-gray-text-prod">
                        The new XX99 Mark II headphones is the pinnacle of pristine audio.
                        It redefines your premium headphone experience by reproducing the
                        balanced depth and precision of studio-quality sound.
                    </p>
                    <Button
                        asChild
                        variant="default"
                    >
                        <Link to="/">see product</Link>
                    </Button>
                </div>
            </div>


        </div>
    )
}
