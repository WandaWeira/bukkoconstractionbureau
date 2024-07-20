import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Construction from "./components/Construction";
import Architecture from "./components/Architecture";
import Renovations from "./components/Renovations";
import Remodeling from "./components/Remodeling";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Blog from "./components/Blog"

function App() {
  return (
    <>
      {/* <Home /> */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/renovations" element={<Renovations />} />
          <Route path="/remodeling" element={<Remodeling />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
