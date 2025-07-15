import Footer from "./components/Footer";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Home from "./components/Home";
import Collections from "./components/Collections";
import MainPage from "./components/MainPage";
import Banner from "./components/Banner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Homepage from "./components/Home";
import About from "./components/About";
import Whyus from "./components/Whyus";
import Contact from "./components/Contact";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <MainPage />
      <Home />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <Collections />
            </div>
          }
        />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/products" element={<Product />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/whyus" element={<Whyus />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
