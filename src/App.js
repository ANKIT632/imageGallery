import NavBar from "./components/Navbar";
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
   
          <Routes>
            <Route path="/" element={<Home />} />
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
