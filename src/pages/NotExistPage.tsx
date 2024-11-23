import { Box, Typography, Button } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";

const NotExistPage = () => {
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );
  const previousPath = useAppSelector(
    (store) => store?.persistSliceReducer?.path?.previousPath
  );
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(previousPath);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        bgcolor: isDarkTheme ? "#121212" : "#f9f9f9",
        color: isDarkTheme ? "#ffffff" : "#000000",
        p: 3,
      }}
    >
      <ErrorOutlineIcon
        sx={{
          fontSize: "80px",
          color: isDarkTheme ? "warning.main" : "error.main",
          mb: 2,
        }}
      />
      <Typography variant="h4" sx={{ mb: 1 }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The page you are looking for does not exist or has been moved.
      </Typography>
      <Button
        variant="contained"
        color={isDarkTheme ? "warning" : "primary"}
        onClick={handleGoBack}
        sx={{
          textTransform: "none",
        }}
      >
        Go Back
      </Button>
    </Box>
  );
};

export default NotExistPage;
