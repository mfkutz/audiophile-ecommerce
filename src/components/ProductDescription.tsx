import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function ProductDescription() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row-reverse justify-between gap-5 mt-[12px] sps:mt-[9px] md:mt-[160px] ">

            <div className="flex w-full rounded-lg bg-[url('./xx99one/image-category-page-preview-tablet.jpg')] md:bg-[url('./xx99one/image-category-page-preview-desktop.jpg')] bg-no-repeat bg-cover bg-center h-[350px] md:h-auto">

            </div>


            <div className=" rounded-lg flex justify-center text-center md:text-left md:justify-start w-full">

                <div className=" max-w-[562px] md:max-w-[445px] mb-[124px] flex flex-col items-center md:items-start   ">
                    <p className="font-normal text-[14px] leading-[19px] tracking-[10px] uppercase text-more-ec mt-[10px] sps:mt-[32px] md:mt-[110px]"></p>
                    <h2 className="mt-[27px] sps:mt-[15px] leading-[39px] sps:leading-[45px] max-w-[350px] text-[28px] sps:text-[40px]">XX99 Mark I Headphones</h2>
                    <p className="mt-[22px] sps:mt-[33px] text-[15px] leading-[24.5px] mb-[23px] sps:mb-[43px] text-gray-text-prod">
                        As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction
                        for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.
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