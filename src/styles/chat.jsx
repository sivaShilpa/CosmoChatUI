const ChatStyles = {
    textDisplayBackground: {
        height: 'auto',
    }, 
    reXMessage: {
        display: 'flex',
        padding: '16px 24px',
        width: '300px',
        margin: '0 0 16px 0',
        textAlign: 'left',
        alignItems: 'flex-start',
        gap: '10px',
        borderRadius: '8px 20px 20px 20px',
        background: 'var(--Greyscale-100, #F5F5F5)',
    }, 
    reXMessageText: {
        color: 'var(--Greyscale-900, #212121)',
        fontFamily: 'Satoshi',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '140%',
        letterSpacing: '0.2px',
    },
    toSendArea:{
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
    },
    textArea: {
        // display: 'flex',
        height: '56px',
        // width: '50%',
        padding: '0px 20px',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: '12px',
        flex: '1 0 0',
        borderRadius: '12px',
        background: 'var(--Greyscale-50, #FAFAFA)',
    },
    sendButton: {
        // display: 'flex',
        padding: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        // gap: '10px',
        borderRadius: '100px',
        background: 'var(--Gradients-Gradident-Purple, linear-gradient(286deg, #6949FF 0%, #876DFF 100%))',
    },
    sendButtonImage: {
        display: 'flex',
        width: '24px',
        height: '24px',
        padding: '2px',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default ChatStyles;