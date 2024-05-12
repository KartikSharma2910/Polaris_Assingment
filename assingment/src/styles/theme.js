/* eslint-disable @typescript-eslint/no-explicit-any */
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: "#6043b6",
    },
    success: {
      main: "#77e457",
    },
    error: {
      main: "#EC0909",
    },
    custom: {
      background: "#fbfbfb",
      label: "#54575a",
      disabledLabel: "#d8d8d8",
      heading: "#231f20",
      connector: "#e8e9eb",
      disabled: "#efefef",
      darkSilver: "#707070",
      scrollThumb: "#bbbec2",
      border: "#e6e6e6",
    },
  },

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(", "),
  },
});

// styles overrides
theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "& *": {
            "&::-webkit-scrollbar ": {
              width: "8px",
              height: "4px",
            },

            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.custom.connector,
              borderRadius: "4px",
            },

            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.custom.scrollThumb,
              borderRadius: "4px",
            },

            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: theme.palette.custom.label,
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          "&.Mui-disabled": {
            cursor: "not-allowed",
            pointerEvents: "all",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-root.clip": {
            maxWidth: "90%",
          },
          "&.MuiInputLabel-root": {
            maxWidth: "100%",
          },
          fontSize: "14px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "10px",
          },
          color: theme.palette.custom.label,
          "&.Mui-focused": {
            color: theme.palette.custom.label,
          },
          transform: "none",
        },
      },
    },

    MuiInputBase: {
      styleOverrides: {
        root: {
          "label + &": {
            marginTop: "26px",
            [theme.breakpoints.down("sm")]: {
              marginTop: "18px",
            },
          },
          height: "50px",
          boxSizing: "border-box",
          borderRadius: 5,
          position: "relative",
          borderWidth: 2,
          borderStyle: "solid",
          borderColor: theme.palette.custom.disabled,
          fontSize: "14px",
          padding: "10px 12px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "12px",
            height: "43px",
          },
          "&.Mui-error": {
            borderColor: theme.palette.error.main,
          },
          "&.Mui-focused": {
            borderColor: theme.palette.primary.main,
          },
          "& input.Mui-disabled": {
            cursor: "not-allowed",
          },
          "& input::-webkit-outer-spin-button": {
            display: "none",
            MozAppearance: "none",
          },
          "& input::-webkit-inner-spin-button": {
            display: "none",
            MozAppearance: "none",
          },
        },
      },
    },

    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: "10px",
          fontStyle: "italic",
          color: theme.palette.error.main,
          fontWeight: "bold",
          position: "absolute",
          bottom: "-17px",
          height: "15px",
          [theme.breakpoints.down("sm")]: {
            fontSize: "8px",
            bottom: "-14px",
          },
        },
      },
    },
  },
});

const customTypography = {
  eyeView: {
    "& .viewWrapper": {
      gap: "0px",
      "& .label": {
        width: "100%",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      },
      "& .value": {
        overflowX: "auto",
        textOverflow: "inherit",
      },
    },
    "& .input": {
      flexBasis: "46.7%",
      gap: "1%",
    },
  },
  inputBaseLoading: {
    position: "absolute",
    bottom: "5px",
    right: "5px",
  },
};

theme = {
  ...theme,
  typography: {
    ...theme.typography,
    ...customTypography,
  },
};

theme = responsiveFontSizes(theme);

export default theme;
