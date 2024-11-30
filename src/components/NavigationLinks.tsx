// import { useRef } from "react";
import { Box, Typography } from "@mui/material";
import { ALL_NAVIGATION_LINKS } from "../utils/ReactConstants";
// import { useLocation } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import { applyFontAndOtherStyles } from "../utils/constants";

const NavigationLinks = () => {
  // const ref = useRef<HTMLElement>();
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );
  // const { pathname } = useLocation();
  // const handleNavigationLink = () => {
  //   ref?.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const applyFontGradient = isDarkTheme
    ? "gradient_text_light"
    : "gradient_text_dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          vxs: "column",
          sm: "row",
        },
        alignItems: "center",
        gap: 2,
      }}
    >
      {Object.keys(ALL_NAVIGATION_LINKS).map((eachNavigation) => {
        const link = ALL_NAVIGATION_LINKS[eachNavigation];
        // const isActive = pathname === link.path;
        return (
          <Typography
            key={ALL_NAVIGATION_LINKS[eachNavigation].name}
            component="div"
            sx={{
              flexGrow: 1,
              ...applyFontAndOtherStyles(isDarkTheme),
              fontWeight: 500,
            }}
            className={applyFontGradient}
          >
            {link.name}
          </Typography>
        );
      })}
    </Box>
  );
};

export default NavigationLinks;
