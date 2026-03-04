import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Footer from "./components/footer";
import CTicket from "./components/CTicket";
import { useState } from "react";

function App() {
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <CTicket
        setInProgressCount={setInProgressCount}
        setResolvedCount={setResolvedCount}
      />
      <Footer />
    </>
  );
}

export default App;
