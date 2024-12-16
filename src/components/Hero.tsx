import Text from "./hero/Text";

export default function Hero() {
    return (
        <section className="relative flex max-w-screen-mk mx-auto">
            <div className="hidden sp:flex">
                <Text />
            </div>
            <div className="overflow-hidden bg-[url('./Bitmap.svg')] bg-no-repeat sps:bg-bottom flex-1 bg-cover sps:bg-auto bg-[center_top_-4rem] " >
                <div className="sp:hidden">
                    <Text />
                </div>
            </div>
        </section>
    )
}
