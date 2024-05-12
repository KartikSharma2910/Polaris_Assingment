const dropDownIcon = {
  margin: "13px 14px 13px 0",
  position: "relative",
  height: {
    xs: "21px",
    sm: "24px",
  },
  width: {
    xs: "21px",
    sm: "24px",
  },
  color: "custom.label",
};

const styles = {
  wrapper: {
    width: "100%",
  },

  label: {
    height: {
      xs: "17px",
      sm: "20px",
    },
    marginBottom: {
      xs: "8px",
      sm: "12px",
    },
    color: "custom.label",
  },

  dropDownIconWrapper: {
    height: {
      xs: "35px",
      sm: "40px",
    },
    display: "flex",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "white",
    right: 0,
    top: "3px",
    cursor: "pointer",
  },

  dropDownIconUp: {
    ...dropDownIcon,
    transform: "rotate(90deg)",
    top: {
      xs: "3px",
      sm: "6px",
    },
  },

  dropDownIconDown: {
    ...dropDownIcon,
    transform: "rotate(-90deg)",
    bottom: {
      xs: "6px",
      sm: "4px",
    },
  },

  select: {
    padding: 0,
    "& .MuiSelect-select": {
      padding: {
        xs: "15px 10px 13px",
        sm: "17px 20px 16px",
      },
      marginRight: "10px",
      boxSizing: "border-box",
    },

    "& .MuiBox-root": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },

  menuItem: {
    height: {
      xs: "42px",
      sm: "56px",
    },
    color: "black",
    p: "0 2px",
    borderBottom: "2px solid custom.connector",
  },

  text: {
    color: "black",
    height: "17px",
    fontSize: {
      xs: "12px",
      sm: "14px",
    },
    margin: "auto 0",
  },

  paper: {
    padding: {
      xs: "0 12.8px",
      sm: "0 20px",
    },
  },

  menu: {
    padding: "0",
  },

  helperText: { ml: 0 },
};

export default styles;
