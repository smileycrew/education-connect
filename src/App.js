import { Views } from "./views/Views";
import { Route, Routes } from "react-router-dom";
import { Login } from "./login/page";
import { Register } from "./register/page";
import { Authorized } from "./components/authorize";

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={
        <Authorized>
          <Views />
        </Authorized>
      } />
    </Routes>
  );
}

export default App;
