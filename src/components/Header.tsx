import {
  AppBar,
  Box,
  FormControlLabel,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MaterialUISwitch } from "../utils/muiConstants";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { toggleThemeMode } from "../redux/slices/themeSlice";
import NavigationLinks from "./NavigationLinks";
import useDeviceResize from "../hooks/useDeviceResize";
import { useNavigate } from "react-router-dom";
import { ALL_NAVIGATION_LINKS } from "../utils/ReactConstants";

const Header = () => {
  const navigate = useNavigate();
  const { width } = useDeviceResize();
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          height: {
            xs: "10vh",
            lg: "9vh",
          },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: isDarkTheme ? "#333" : "",
        }}
      >
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => navigate(ALL_NAVIGATION_LINKS.home.path)}
          >
            Logo
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <FormControlLabel
            control={<MaterialUISwitch />}
            label=""
            checked={isDarkTheme}
            onChange={() => dispatch(toggleThemeMode())}
          />
          {/* navigation links */}
          {width < 640 && (
            <IconButton
              sx={{
                color: isDarkTheme ? "white" : "whitesmoke",
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {width >= 640 && <NavigationLinks />}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;