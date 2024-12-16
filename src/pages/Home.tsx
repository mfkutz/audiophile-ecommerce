import Accesories from "../components/Accesories";
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
        </>
    )
}
