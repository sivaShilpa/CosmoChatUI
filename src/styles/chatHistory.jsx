const chatHistoryStyles = {
  outLine: {
    display: "flex",
    height: "127px",
    padding: "24px",
    alignItems: "center",
    gap: "20px",
    alignSelf: "stretch",
    borderRadius: "32px",
    background: "var(--Others-White, #FFF)",
    boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
  },
  title: {
    color: "var(--Greyscale-900, #212121)",
    fontFamily: "Satoshi",
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
  },
  text: {
    gap: "8px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  body: {
    color: "var(--Greyscale-700, #616161)",
    fontFamily: "Satoshi",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
    letterSpacing: "0.2px",
    alignSelf: "stretch",
  },
};

export default chatHistoryStyles;
