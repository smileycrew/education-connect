import { Outlet, Route, Routes } from "react-router-dom"
import { Login } from "../login/page"
import { Register } from "../register/page"
import { Authorized } from "../components/authorize"
import { Header } from "../components/header"
import { Worksheets } from "../worksheets/page"
import { NewWorksheet } from "../worksheets/new"
import { Worksheet } from "../worksheets/[id]"
import { getLocalStorage } from "../library/utilities"
import { useEffect, useState } from "react"

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={
                <Authorized>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Header />
                                <Outlet />
                            </>
                        }>
                            <Route path="worksheets">
                                <Route index element={<Worksheets userId={userId} />} />
                                <Route path="new" element={<NewWorksheet userId={userId} />} />
                                <Route path=":worksheetId" element={<Worksheet />} />
                            </Route>
                        </Route>
                    </Routes>
                </Authorized>
            } />
        </Routes>
    )
}