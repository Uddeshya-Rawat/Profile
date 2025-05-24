import {  useRef } from "react"
import AboutME from "./Component/AboutME"
import Main from "./Component/Main"
import NavBar from "./Component/NavBar"
import Projects from "./Component/Projects";




function App() {
  const aboutRef = useRef(null);
  
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef=useRef(null)

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
        />
        <section ref={homeRef}><Main /></section>
        <section ref={aboutRef}><AboutME /></section>
         <section ref={projectsRef}><Projects/></section>
      </div>

    </>
  )
}

export default App
