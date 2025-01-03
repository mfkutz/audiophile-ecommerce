import CardLike from "./accesories/CardLike";

export default function MaybeLikes() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col ">
            <h3 className="flex justify-center sps:mb-[60px] mb-[39px] text-[25px] sps:text-[36px]">you may also like</h3>

            <div className="flex flex-col acc:flex-row justify-between gap-14 sps:gap-28 acc:gap-6 items-center">
                <CardLike />
                <CardLike />
                <CardLike />
            </div>


        </div>
    )
}
