import "./App.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Laoyutlar
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
// Səhifələr
import Home from "./pages/Home";
import Contact from "./pages/contact";
import Servicess from "./pages/services";
import ServiceDetail from "./pages/serviceDetail";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Servicess />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="*" element={<div>404 - Səhifə Tapılmadı</div>} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
