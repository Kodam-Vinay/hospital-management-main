import { Box, IconButton, Tooltip } from "@mui/material";
import { CONTACT_LINKS } from "../utils/ReactConstants";
import { ALL_COLORS, applyFontAndOtherStyles } from "../utils/constants";
import { useAppSelector } from "../utils/hooks";

const ContactIcons = () => {
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );
  return (
    <Box
      sx={{
        display: {
          vxs: "none",
          sm: "flex",
        },
        justifyContent: {
          sm: "center",
        },
        alignItems: "center",
        gap: 1,
      }}
    >
      {Object.keys(CONTACT_LINKS).map((eachContact) => (
        <Tooltip title={CONTACT_LINKS[eachContact].name} key={eachContact}>
          <IconButton
            href={CONTACT_LINKS[eachContact].path}
            target="_blank"
            sx={{
              ...applyFontAndOtherStyles(isDarkTheme),
              color: isDarkTheme
                ? ALL_COLORS.LIGHT_FONT_BG_COLOR
                : ALL_COLORS.DARK_FONT_BG_COLOR,
              ":hover": {
                color: CONTACT_LINKS[eachContact].color,
                mt: -1,
                background: isDarkTheme
                  ? ALL_COLORS.MAIN_BG_DARK_GRADIENT
                  : ALL_COLORS.MAIN_BG_LIGHT_GRADIENT,
              },
            }}
            className="animation_move"
          >
            {CONTACT_LINKS[eachContact].element}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default ContactIcons;
