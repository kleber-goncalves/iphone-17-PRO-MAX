import "./index.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Highlights from "./components/Highlights";
import Colors from "./components/Colors";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <NavBar />
            <Hero />
            <Intro />
            <Highlights />
            <Colors />
            <Footer />
        </>
    );
}

export default App;
