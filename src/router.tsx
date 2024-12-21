import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"
import Buttons from "./pages/Buttons"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route path="/" element={<Home />} index />
                    <Route path="/buttons" element={<Buttons />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
