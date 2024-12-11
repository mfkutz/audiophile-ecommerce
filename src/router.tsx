import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Home from "./pages/Home"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route element={<Home />} index />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
