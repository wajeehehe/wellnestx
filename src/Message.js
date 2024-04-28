import React, { useState } from "react";
// import { auth } from "../firebase";
import { Avatar, Box, Card, Typography } from '@mui/joy'
import { Alert } from "@mui/joy";
// import { useAuthState } from "react-firebase-hooks/auth";
const Message = ({ message }) => {
    // const [user] = useAuthState(auth);
    const [user] = useState({ uid: "wajeeh" })



    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: (message.uid === user.uid) ? "flex-end" : "flex-start",
                alignItems: 'center',
                gap: 20
            }}>
            <Avatar sx={{ order: (message.uid === user.uid) ? '1' : '0' }}></Avatar>
            <Box sx={{
                minWidth: '50px', maxWidth: '300px', borderRadius: '35px',
                boxShadow: '0 0 35px 0 #0001',
                padding: ' 15px 25px',
                background: (message.uid === user.uid) ? "#2E7D32" : "crimson",
                color: '#fff',
                transition: '0.3s'
            }} >
                <p style={{ margin: '0', fontSize: '0.9em', textAlign: 'left', textWrap: 'wrap', wordBreak: 'break-all' }}>{message.text}</p>
            </Box>
        </div >
    );
};
export default Message;