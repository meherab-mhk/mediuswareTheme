import "./App.css";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Services from "./components/Services";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="">
        <div className="relative">
          <video
            className="absolute inset-0 object-cover w-full h-full"
            autoPlay
            muted
            loop
          >
            <source src="../images/bg-video.mp4" type="video/mp4" />
          </video>
          <Nav></Nav>
          <Hero></Hero>
        </div>
        <Services></Services>
        <AboutUs></AboutUs>
        <Work></Work>
      </div>
    </>
  );
}

export default App;
