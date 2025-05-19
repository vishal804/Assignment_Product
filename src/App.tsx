import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Home from "./pages/Home";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/product-list" element={<ProductList />} />
    </Routes>
  </Router>
);

export default App;
