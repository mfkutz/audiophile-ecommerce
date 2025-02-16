import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ProductData } from "@/types";
import { formatCurrency } from "@/hooks/utils";

type NewProductAddProps = {
    products: ProductData[],
    model?: string
}

export default function NewProductAdd({ products, model }: NewProductAddProps) {

    const prod = products.find(findId => findId._id === model)

    // console.log(products)
    // console.log(model)

    return (
        <>
            <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row justify-between gap-5 mt-[63px] sps:mt-[120px] md:mt-[160px] relative ">
                <div className="absolute left-0 sps:top-[-60px] top-[-50px] md:top-[-78px] text-gray-text-prod text-[15px] hover:cursor-pointer">Go Back</div>

                {/* <div className="flex w-full rounded-lg bg-[url('./xx99two/xx99image-product-tablet.png')] md:bg-[url('./xx99two/xx99image-product-desktop.jpg')] bg-no-repeat bg-cover bg-center h-[350px] md:h-auto" /> */}


                <div className="relative w-full h-[350px] md:h-auto rounded-lg">
                    <img
                        src={prod?.categoryImage.tablet}
                        alt={prod?.name}
                        className="w-full h-full object-cover rounded-lg md:hidden"
                    />
                    <img
                        src={prod?.categoryImage.desktop}
                        alt={prod?.name}
                        className="hidden md:block w-full h-full object-cover rounded-lg"
                    />
                </div>

                <div className=" rounded-lg flex justify-center text-left sps:text-center md:text-left md:justify-end w-full">

                    <div className=" max-w-[562px] md:max-w-[445px] mb-[78px] flex flex-col sps:items-center md:items-start  ">
                        <p className="font-normal text-[14px] leading-[19px] tracking-[10px] uppercase text-more-ec mt-[10px] sps:mt-[32px] md:mt-[78px]">new product</p>
                        <h2 className="mt-[27px] sps:mt-[15px] leading-[39px] sps:leading-[45px] max-w-[350px] text-[28px] sps:text-[40px]">{prod?.name}</h2>
                        <p className="mt-[22px] sps:mt-[33px] text-[15px] leading-[24.5px] mb-[23px] sps:mb-[32px] text-gray-text-prod ">
                            {/* The new XX99 Mark II headphones is the pinnacle of pristine audio.
                            It redefines your premium headphone experience by reproducing the
                            balanced depth and precision of studio-quality sound. */}
                            {prod?.description}
                        </p>

                        <div className="font-bold text-[18px]">
                            {prod?.price !== undefined ? formatCurrency(prod.price) : "Not available"}
                        </div>


                        <div className="flex items-center gap-4 mt-[42px]">
                            <div className="w-[120px] h-[48px] bg-white-ec flex flex-row items-center justify-between px-5">
                                <div className="hover:text-more-ec cursor-pointer px-2 text-[16px] font-bold text-black-cc opacity-40 hover:opacity-100">-</div>
                                <div className="text-[13px] font-bold">1</div>
                                <div className="hover:text-more-ec cursor-pointer px-2 text-[16px] pt-[1px] font-bold text-black-cc opacity-40 hover:opacity-100">+</div>
                            </div>
                            <Button
                                asChild
                                variant="default"
                            >
                                <Link to="/headphones/mark-two">add to cart</Link>
                            </Button>
                        </div>


                    </div>
                </div>


            </div>
        </>
    )
}
