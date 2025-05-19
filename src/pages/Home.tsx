import { Link as RouterLink } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";

const Home: React.FC = () => (
  <Box textAlign="center" mt={10}>
    <Typography variant="h3">Welcome to the Product Viewer</Typography>
    <Button
      variant="contained"
      size="large"
      component={RouterLink}
      to="/product-list"
    >
      Go to Product List
    </Button>
  </Box>
);

export default Home;
