import FreatureSectionThree from "@/components/FreatureSection.three";
import Accesories from "../components/Accesories";
import FeatureSection from "../components/Feature.section";
import FeatureSectionTwo from "../components/Feature.section.two";
import Hero from "../components/Hero";
import NoticeSection from "@/components/Notice.section";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <>
            <section className="flex-1 bg-black-esp px-1 sp:px-5">
                <Hero />
            </section>
            <section className="px-5">
                <Accesories />
            </section>
            <section className="px-5">
                <FeatureSection />
            </section>
            <section className="px-5">
                <FeatureSectionTwo />
            </section>
            <section className="px-5">
                <FreatureSectionThree />
            </section>
            <section className="px-5">
                <NoticeSection />
            </section>
            <section className="flex-1 bg-black-esp px-5">
                <Footer />
            </section>
        </>
    )
}
