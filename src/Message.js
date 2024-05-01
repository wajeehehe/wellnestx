import React, { useContext, useState } from "react";
// import { auth } from "../firebase";
import { Avatar, Box, Card, Typography } from '@mui/joy'
import { Alert } from "@mui/joy";
import AuthContext from "./AuthContext";
// import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
    const { user } = useContext(AuthContext);

    const getInitials = function (name) {
        var parts = name.split(' ')
        var initials = ''
        for (var i = 0; i < parts.length; i++) {
            if (parts[i].length > 0 && parts[i] !== '') {
                initials += parts[i][0]
            }
        }
        return initials
    }

    console.log(message.uid, user.email)
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: (message.uid === user.email) ? "flex-end" : "flex-start",
                alignItems: 'center',
                flexDirection: 'row',
                gap: 20
            }}>
            <Avatar sx={{ order: (message.uid === user.email) ? '1' : '0' }}>{(message.uid === user.email) ? getInitials("Laiba Naveed") : "X"}</Avatar>
            <Box sx={{
                minWidth: '50px', maxWidth: '300px', borderRadius: '35px',
                boxShadow: '0 0 35px 0 #0001',
                padding: ' 15px 25px',
                background: (message.uid === user.email) ? "#2E7D32" : "crimson",
                color: '#fff',
                transition: '0.3s'
            }} >
                <p style={{ margin: '0', fontSize: '0.9em', textAlign: 'left', textWrap: 'wrap', wordBreak: 'break-all' }}>{message.text}</p>
            </Box>
        </div >
    );
};
export default Message;