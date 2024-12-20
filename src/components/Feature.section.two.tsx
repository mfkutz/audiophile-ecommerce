import Button from "./buttons/Button";

export default function FeatureSectionTwo() {
    return (
        <div className="max-w-screen-mk mx-auto bg-[url('./speaker-zx7-desktop.jpg')] rounded-lg bg-no-repeat bg-cover mb-[45px]">
            <div className="flex flex-col items-start justify-center h-full py-24 px-[98px]">
                <h4>zx7 speaker</h4>
                <div className="mt-[-12px]">
                    <Button
                        background="bg-transparent"
                        action="see product"
                        special={true}
                    />
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
