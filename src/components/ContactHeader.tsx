import { Box, Typography } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useAppSelector } from "../utils/hooks";
import { ALL_COLORS, applyFontAndOtherStyles } from "../utils/constants";
import { CONTACT_DETAILS } from "../utils/ReactConstants";
import ContactIcons from "./ContactIcons";

const ContactHeader = () => {
  const isDarkTheme = useAppSelector(
    (store) => store?.persistSliceReducer?.theme?.isDarkTheme
  );

  const handleClickMobile = () => {
    window.open(`tel:${CONTACT_DETAILS.email}`);
  };
  const handleClickEmail = () => {
    window.open(`mailto:${CONTACT_DETAILS.email}`);
  };

  const applyFontGradient = isDarkTheme
    ? "gradient_text_light"
    : "gradient_text_dark";

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: {
          sm: "space-around",
        },
        width: "100%",
        height: "10vh",
      }}
      className={applyFontGradient}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            vxs: "column",
            sm: "row",
          },
          alignItems: "center",
          justifyContent: {
            sm: "center",
          },
          gap: {
            sm: 2,
          },
          width: {
            vxs: "100%",
            sm: "fit-content",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={handleClickMobile}
        >
          <Box
            sx={{
              display: "inline-block",
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <LocalPhoneIcon
              sx={{
                ...applyFontAndOtherStyles(isDarkTheme),
                color: isDarkTheme
                  ? ALL_COLORS.LIGHT_FONT_BG_COLOR
                  : ALL_COLORS.DARK_FONT_BG_COLOR,
              }}
            />
          </Box>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              ...applyFontAndOtherStyles(isDarkTheme),
            }}
          >
            {CONTACT_DETAILS.phone}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
          onClick={handleClickEmail}
        >
          <TelegramIcon
            sx={{
              ...applyFontAndOtherStyles(isDarkTheme),
              color: isDarkTheme
                ? ALL_COLORS.LIGHT_FONT_BG_COLOR
                : ALL_COLORS.DARK_FONT_BG_COLOR,
            }}
          />
          <Typography
            variant="h6"
            component="h6"
            sx={{
              ...applyFontAndOtherStyles(isDarkTheme),
            }}
          >
            {CONTACT_DETAILS.email}
          </Typography>
        </Box>
      </Box>

      {/* icons */}
      <ContactIcons />
    </Box>
  );
};

export default ContactHeader;
