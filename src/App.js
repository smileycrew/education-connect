import { Route, Routes } from "react-router-dom"
import { Register } from "./register/page";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} /> */}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
