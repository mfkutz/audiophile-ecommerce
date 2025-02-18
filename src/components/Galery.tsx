import { ProductData } from "@/types";

// sp:h-[173px] sp:w-[278px]  md:h-[200px] md:w-[348px] mk:h-[278px] mk:w-[445px]

// sp:w-[396px] sp:h-[368px] mk:w-[635px] mk:h-[586px]


/* mk: "1110px",
        sp: "925px",
        md: "800px",
        acc: "560px",
        sps: "470px", */

type GalleryProps = {
    products: ProductData[],
    model?: string
}


export default function Gallery({ products, model }: GalleryProps) {

    const prod = products.find(findId => findId._id === model)

    // console.log(model)
    // console.log(prod?.gallery.first.desktop)
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row gap-[20px] mk:gap-[30px] h-auto  items-center ">

            <div className="flex flex-col mk:gap-[30px] gap-[20px]">

                <div
                    className="rounded-lg bg-[url('./assets/xx99two/image-gallery-1.jpg')] bg-cover bg-no-repeat bg-center || w-[329px] h-[174px] sps:w-[440px] acc:w-[530px]  md:w-[278px]     mk:w-[445px] mk:h-[280px]  "
                >
                    <img
                        src={prod?.gallery.first.desktop}
                        alt=""
                        className="rounded-lg"
                    />
                </div>

                <div
                    className="rounded-lg bg-[url('./xx99two/image-gallery-2.jpg')] bg-cover bg-no-repeat bg-center || w-[329px] h-[174px] sps:w-[440px] acc:w-[530px]  md:w-[278px]  mk:w-[445px]  mk:h-[280px]             "
                >
                    <img
                        src={prod?.gallery.second.desktop}
                        alt=""
                        className="rounded-lg"
                    />
                </div>
            </div>

            <div
                className="rounded-lg bg-[url('./xx99two/image-gallery-3.jpg')] bg-no-repeat || w-[329px] h-[368px] sps:w-[440px]  acc:w-[530px] md:w-[630px]  mk:h-[588px] "
            >
                <img
                    src={prod?.gallery.third.desktop}
                    alt=""
                    className="rounded-lg"
                />
            </div>
        </div>
    );
}
