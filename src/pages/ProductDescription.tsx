import { getProduct } from "@/api/ProductsApi";
import Accesories from "@/components/Accesories";
import { SpinnerDotted } from "spinners-react";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Gallery from "@/components/Galery";
import MaybeLikes from "@/components/MaybeLikes";
import NewProductAdd from "@/components/NewProductAdd";
import NoticeSection from "@/components/Notice.section";
import { useSmoothScrollToTop } from "@/hooks/utils";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export default function ProductDescription() {

    useSmoothScrollToTop()

    const { id } = useParams()

    const { data: products, isLoading, error } = useQuery({
        queryKey: ["productDetail"],
        queryFn: getProduct
    })

    if (isLoading) return <div className="flex bg-white-ec h-screen justify-center items-center">
        <SpinnerDotted color="#D87D4A" />
    </div>

    if (error) return <div className="flex bg-black-ec text-white h-screen justify-center items-center">
        <div>
            Ups...something it's wrong
        </div>
    </div>

    return (
        <>
            <section className="px-5 mb-[18px] sps:mb-[50px] md:mb-[124px] sp:mb-[153px]">
                <NewProductAdd products={products ?? []} model={id} />
            </section>

            <section className="px-5 mb-[180px] sps:mb-[280px] md:mb-[0px]">
                <Features products={products ?? []} model={id} />
            </section>

            <section className="px-5 mt-[-100px] sps:mt-[-180px] acc:mt-[-190px] md:mt-[100px] sp:mt-[160px] mb-[200px] acc:mb-[240px] md:mb-[-1px]">
                <Gallery />
            </section>

            <section className="px-5 md:mt-[166px] mt-[-130px] flex-1 ">
                <MaybeLikes products={products ?? []} model={id} />
            </section>

            <section className="flex-1 px-5 mt-[170px] sps:mt-[-30px] md:mt-[240px] " >
                <Accesories />
            </section>

            <section className="px-5 mt-[120px] sps:mt-[-40px] md:mb-[160px] mb-[-90px]">
                <NoticeSection />
            </section>

            <section className="flex-1 bg-black-esp px-5">
                <Footer />
            </section>
        </>
    )
}
