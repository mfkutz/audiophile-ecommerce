import Accesories from "@/components/Accesories";
import Footer from "@/components/Footer";
import NewProductAdd from "@/components/NewProductAdd";
import NoticeSection from "@/components/Notice.section";

export default function HeadphoneMarkTwo() {
    return (
        <>
            <section className="px-5">
                <NewProductAdd />
            </section>

            <section className="flex-1 px-5 mt-[-32px] sps:mt-[-156px] md:mt-[240px]" >
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
