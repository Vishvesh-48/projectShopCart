import { Routes, Route } from "react-router-dom"
import { Card, Home } from "../pages"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home title="Home"/>}/>

            <Route path="/card"  element={<Card title="Card"/>}/>
        </Routes>
    )
}
