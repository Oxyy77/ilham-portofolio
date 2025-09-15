import Navbar from "./components/navbar"
import About from "./layouts/about"
import Hero from "./layouts/Hero"
import Skill from "./layouts/Skill"
import Service from "./layouts/Service"
import Project from "./layouts/project"
import Contact from "./layouts/Contact"
import Footer from "./layouts/Footer"


function App() {


  return (
    <div className="bg-[#0d0d0d] min-h-screen px-20">
      <Navbar />
      <Hero />
      <Skill />
      <About />
      <Service />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
