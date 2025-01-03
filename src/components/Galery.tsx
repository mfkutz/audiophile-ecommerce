
export default function Gallery() {
    return (
        <div className="max-w-screen-mk mx-auto flex flex-col md:flex-row gap-[30px] h-auto  ">

            <div className="flex flex-col gap-[30px]">
                <div
                    className="rounded-lg bg-[url('./xx99two/image-gallery-1.jpg')] bg-cover bg-no-repeat bg-center h-[278px] w-[445px]"
                ></div>
                <div
                    className="rounded-lg bg-[url('./xx99two/image-gallery-2.jpg')] bg-cover bg-no-repeat bg-center h-[278px] w-[445px]"
                ></div>
            </div>

            <div
                className="rounded-lg bg-[url('./xx99two/image-gallery-3.jpg')] bg-no-repeat w-[635px] h-[586px] flex"
            ></div>
        </div>
    );
}
