import Logo from "./Logo";

export default function Header() {
    return (
        <header className="max-w-screen-mk flex items-center justify-between mx-auto py-8">
            <Logo />
            <nav className="text-white flex uppercase space-x-6 ">
                <ul className=" tracking-[2px] font-bold text-[13px] ">Home</ul>
                <ul className=" tracking-[2px] font-bold text-[13px]">Headphones</ul>
                <ul className=" tracking-[2px] font-bold text-[13px]">Speakers</ul>
                <ul className=" tracking-[2px] font-bold text-[13px]">Earphones</ul>
            </nav>
            <img src="/icon-cart.svg" alt="cart logo" />
        </header>
    )
}
