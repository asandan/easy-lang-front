import { Theme, createTheme } from "@mui/material/styles";

const primaryColor = "#000 !important";
const secondaryColor = "#00D75E !important";
// Create a theme instance.
export const themeObject = (isDark: boolean): Theme =>
  createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      }
    },
  });