import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaletteOptions, ThemeOptions, createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: { min: string; max: string };
    sm: { min: string; max: string };
    md: { min: string; max: string };
    lg: string;
    xl?: string;
  }

  interface Palette {
    custom?: any;
    shadows?: any;
  }

  interface PaletteOptions {
    custom?: any;
    shadows?: any;
  }
}

const palette = {
  mode: "dark",
  background: "#cecece",
  paper: "#010101",
} as PaletteOptions;

const baseOptions: ThemeOptions = {
  direction: "ltr",
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: "75%",
          width: "75%",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 10,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%",
          scrollBehavior: "smooth",
          backgroundColor: palette.background,
        },
        body: {
          height: "100%",
        },
        "#nprogress .bar": {
          zIndex: "2000 !important",
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: "h6",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: "hidden",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: "auto",
          marginRight: "16px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&$error": {
            color: palette.text?.primary,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontSize: 16,
          color: palette.text?.secondary,
          borderRadius: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 16,
          color: palette.text?.secondary,
          borderRadius: 10,
        },
      },
    },
  },
  typography: {
    fontSize: 14,
    fontWeightRegular: 500,
    fontFamily: "sans-serif",
    h1: {
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "40px",
    },
    h2: {
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "36px",
    },
    h3: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "32px",
    },
    h4: {
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "28px",
    },
    h5: {
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "24px",
    },
    h6: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "20px",
    },
    overline: {
      fontWeight: 600,
    },
    body1: {
      fontFamily: "sans-serif",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    body2: {
      fontFamily: "sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    subtitle1: {
      fontFamily: "sans-serif",
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    subtitle2: {
      fontFamily: "sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    caption: {
      fontFamily: "sans-serif",
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
    button: {
      fontFamily: "sans-serif",
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
  },

  palette: {
    ...palette,
  },
};

export const MuiTheme = createTheme({
  ...baseOptions,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MuiTheme}>
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
