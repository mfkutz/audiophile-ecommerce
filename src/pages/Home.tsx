import FreatureSectionThree from "@/components/FreatureSection.three";
import Accesories from "../components/Accesories";
import FeatureSection from "../components/Feature.section";
import FeatureSectionTwo from "../components/Feature.section.two";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <>
            <section className="flex-1 bg-black-esp px-5">
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
        </>
    )
}
