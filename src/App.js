import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Services from "./Components/Services/Services";
import Product from "./Components/Product/Product";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />      
        <Route path="/about" element={<About />} /> 
         <Route path="/services" element={<Services />} /> 
         <Route path="/projects" element={<Product />} /> 
         <Route path="/blog" element={<Blog />} /> 
         <Route path="/contact" element={<Contact />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
