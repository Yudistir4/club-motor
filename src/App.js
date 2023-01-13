import Navbar from "./components/Navbar";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[122px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
