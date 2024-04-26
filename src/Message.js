import React, { useState } from "react";
// import { auth } from "../firebase";
import { Box, Card, Typography } from '@mui/joy'
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
                justifyContent: (message.uid === user.uid) ? "flex-end" : "flex-start"
            }}>

            <Box sx={{
                minWidth: '50px', maxWidth: '300px', borderRadius: '100px',
                boxShadow: '0 0 35px 0 #0001',
                padding: ' 2px 25px',
                background: (message.uid === user.uid) ? "#2E7D32" : "primary",
                color: '#fff'
            }} >
                <p className="user-message">{message.text}</p>
            </Box>
        </div >
    );
};
export default Message;