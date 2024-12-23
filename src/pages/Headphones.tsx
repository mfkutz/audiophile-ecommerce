import Accesories from "@/components/Accesories";
import Footer from "@/components/Footer";
import HeroTitle from "@/components/Hero.title";
import NewProduct from "@/components/NewProduct";
import ProductDescription from "@/components/ProductDescription";
import ProductDescriptionTwo from "@/components/ProductDescriptionTwo";

export default function Headphones() {
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
            <section className="px-5">
                <ProductDescriptionTwo />
            </section>
            <section className="flex-1 px-5" >
                <Accesories />
            </section>
            <section className="flex-1 bg-black-esp px-5">
                <Footer />
            </section>
        </>
    )
}
