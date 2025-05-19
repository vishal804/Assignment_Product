import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Product } from "../types/Product";
// import ProductCard from "../components/ProductCard";
// import ProductTable from "../components/ProductTable";
// import SortControls from "../components/SortControls";
// import ViewToggle from "../components/ViewToggle";

type ViewType = "grid" | "table";
type SortOrder = "asc" | "desc";

const ProductList: React.FC = () => {
  //   const [products, setProducts] = useState<Product[]>([]);
  //   const [view, setView] = useState<ViewType>('grid');
  //   const [sortOrder, setSortOrder] = useState<SortOrder>('asc');

  //   useEffect(() => {
  //     axios.get('https://fakestoreapi.com/products')
  //       .then(res => setProducts(res.data))
  //       .catch(err => console.error('API Error', err));
  //   }, []);

  //   const sortedProducts = [...products].sort((a, b) =>
  //     sortOrder === 'asc' ? a.price - b.price : b.price - a.price
  //   );

  return (
    <div style={{ padding: "20px" }}>
      {/* <h2>Product List</h2>
      <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
      <ViewToggle view={view} setView={setView} />
      <div style={{ marginTop: '20px' }}>
        {view === 'grid' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
            {sortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <ProductTable products={sortedProducts} />
        )}
      </div> */}
    </div>
  );
};

export default ProductList;
