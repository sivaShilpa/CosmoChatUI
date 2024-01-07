const AllStyles = {
  navigationBar: {
    display: "flex",
    height: "48px",
    padding: "12px 5px",
    alignItems: "center",
    gap: "12px",
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "rgba(255, 255, 255, 1)",
    position: "fixed",
    width: "95%",
  },
  navigationRight: {
    display: "flex",
    justifyContent: "space-between",
    width: "20%",
  },
  navigationLeft: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
  },
  navigationName: {
    width: "85%",
    color: "var(--Greyscale-900, #212121)",
    fontFamily: "Urbanist",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    textAlign: "left",
  },
  homeBody: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "50px",
  },
  homeRex: {
    zIndex: 100,
    padding: "100px 0",
    // position: 'absolute',
  },
  greetings: {
    display: "flex",
    color: "var(--Greyscale-900, #212121)",
    fontFamily: "Urbanist",
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    margin: "50px 0",
  },
  message: {
    color: "var(--Greyscale-900, #212121)",
    textAlign: "center",
    fontFamily: "Urbanist",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 1000,
    lineHeight: "120%",
    margin: "0 0 15px 0",
  },
  message2: {
    color: "var(--Greyscale-900, #212121)",
    textAlign: "center",
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%",
    letterSpacing: "0.2px",
    margin: "0 0 32px 0",
  },
  startChatButton: {
    display: "flex",
    padding: "20px 16px",
    borderRadius: "100px",
    background: "var(--Primary-500, #6949FF)",
    boxShadow: "4px 8px 24px 0px rgba(0, 205, 189, 0.25)",
    height: "58px",
    ":hover": {
      textDecoration: "none",
    },
    width: "340px",
  },
  startChatButtonText: {
    width: "100%",
    color: "var(--Others-White, #FFF)",
    textShadow: "4px 8px 24px rgba(0, 205, 189, 0.25)",
    fontFamily: "Urbanist",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "140%",
    letterSpacing: "0.2px",
    textTransform: "capitalize",
  },
  endedChats: {
    color: "var(--Greyscale-900, #212121)",
    fontFamily: "Satoshi",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "120%",
    textAlign: "left",
  },
  seeAllLink: {
    color: "var(--Primary-500, #6949FF)",
    textAlign: "right",
    fontFamily: "Satoshi",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "140%",
    letterSpacing: "0.2px",
    textDecoration: "none",
  },
  endedChatsTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "24px 0",
  },
  endedChatsBody: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  startAnotherChatButtonGrid: {
    display: "flex",
    padding: "24px 24px 36px 24px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px",
    borderRadius: "24px 24px 0px 0px",
    border: "1px solid var(--Greyscale-100, #F5F5F5)",
    background: "var(--Others-White, #FFF)",
  },
};

export default AllStyles;
