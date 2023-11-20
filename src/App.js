import NavBar from "./components/Navbar";
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from './components/Collection'
import Community from "./components/Community";
import Explore from "./components/Explore";
import './css/common.css'

import NotFoundPage from "./components/NotFoundPage";
import './App.css'
import { useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  const mode=useSelector((state=>state.mode))
  const IsDataAvilable=useSelector((state=>state.IsDataAvilable));
  
  return (
    <div className= {mode ? "viewLight":"viewDark"} id={IsDataAvilable?"width":"widthFix"}>
      <Router>
      <NavBar />
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Community" element={<Community/>}/>
            <Route path="/Collection" element={<Collection/>}/>
            <Route path="/Explore" element={<Explore/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
      
        </Routes>
        
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
