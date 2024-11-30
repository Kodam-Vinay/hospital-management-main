import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";

import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { ContactFormValues, navigationLinkTypes } from "./typeConstants";
import { TextField } from "@mui/material";
import { ALL_COLORS } from "./constants";

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

export const CONTACT_DETAILS = {
  name: "vinay kodam",
  email: "contactvinaykumarkodam@gmail.com",
  phone: "+91 1234567890",
  instagram: "https://www.instagram.com/_vinay_vinni_7/",
  linkedin: "https://www.linkedin.com/in/vinay-kumar-kodam",
  website: "https://vinay.kodam.in/",
};

export const CONTACT_LINKS: Record<string, navigationLinkTypes> = {
  instagram: {
    name: "Instagram",
    path: CONTACT_DETAILS.instagram,
    element: <InstagramIcon />,
    color: "#f403fc",
  },
  linkedin: {
    name: "LinkedIn",
    path: CONTACT_DETAILS.linkedin,
    element: <LinkedInIcon />,
    color: "#0568c5",
  },
  website: {
    name: "Website",
    path: CONTACT_DETAILS.website,
    element: <LanguageIcon />,
    color: "gray",
  },
};

export const ReusableInput = ({
  label,
  type,
  name,
  value,
  handleChange,
  errors,
  isDarkTheme,
  multiline,
  rows,
}: {
  label: string;
  name: keyof ContactFormValues;
  type?: string;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors: Partial<ContactFormValues>;
  isDarkTheme?: boolean;
  multiline?: boolean;
  rows?: number;
}) => {
  return (
    <TextField
      label={label}
      type={type || "text"}
      name={name}
      value={value}
      onChange={handleChange}
      fullWidth
      error={!!errors[name]}
      helperText={errors[name]}
      multiline={multiline}
      rows={rows}
      sx={{
        mb: 2,
        "& .MuiOutlinedInput-root": {
          color: isDarkTheme
            ? ALL_COLORS.LIGHT_FONT_BG_COLOR
            : ALL_COLORS.DARK_FONT_BG_COLOR,
          "& fieldset": {
            borderColor: isDarkTheme
              ? ALL_COLORS.LIGHT_FONT_BG_COLOR
              : ALL_COLORS.DARK_FONT_BG_COLOR,
          },
          "&:hover fieldset": {
            borderColor: isDarkTheme
              ? ALL_COLORS.LIGHT_FONT_BG_COLOR
              : ALL_COLORS.DARK_FONT_BG_COLOR,
          },
          "&.Mui-focused fieldset": {
            borderColor: isDarkTheme
              ? ALL_COLORS.LIGHT_FONT_BG_COLOR
              : ALL_COLORS.DARK_FONT_BG_COLOR,
            borderWidth: 2,
          },
        },
        "& .MuiInputLabel-root": {
          color: isDarkTheme
            ? ALL_COLORS.LIGHT_FONT_BG_COLOR
            : ALL_COLORS.DARK_FONT_BG_COLOR,
          "&.Mui-focused": {
            color: isDarkTheme
              ? ALL_COLORS.LIGHT_FONT_BG_COLOR
              : ALL_COLORS.DARK_FONT_BG_COLOR,
          },
        },
        "& .MuiFormHelperText-root": {
          color: isDarkTheme
            ? ALL_COLORS.LIGHT_FONT_BG_COLOR
            : ALL_COLORS.DARK_FONT_BG_COLOR,
        },
      }}
    />
  );
};
