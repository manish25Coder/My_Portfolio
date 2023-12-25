import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import OverView from "./Components/OverView";


function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="absolute w-screen ">
        <Navbar />
      </div>
      <div className="min-h-screen ">
        <div className="absolute">
          <Main/>
        </div>
        <div className="relative">
          <About/>
        </div>
      </div>

      <div className="flex flex-col relative bg-black">
        <OverView />
      </div>
     
    </div>
  );
}

export default App;
