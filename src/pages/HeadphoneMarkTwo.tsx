import Accesories from "@/components/Accesories";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Galery from "@/components/Galery";
import MaybeLikes from "@/components/MaybeLikes";
import NewProductAdd from "@/components/NewProductAdd";
import NoticeSection from "@/components/Notice.section";

export default function HeadphoneMarkTwo() {
    return (
        <>
            <section className="px-5 mb-[18px] sps:mb-[50px] md:mb-[124px] sp:mb-[153px]">
                <NewProductAdd />
            </section>

            <section className="px-5 mb-[180px] sps:mb-[280px] md:mb-[0px]">
                <Features />
            </section>

            <section className="px-5 mt-[105px]">
                <Galery />
            </section>

            <section className="px-5 md:mt-[166px] mt-[-130px] flex-1 ">
                <MaybeLikes />
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