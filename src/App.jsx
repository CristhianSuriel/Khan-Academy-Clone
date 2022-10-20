import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoShot from "./components/InfoShot";
import Join from "./components/Join";
import Navbar from "./components/Navbar";
import Quote from "./components/Quote";
import Summary from "./components/Summary";
import Supporters from "./components/Supporters";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
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
