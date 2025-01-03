import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export default function CardLike() {
    return (
        <div className="max-w-[350px] flex flex-col w-full justify-center items-center">
            <div className=" rounded-md flex w-full bg-[url('./product-zx9-speaker/mobile/image-category-page-preview.jpg')] sps:bg-[url('./product-zx9-speaker/desktop/image-product-2.png')] h-[119px] sps:h-[318px] sps:bg-cover bg-cover bg-center bg-no-repeat " />
            <h5 className="sps:mt-[42px] mt-[32px] sps:mb-[33px] mb-[32px]">ZX9 SPEAKER</h5>
            <Button
                asChild
                variant="default"
            >
                <Link to="/">see product</Link>
            </Button>
        </div>
    )
}
