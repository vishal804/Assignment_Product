import "./styles.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/home" element={<Home />} />
    <Route path="/product-list" element={<ProductList />} />
  </Routes>
);

export default App;
