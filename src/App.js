import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from './Pages/Shared/Header/Header'
import Footer from './Pages/Shared/Footer/Footer'
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/inventory/:inventoryId" element={<RequireAuth>
          <InventoryDetails></InventoryDetails>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
        
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
