import NavBar from "./components/Navbar";
import Home from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from './pages/Collection'
import AboutUs from "./pages/AboutUs";
import Explore from "./components/Explore";
import './css/common.css';

import './App.css';
import { useSelector } from "react-redux";

import ContactUs from "./pages/contactUs";
import CollectionsPhoto from "./components/CollectionsPhoto";

function App() {
  const mode = useSelector((state => state.mode))
  const IsDataAvilable = useSelector((state => state.IsDataAvilable));

  return (
    <div className={mode ? "viewLight" : "viewDark"} id={IsDataAvilable ? "width" : "widthFix"}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/CollectionsPhoto/:id/:totalPhotos" element={<CollectionsPhoto />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/contactUs" element={<ContactUs />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
