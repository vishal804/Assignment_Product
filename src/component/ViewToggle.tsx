import { Button, Box } from "@mui/material";

interface Props {
  view: "grid" | "table";
  setView: (view: "grid" | "table") => void;
}

const ViewToggle: React.FC<Props> = ({ view, setView }) => (
  <Box sx={{ marginBottom: 2 }}>
    <Button
      variant="contained"
      onClick={() => setView("grid")}
      disabled={view === "grid"}
      sx={{ marginRight: 2 }}
    >
      Grid View
    </Button>
    <Button
      variant="contained"
      onClick={() => setView("table")}
      disabled={view === "table"}
    >
      Table View
    </Button>
  </Box>
);

export default ViewToggle;
