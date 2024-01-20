import { Outlet, Route, Routes } from "react-router-dom"
import { Register } from "./register/page";
import { Login } from "./login/page";
import { Authorized } from "./components/authorize"
import { Header } from "./components/header"
import { Worksheets } from "./worksheets/page";
import { NewWorksheet } from "./worksheets/new";
import { Worksheet } from "./worksheets/[id]";

function App() {
  return (
    <div className="scroll-smooth bg-blue-100 relative">
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
                {/* <Route index element={<Home />} /> */}
                <Route path="worksheets">
                  <Route index element={<Worksheets />} />
                  <Route path="new" element={<NewWorksheet />} />
                  <Route path=":worksheetId" element={<Worksheet />} />
                </Route>
              </Route>
            </Routes>
          </Authorized>
        } />
      </Routes>
    </div>
  );
}

export default App;
