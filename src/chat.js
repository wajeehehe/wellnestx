import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React, { useState, useRef, useContext } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Input, TextField, Typography } from '@mui/joy'
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Header from './Dashboard/components/Header';
import AuthContext from './AuthContext';
import './chat.css'
import DoctorList from './DoctorsList';
import { GoogleGenerativeAI } from "@google/generative-ai";


function Chat() {
    const genAI = new GoogleGenerativeAI('AIzaSyCNiF2GazkApUyMJgjWIEAQ1_QjjaPhqf8');
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const [messages, setMessages] = useState([]); // Array to store messages
    const [userInput, setUserInput] = useState(''); // State for user input
    const messageListRef = useRef(null)

    const [searchTerm, setSearchTerm] = useState('anxiety');


    const aiRun = async (prompt) => {
        const result = await model.generateContent("userPrompt:" + prompt + " / adminInstructions: act as a professional therapist. Do not recommend medicine, only home remedies");
        const response = await result.response;
        const text = response.text();
        return (text);
    }
    const sendMessage = async () => {
        let doctorsearch = false;
        if (userInput.trim() === '') {
            return; // Prevent sending empty messages
        }
        if (userInput.includes("doctor")) {
            doctorsearch = true
        }
        const newMessage = {
            sender: 'User',
            message: userInput,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setUserInput(''); // Clear user input after sending
        let aiResponseText = null;
        if (!doctorsearch) { aiResponseText = await aiRun(userInput.toString()); }
        else { aiResponseText = "Looking for doctors" }
        // Simulate AI response (hardcoded for now)
        const aiResponse = {
            sender: 'AI',
            message: aiResponseText ? aiResponseText : "Loading",
            timestamp: new Date().toLocaleTimeString(),
            showdoctor: doctorsearch
        };
        doctorsearch = false;

        console.log(messages)
        setTimeout(() => {
            setMessages((prevMessages) => [...prevMessages, aiResponse]);
            console.log(messages)
        }, 1); // Simulate a 1-second delay

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
            style={{ maxWidth: '70%' }}
        >
            <b>{message.sender}:</b> {message.message}
            <span className="timestamp">{message.timestamp}</span>
            <div>
                {(message.showdoctor) && message.sender === 'AI' ? <DoctorList keyword={searchTerm} /> : " "}
            </div>
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
                            onChange={(event) => {

                                setUserInput(event.target.value);
                            }}
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