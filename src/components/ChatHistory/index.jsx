import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Images from '../../constants/images';
import chatHistoryStyles from '../../styles/chatHistory';

const ChatHistory = ({id, date, lasttext}) => {
    return (
        <Grid style={{ ...chatHistoryStyles.outLine }}>
            <Grid><img src={Images.HomRex} alt='ReX' style={{width: '80px'}}/></Grid>
            <Grid style={{ ...chatHistoryStyles.text }}>
                <Grid style={{ ...chatHistoryStyles.title }}>ReX - {date}</Grid>
                <Grid style={{ ...chatHistoryStyles.body }}>{lasttext}</Grid>
            </Grid>            
        </Grid>
    )
}

export default ChatHistory