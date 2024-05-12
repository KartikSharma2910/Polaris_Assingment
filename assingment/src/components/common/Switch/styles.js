const styles = {
  wrapper: {
    textTransform: "capitalize",
    "& .MuiFormControlLabel-label": {
      fontSize: "14px",
      color: "custom.label",
    },
    flexDirection: "row-reverse",
    justifyContent: "flex-end",
    gap: "20px",
    m: 0,
  },

  switch: {
    width: 51,
    height: 31,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 0.3,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(19.5px)",
        color: "white",
        "& + .MuiSwitch-track": {
          backgroundColor: "primary.main",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: "custom.disabled",
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.7,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 27,
      height: 27,
    },
    "& .MuiSwitch-track": {
      borderRadius: 31 / 2,
      backgroundColor: "custom.disabled",
      opacity: 1,
      transition: "background-color 0.5s ease",
    },
  },
};

export default styles;
