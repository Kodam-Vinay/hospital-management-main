import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { navigationLinkTypes } from "./typeConstants";

export const ALL_NAVIGATION_LINKS: Record<string, navigationLinkTypes> = {
  home: {
    name: "Home",
    path: "/",
    element: <HomeIcon />,
  },
  about: {
    name: "About Us",
    path: "/about-us",
    element: <InfoIcon />,
  },
  contact: {
    name: "Contact Us",
    path: "/contact-us",
    element: <ContactSupportIcon />,
  },
};
