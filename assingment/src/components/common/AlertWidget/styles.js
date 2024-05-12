const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  heading: {
    fontSize: "18px",
    fontWeight: 600,
  },

  listWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 2,
  },

  list: {
    width: "28%",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #D9D9D9",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.4s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
};

export default styles;
