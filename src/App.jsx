
// import DaisyNav from "./components/DaisyNav/DaisyNav";
import LineChart from "./components/LineChart/LineChart";
import NavBar from "./components/Navbar/NavBar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";

function App() {

  return (
    <>
    <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className="text-2xl font-bold bg-orange-300">Vite + React</h1>
      {/* <PriceOptions></PriceOptions> */}
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  );
}

export default App;
