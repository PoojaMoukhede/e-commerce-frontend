import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Home from './Screen/Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Description from './Screen/Description';
import Login from './Screen/Login';
import Resister from './Screen/Resister';
import CartScreen from './Screen/CartScreen';
import OrderScreen from './Screen/OrderScreen';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product/:id" element={<Description/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Resister/>} />
          
          <Route path="/order" element={<OrderScreen/>} />
          <Route path="/cart" element={<CartScreen/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
