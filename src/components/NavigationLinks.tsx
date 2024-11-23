import { Box, Typography } from "@mui/material";
import { ALL_NAVIGATION_LINKS } from "../utils/ReactConstants";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../utils/hooks";
import { useRef } from "react";

const NavigationLinks = () => {
  const ref = useRef<HTMLElement>();
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );
  const { pathname } = useLocation();
  const handleNavigationLink = () => {
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };
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
        const isActive = pathname === link.path;
        return (
          <Box
            className={`${
              isDarkTheme
                ? "text-white hover:opacity-80"
                : "text-gray-200 hover:text-gray-400"
            } cursor-pointer`}
            onClick={handleNavigationLink}
          >
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                color: isActive ? "#d1cdcd" : "",
              }}
            >
              {link.name}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default NavigationLinks;
