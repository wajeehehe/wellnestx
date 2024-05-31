import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React, { useState, useRef, useContext } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Input, TextField, Typography } from '@mui/joy'
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Message from './Message';
import Header from './Dashboard/components/Header';
import AuthContext from './AuthContext';
import './chat.css'

function Chat() {
    const [messages, setMessages] = useState([]); // Array to store messages
    const [userInput, setUserInput] = useState(''); // State for user input
    const messageListRef = useRef(null)
    const sendMessage = () => {
        if (userInput.trim() === '') {
            return; // Prevent sending empty messages
        }

        const newMessage = {
            sender: 'User',
            message: userInput,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setUserInput(''); // Clear user input after sending

        // Simulate AI response (hardcoded for now)
        const aiResponse = {
            sender: 'AI',
            message: 'This is a hardcoded AI response.',
            timestamp: new Date().toLocaleTimeString(),
        };
        console.log(messages)
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, aiResponse]);
            console.log(messages)
        }, 2000); // Simulate a 1-second delay

        console.log(messages)
        if (messageListRef.current) {
            messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
        }


    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    const messageList = messages.map((message) => (
        <div
            key={message.timestamp}
            className={`chat-bubble ${message.sender === 'User' ? 'user' : 'ai'}`}
        >
            <b>{message.sender}:</b> {message.message}
            <span className="timestamp">{message.timestamp}</span>
        </div>
    ));

    return (

        <Box sx={{ display: 'flex', minHeight: '100dvh', background: '#D5E5E5' }}>
            <Sidebar />
            <Header />
            <Box
                component="main"
                className="MainContent"
                sx={{
                    pt: { xs: 'calc(15px + var(--Header-height)) !important', md: 3 },
                    pb: '0 !important',
                    padding: { xs: 2, sm: 2, md: 3 },

                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 3,
                    overflow: 'scroll',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    alignContent: 'flex-start',
                    flexWrap: 'nowrap'
                }}
            >


                <div className="chat-container" style={{ maxWidth: '800px', margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                    <div style={{
                        overflowY: 'scroll',
                        margin: 'auto',
                        width: '100%'

                    }}><ul style={{ display: 'flex', flexDirection: 'column' }}>{messageList}</ul></div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={userInput}
                            onChange={(event) => setUserInput(event.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                        />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </Box>
        </Box>

    );
}

export default Chat