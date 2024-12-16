import Card from "./accesories/Card"

export default function Accesories() {
    return (
        <div className="mx-auto max-w-screen-mk flex flex-col acc:flex-row justify-between my-20 sps:my-32 acc:my-[200px]  gap-20 sps:gap-28 acc:gap-6">
            <Card />
            <Card />
            <Card />
        </div>
    )
}
