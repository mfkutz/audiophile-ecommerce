import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import Checkout from "./pages/Checkout"
import ProductDescription from "./pages/ProductDescription"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} index />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/earphones" element={<Earphones />} />

                    <Route path="/:id" element={<ProductDescription />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
