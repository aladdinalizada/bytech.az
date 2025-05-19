import "./App.css";
import { AppProvider } from "./context/AppContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Contact from "./pages/contact";

function App() {
  return (
    <AppProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404 - Səhifə Tapılmadı</div>} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
