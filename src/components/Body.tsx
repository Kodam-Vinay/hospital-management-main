import { Box } from "@mui/material";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { useEffect } from "react";
import { storeActivePath } from "../redux/slices/pathSlice";
import Contact from "../pages/Contact";
import ContactHeader from "./ContactHeader";
import { ALL_COLORS } from "../utils/constants";

const Body = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );

  useEffect(() => {
    dispatch(storeActivePath(pathname));
  }, [pathname]);

  return (
    <Box
      sx={{
        height: "100vh",
        background: isDarkTheme
          ? ALL_COLORS.MAIN_BG_DARK_GRADIENT
          : ALL_COLORS.MAIN_BG_LIGHT_GRADIENT,
        padding: 1,
        overflow: "hidden",
      }}
    >
      <ContactHeader />
      <Header />
      <Box
        sx={{
          display: "flex",
          height: {
            vxs: "80vh",
            lg: "84vh",
          },
          padding: 1,
        }}
      >
        {/* <Contact /> */}
      </Box>
    </Box>
  );
};

export default Body;
