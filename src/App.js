import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory/:inventoryId" element={<InventoryDetails></InventoryDetails>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
