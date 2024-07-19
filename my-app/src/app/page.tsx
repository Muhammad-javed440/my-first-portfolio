import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

export default function Home() {
  return (
  <>
<div>
  <Navbar/>
  <Hero/>
  <Contact/>
  <Footer/>
  
</div>

</>
)
}   