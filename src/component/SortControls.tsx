import { Button, Box } from "@mui/material";

interface Props {
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

const SortControls: React.FC<Props> = ({ sortOrder, setSortOrder }) => (
  <Box sx={{ marginBottom: 2 }}>
    <Button
      variant="contained"
      onClick={() => setSortOrder("asc")}
      disabled={sortOrder === "asc"}
      sx={{ marginRight: 2 }}
    >
      Price: Low to High
    </Button>
    <Button
      variant="contained"
      onClick={() => setSortOrder("desc")}
      disabled={sortOrder === "desc"}
    >
      Price: High to Low
    </Button>
  </Box>
);

export default SortControls;
