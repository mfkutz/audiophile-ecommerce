import Accesories from "@/components/Accesories";
import Footer from "@/components/Footer";
import HeroTitle from "@/components/Hero.title";
import NewProduct from "@/components/NewProduct";
import NoticeSection from "@/components/Notice.section";
import ProductDescription from "@/components/ProductDescription";
import ProductDescriptionTwo from "@/components/ProductDescriptionTwo";

// import productsData from "@/data/data.json"

export default function Headphones() {

    // const product = productsData.find(product => product.id === 1)
    // console.log(product)

    return (
        <>
            <section className="flex-1 bg-black-esp" >
                <HeroTitle />
            </section>
            <section className="px-5">
                <NewProduct />
            </section>
            <section className="px-5">
                <ProductDescription />
            </section>
            <section className="px-5 md:mb-[240px]">
                <ProductDescriptionTwo />
            </section>
            <section className="flex-1 px-5" >
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
