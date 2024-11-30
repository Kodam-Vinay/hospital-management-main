export const ALL_COLORS = {
  LIGHT_FONT_BG_COLOR: "#c8d7da",
  DARK_FONT_BG_COLOR: "#546263",
  MAIN_BG_LIGHT_GRADIENT:
    "linear-gradient(0deg, rgba(206,206,214,1) 18%, rgba(182,229,233,1) 100%)",
  MAIN_BG_DARK_GRADIENT:
    "linear-gradient(0deg, rgba(110,110,115,1) 18%, rgba(45,47,47,1) 100%)",
};

export const applyFontAndOtherStyles = (isDarkTheme: boolean) => {
  return {
    fontSize: {
      vxs: 14,
      mxs: 18,
      md: 20,
      lg: 22,
    },
    fontWeight: 600,
    cursor: "pointer",
  };
};
