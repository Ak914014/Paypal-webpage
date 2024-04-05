import APIandSDK from "./components/APIandSDK";
import DevToolsAndRes from "./components/DevToolsAndRes";
import {LandingPage} from "./components/LandingPage";
import Looking from "./components/Looking";
import MakePayment from "./components/MakePayment";
import { Navbar } from "./components/Navbar";
import Payments from "./components/Payments";

function App() {

  return (
    <>
      <Navbar />
      <LandingPage />
      <Payments/>
      <MakePayment/>
      <APIandSDK/>
      <DevToolsAndRes/>
      <Looking/>
    </>
  );
}

export default App;
