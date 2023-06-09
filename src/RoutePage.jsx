import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/view/Home"

const RoutePage = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePage