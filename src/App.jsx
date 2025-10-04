// import { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <h1 className="text-2xl font-bold bg-orange-300">Vite + React</h1>
    </>
  );
}

export default App;
