import "./App.css";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";

function App() {
    return (
        <div className="h-4  bg-slate-50 text-neutral-700 ">
            <Home />
            <Skills />
            {/* <Projects /> */}
            <Resume />
            <Contact />
        </div>
    );
}

export default App;
