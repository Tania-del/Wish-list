'use client'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { ReactNode } from "react";
// import colors from '../styles/colors'

export const theme = createTheme({
  palette: {
    dark: {
      main: "#303031",
    },
    gray: {
      main: "#999",
      dark: "#B2BAC7",
      light: "#F6F7F9",
      lightGray: '#E9EBEF',
    },
    white: {
      main: "white",
    },
    blue: {
      main: "#405EFF",
    },
  },
});

    
const Providers = ({ children }) => {
      return (
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
      )
    }
    
    export default Providers
    