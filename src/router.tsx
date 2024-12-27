import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Buttons from "./pages/Buttons"
import Headphones from "./pages/Headphones"
import Speakers from "./pages/Speakers"
import Earphones from "./pages/Earphones"
import HeadphoneMarkOne from "./pages/HeadphoneMarkOne"
import HeadphoneMarkTwo from "./pages/HeadphoneMarkTwo"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} index />
                    <Route path="/headphones" element={<Headphones />} />
                    <Route path="/speakers" element={<Speakers />} />
                    <Route path="/earphones" element={<Earphones />} />
                    <Route path="/buttons" element={<Buttons />} />

                    <Route path="/mark-one" element={<HeadphoneMarkOne />} />
                    <Route path="/mark-two" element={<HeadphoneMarkTwo />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}
