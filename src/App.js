import './App.css';
import Home from './pages/Home/Home';
import SearchStock from './pages/SearchStocks/SearchStocks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/NavBar';

function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path = '/' exact element ={<Home />}></Route>
          <Route path = '/search' element ={<SearchStock/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
