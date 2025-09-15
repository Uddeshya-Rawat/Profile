import {  useRef } from "react"
import AboutME from "./Component/AboutME"
import Main from "./Component/Main"
import NavBar from "./Component/NavBar"
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import Experince from "./Component/Experince";




function App() {
  const aboutRef = useRef(null);
  
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef=useRef(null)
  const expRef=useRef(null)

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <>
      <div className=" bg-gradient-to-b from-[#001219] via-[#005f73] to-[#0a9396] h-full ">
        <NavBar
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
          scrollToHome={()=>scrollToSection(homeRef)}
          scrollToExperience={()=>scrollToSection(expRef)}
          
        />
        <section ref={homeRef}><Main /></section>
        <section ref={aboutRef}><AboutME /></section>
        <section ref={expRef}><Experince/></section>
         <section ref={projectsRef} className="p-6  bg-gradient-to-b from-[#001219] via-[#005f73] to-[#001219] mt-15"><Projects/></section>
         <section ref={contactRef} className="bg-[#001219]"><Contact/></section>
      </div>

    </>
  )
}

export default App
