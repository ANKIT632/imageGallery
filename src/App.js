import NavBar from "./components/Navbar";
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from './components/Collection'
import Community from "./components/Community";
import Explore from "./components/Explore";
import './css/common.css';

import './App.css';
import { useSelector } from "react-redux";

import ContactUs from "./contactUs";

function App() {
  const mode = useSelector((state => state.mode))
  const IsDataAvilable = useSelector((state => state.IsDataAvilable));

  return (
    <div className={mode ? "viewLight" : "viewDark"} id={IsDataAvilable ? "width" : "widthFix"}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Community" element={<Community />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
