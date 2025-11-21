import "./App.css";
import Body from "./utils/Body";
import Navbar from "./utils/Navbar";

function App() {
  return (
    <div className="bg-gray-950 h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-hidden">
        <Body />
      </div>
    </div>
  );
}

export default App;
