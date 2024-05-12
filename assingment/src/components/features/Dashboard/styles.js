const styles = {
  wrapper: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  heading: {
    fontSize: "28px",
    fontWeight: 600,
    textAlign: "center",
  },

  formWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #D9D9D9",
  },

  input: {
    width: "31%",
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #D9D9D9",
    gap: 2,
  },

  chooseMeter: {
    fontSize: "14px",
  },

  buttonWrapper: {
    display: "flex",
    gap: 2,
  },

  button: {
    widht: "50px",
    borderRadius: "8px",
    border: "1px solid",
    transition: "all 0.4s",
    borderColor: "primary.main",
  },

  graphWrapper: {
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #D9D9D9",
  },

  graph: {
    width: "67%",
  },

  toggle: {
    width: "max-content",
  },

  alert: {
    height: "450px",
    width: "27%",
    overflow: "auto",
  },
};

export default styles;
