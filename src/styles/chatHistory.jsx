const chatHistoryStyles = {
  outLine: {
    sx:{
      display: "flex",
      justifyContent: 'flex-start',
      flexDirection: 'row',
      height: "127px",
      padding: "24px",
      alignItems: "start",
      gap: "20px",
      borderRadius: "32px",
      background: "var(--Others-White, #FFF)",
      boxShadow: "0px 4px 60px 0px rgba(4, 6, 15, 0.05)",
      zIndex: 10,
      marginBottom: '24px',
    }    
  },
  title: {
    sx: {
      color: "var(--Greyscale-900, #212121)",
      fontFamily: "Satoshi",
      fontSize: "18px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "120%",
    }
  },
  text: {
    sx:{
      gap: "8px",
      display: "flex",
      flexDirection: "column",
      justifyContent: 'flex-start',
      alignItems: 'start',
      width: "100%",
      alignSelf: 'stretch',
    }
  },
  body: {
    sx: {
      color: "var(--Greyscale-700, #616161)",
      fontFamily: "Satoshi",
      textAlign: 'left',
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "140%",
      letterSpacing: "0.2px",
    }
  },
  deleteButton: {
    sx: {
      display: "flex",
      height: "127px",
      padding: "24px",
      alignItems: "center",
      justifyContent: 'flex-end',
      justifySelf: 'flex-end',
      right: '10px',
      width: '30%', 
      borderRadius: '0 34px 34px 0',
      background: 'var(--alerts-status-error, #F75555)',
      position: 'absolute', 
      zIndex: 0,
    }    
  }, 
};

export default chatHistoryStyles;
