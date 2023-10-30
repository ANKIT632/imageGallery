import NavBar from "./components/Navbar";
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from './components/Collection'
import Community from "./components/Community";
import Explore from "./components/Explore";
import './css/common.css'

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
   
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Community" element={<Community/>}/>
            <Route path="/Collection" element={<Collection/>}/>
            <Route path="/Explore" element={<Explore/>}/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
