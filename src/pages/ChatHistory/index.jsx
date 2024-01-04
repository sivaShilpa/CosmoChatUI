import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

const ChatHistory = ({id, date, lasttext}) => {
    return (
        <Grid>
            <Grid>ReX - {date}</Grid>
            <Grid>{lasttext}</Grid>
        </Grid>
    )
}

export default ChatHistory