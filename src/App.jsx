import EditorNav from "./components/EditorNav"
import StatusBar from "./components/StatusBar"
import CustomCursor from "./components/CustomCursor"
import Hero from "./layouts/Hero"
import About from "./layouts/About"
import Skill from "./layouts/Skill"
import Service from "./layouts/Service"
import Project from "./layouts/Project"
import Contact from "./layouts/Contact"

function App() {
  return (
    <div className="bg-[var(--bg)] min-h-screen pb-12 sm:pb-14">
      <CustomCursor />
      <EditorNav />
      <Hero />
      <About />
      <Skill />
      <Service />
      <Project />
      <Contact />
      <StatusBar />
    </div>
  )
}

export default App
