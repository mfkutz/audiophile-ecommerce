import { ProductData } from "@/types";
import Text from "./hero/Text";


type HeroProps = {
    products: ProductData[]; // ✅ products es un array de productos
};


export default function Hero({ products }: HeroProps) {

    console.log('from Hero', products)
    return (
        <section className="relative flex max-w-screen-mk mx-auto">
            <div className="hidden sp:flex">
                <Text />
            </div>
            <div className="overflow-hidden bg-[url('./home/tablet/image-header.svg')] bg-no-repeat sps:bg-bottom flex-1 bg-cover sps:bg-auto bg-[center_top_-4rem] " >
                <div className="sp:hidden">
                    <Text />
                </div>
            </div>
        </section>
    )
}
