import { useEffect, useState } from "react";
import { getLocalStorage } from "./library/utilities";
import { Views } from "./views/Views";

function App() {

  const [userId, setUserId] = useState({})

  const handleGetUser = () => {
    const localStorage = getLocalStorage()
    setUserId(localStorage)
  }

  useEffect(() => { handleGetUser() }, [])

  return (
    <div className="scroll-smooth bg-blue-100 relative">
      <Views userId={userId} />
    </div>
  );
}

export default App;
