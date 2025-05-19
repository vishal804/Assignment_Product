import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../types/Product";
import ProductCard from "../component/ProductCard";
import ProductTable from "../component/ProductTable";
import SortControls from "../component/SortControls";
import ViewToggle from "../component/ViewToggle";
import { Box, Typography, CircularProgress } from "@mui/material";

type ViewType = "grid" | "table";
type SortOrder = "asc" | "desc";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [view, setView] = useState<ViewType>("grid");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log("response.data", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <Box>
      <Typography variant="h4">Product List</Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <SortControls sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <ViewToggle view={view} setView={setView} />
      </Box>

      {loading ? (
        <Box display="flex" justifyContent="center" mt={5}>
          <CircularProgress />
        </Box>
      ) : view === "grid" ? (
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          gap={3}
        >
          {sortedProducts.map((product) => (
            <Box key={product.id} sx={{ width: "30%" }}>
              <ProductCard product={product} />
            </Box>
          ))}
        </Box>
      ) : (
        <ProductTable products={sortedProducts} />
      )}
    </Box>
  );
};

export default ProductList;
