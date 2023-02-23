import { useState } from "react";
import Header from "./components/Header";

import LocomotiveScroll from "locomotive-scroll";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Work from "./components/Work";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true,
// });

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App relative ">
      <Header />
      <main data-scroll-container>
        <Hero />
        <Hero2 />
        <WhyUs />
        <Services />
        <Work />
        <Clients />
        <Footer />
      </main>
    </div>
  );
}

export default App;
