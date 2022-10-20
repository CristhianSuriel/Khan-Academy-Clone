//import components
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoShot from "./components/InfoShot";
import Join from "./components/Join";
import NavB from "./components/Navbar";
import Quote from "./components/Quote";
import Summary from "./components/Summary";
import Supporters from "./components/Supporters";

// import data and css
import { prjdata } from "./projectData";
import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavB />
      <Hero />
      <Summary />
      <InfoShot />
      <InfoShot />
      <InfoShot />
      <Quote />
      <InfoShot />
      <Join />
      <Supporters />
      <Footer />
    </div>
  );
}

export default App;
