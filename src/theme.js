'use client'
import { createTheme } from "@mui/material/styles";
import colors from './styles/colors'

export const theme = createTheme({
  palette: {
    primary: colors?.black,
    secondary: colors?.gray,
  },
});
