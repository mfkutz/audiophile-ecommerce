import { Link } from "react-router-dom";
import { Button } from "../ui/button";

type ImageType = {
    mobile: string,
    tablet: string,
    desktop: string,
}

type CardLikeProps = {
    itemId: string,
    name: string
    image: ImageType
}

export default function CardLike({ itemId, name, image }: CardLikeProps) {
    // console.log(itemId)
    // console.log('from card of maybe', image.mobile)
    // console.log('from card of maybe', image.tablet)
    return (
        <div className="max-w-[350px] flex flex-col w-full justify-center items-center">
            <div
                /* className=" rounded-md flex w-full bg-[url('./product-zx9-speaker/mobile/image-category-page-preview.jpg')] sps:bg-[url('./product-zx9-speaker/desktop/image-product-2.png')] h-[119px] sps:h-[318px] sps:bg-cover bg-cover bg-center bg-no-repeat " */


                className="relative rounded-md w-full flex h-[119px] sps:h-[318px]"
            >
                <img
                    src={image.mobile}
                    alt=""
                    className="w-full h-full object-cover rounded-md sps:hidden  "
                />
                <img
                    src={image.tablet}
                    alt=""
                    className="w-full h-full object-cover rounded-md hidden sps:block md:hidden  "
                />
                <img
                    src={image.desktop}
                    alt=""
                    className="w-full h-full object-cover rounded-md hidden md:block    "
                />

            </div>

            <h5 className="sps:mt-[42px] mt-[32px] sps:mb-[33px] mb-[32px] text-[18px] md:text-[24px] ">{name}</h5>
            <Button
                asChild
                variant="default"
            >
                <Link to={`/`}>see product</Link>
            </Button>
        </div>
    )
}
