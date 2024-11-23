import { Box } from "@mui/material";
import Header from "./Header";
import { Outlet, useLocation } from "react-router-dom";
import { useAppDispatch } from "../utils/hooks";
import { useEffect } from "react";
import { storeActivePath } from "../redux/slices/pathSlice";

const Body = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(storeActivePath(pathname));
  }, [pathname]);

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          height: {
            vxs: "90vh",
            lg: "91vh",
          },
          padding: 1,
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Body;
