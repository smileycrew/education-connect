import { Outlet, Route, Routes } from "react-router-dom"
import { Login } from "../login/page"
import { Register } from "../register/page"
import { Authorized } from "../components/authorize"
import { Header } from "../components/header"
import { Worksheets } from "../worksheets/page"
import { NewWorksheet } from "../worksheets/new"
import { Worksheet } from "../worksheets/[id]"

export const Views = ({ userId }) => {
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
                                <Route path="new" element={<NewWorksheet />} />
                                <Route path=":worksheetId" element={<Worksheet />} />
                            </Route>
                        </Route>
                    </Routes>
                </Authorized>
            } />
        </Routes>
    )
}