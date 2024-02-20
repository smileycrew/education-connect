import { Outlet, Route, Routes } from "react-router-dom"
// import { Authorized } from "../components/authorize"
import { Header } from "../components/header"
import { Worksheets } from "../worksheets/page"
import { NewWorksheet } from "../worksheets/new"
import { Worksheet } from "../worksheets/[id]"
import { getLocalStorage } from "../library/utilities"
import { useEffect, useState } from "react"
import { Home } from "../home/page"
import { Students } from "../students/page"

export const Views = () => {
    // state
    const [userId, setUserId] = useState({})
    // handle function to get local storage
    const handleGetLocalStorage = () => {
        const getId = getLocalStorage()
        setUserId(getId)
    }
    // use effect
    useEffect(() => { handleGetLocalStorage() }, [])
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header />
                    <Outlet />
                </>
            }>
                <Route index element={<Home />} />
                <Route path="students" element={<Students />} />
                <Route path="worksheets">
                    <Route index element={<Worksheets userId={userId} />} />
                    <Route path="new" element={<NewWorksheet userId={userId} />} />
                    <Route path=":worksheetId" element={<Worksheet />} />
                </Route>
            </Route>
        </Routes>
    )
}