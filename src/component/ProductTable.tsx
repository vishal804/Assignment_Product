import { Product } from "../types/Product";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const ProductTable: React.FC<{ products: Product[] }> = ({ products }) => (
  <TableContainer component={Paper} sx={{ marginTop: 2 }}>
    <Typography variant="h6" sx={{ marginBottom: 2 }}>
      Product Table
    </Typography>
    <Table sx={{ minWidth: 650 }} aria-label="product table">
      <TableHead>
        <TableRow>
          <TableCell>Image</TableCell>
          <TableCell>Title</TableCell>
          <TableCell>Price</TableCell>
          <TableCell>Rating</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {products.map((prod) => (
          <TableRow key={prod.id}>
            <TableCell>
              <img
                src={prod.image}
                alt={prod.title}
                style={{ height: "50px", objectFit: "contain" }}
              />
            </TableCell>
            <TableCell>{prod.title}</TableCell>
            <TableCell>{prod.price.toFixed(2)}</TableCell>
            <TableCell>{prod.rating.rate} </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ProductTable;
