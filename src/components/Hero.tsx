import Text from "./hero/Text";

export default function Hero() {
    return (
        <section className="relative flex max-w-screen-mk mx-auto">
            <div className="hidden sp:flex">
                <Text />
            </div>
            <div className="overflow-hidden bg-[url('./Bitmap.svg')] bg-no-repeat bg-bottom flex-1" >
                <div className="sp:hidden">
                    <Text />
                </div>
            </div>
        </section>
    )
}
