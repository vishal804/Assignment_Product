import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Welcome to the Product Viewer</h1>
    <Link to="/product-list">Go to Product List</Link>
  </div>
);

export default Home;
