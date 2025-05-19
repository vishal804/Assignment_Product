import { Product } from "../types/Product";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Card
    sx={{
      height: 350,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      boxShadow: 3,
    }}
  >
    <CardMedia
      component="img"
      image={product.image}
      alt={product.title}
      sx={{
        height: 140,
        objectFit: "contain",
        padding: 2,
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography variant="h6">{product.title}</Typography>
      <Typography variant="body2">Price: {product.price.toFixed(2)}</Typography>
      <Typography variant="body2">Rating: {product.rating.rate}</Typography>
    </CardContent>
  </Card>
);

export default ProductCard;
