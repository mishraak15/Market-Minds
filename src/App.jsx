import "./App.css";
import Features from "./components/Features/Features";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/Footer/Footer";
import Growth from "./components/Growth/Growth";
import HomeSection from "./components/HomeSection/HomeSection";
import Projects from "./components/Projects/Projects";
import ServicesSection from "./components/ServicesSection/ServicesSection";

function App() {
  return (
    <div className="App">
      <HomeSection />
      <ServicesSection />
      <Features />
      <Projects />
      <Growth />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
