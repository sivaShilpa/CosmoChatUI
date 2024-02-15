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
      boxShadow: 0,
      "&:hover":{
        background: 'var(--alerts-status-error, #F75555)',
        boxShadow: 0,
      }
    }    
  }, 
  popUp: {
    sx:{
      width: '400px',
      height: '800px',
      padding: '48px, 32px, 40px, 32px',
      borderRadius: '44px',
      gap: '32px', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center',
      textAlign: 'center',
    }
  },
  popUpTextTitle:{
    sx:{
      fontFamily: "Urbanist",
      fontSize: "24px",
      fontWeight: 700,
      lineHeight: '29px',
      letterSpacing: '0em',
      textAlign: 'center',
      color: "#212121",
    }
  },
  popUpButtons: {
    sx: {
      display: "flex",
      flexDirection: 'column',
      gap: "12px",
    }
  },
  buttonDelete: {
    sx:{
      width: "276px",
      height: "58px",
      padding: "18px, 16px, 18px, 16px",
      borderRadius: "100px",
      gap: "10px",    
      background: "#6949FF",
      textTransform: "Capitalize",
      color:"#FFFFFF",
      font: "Urbanist",
      weight: 700,
      size: "16px",
      "&:hover": {
        background: "#6949FF",
      }
    }
  },
  buttonCancel:{
    sx:{
      width: "276px",
      height: "58px",
      padding: "18px, 16px, 18px, 16px",
      borderRadius: "100px",
      gap: "10px",    
      background: "#F0EDFF",
      textTransform: "Capitalize",
      color:"#6949FF",
      font: "Urbanist",
      weight: 700,
      size: "16px",
      "&:hover": {
        background: "#F0EDFF",
      }
    }
  }
};

export default chatHistoryStyles;
