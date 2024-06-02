import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React, { useState, useRef, useContext, useEffect } from 'react'
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
import Sentiment from 'sentiment';

function Chat() {
    const genAI = new GoogleGenerativeAI('AIzaSyCNiF2GazkApUyMJgjWIEAQ1_QjjaPhqf8');
    const model = genAI.getGenerativeModel({ model: "gemini-1.0-pro" });
    const [messages, setMessages] = useState([]); // Array to store messages
    const [userInput, setUserInput] = useState(''); // State for user input
    const messageListRef = useRef(null)
    const [doctorSearchConfirmationActive, setDoctorSearchConfirmationActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('anxiety');
    const adminInstructions = {
        conversation: "act as a professional therapist and respond to the user. ur response should only contain the response text. Do not recommend medicine, only home remedies. Only talk about mental health, nothing else. Your name is WellnestX, but only tell when user asks",
        diagnosis: "based on the conversation with the user provide a single word diagnosis from this list [anxiety, depression, adhd]"
    }
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();

    const analyzeText = (prompt) => {
        var result = sentiment.analyze(prompt.toString());
        console.dir(result);
        return (result)
    }



    const aiRun = async (prompt) => {
        try {
            const result = await model.generateContent("userPrompt:" + prompt + " / adminInstructions: " + adminInstructions.conversation);
            const response = await result.response;
            const text = response.text();
            return (text);
        }
        catch (error) {
            return ("The AI is currently unavailable")
        }
    }
    const aiDiagnose = async (prompt) => {
        try {
            const result = await model.generateContent("user prompt: " + prompt + "/ admin instruction: " + adminInstructions.diagnosis);
            const response = await result.response;
            const text = response.text();
            console.log(text, text.trim)
            return (text.trim());
        }
        catch (error) {
            return ("The AI is currently unavailable")
        }


    }

    const doctorSearchConfirmation = () => {
        setDoctorSearchConfirmationActive(true)
        const aiResponse = {
            sender: 'AI',
            message: "Do you want to talk to a doctor?",
            timestamp: new Date().toLocaleTimeString(),
            showdoctor: 'pending'
        };
        setMessages((prevMessages) => [...prevMessages, aiResponse]);

    }

    const searchDoctors = (confirmation) => {

        setDoctorSearchConfirmationActive(false)
        if (confirmation) {
            const aiResponseText = "Looking for doctors"
            const aiResponse = {
                sender: 'AI',
                message: aiResponseText ? aiResponseText : "Loading",
                timestamp: new Date().toLocaleTimeString(),
                showdoctor: 'true'
            };


            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, aiResponse]);
                console.log(messages)
            }, 1); // Simulate a 1-second delay
        }
        else {
            const aiResponse = {
                sender: 'AI',
                message: "Okay, I understand you do not want to talk to a doctor, but incase you, please let me know :)",
                timestamp: new Date().toLocaleTimeString(),
                showdoctor: 'false'
            };


            setTimeout(() => {
                setMessages((prevMessages) => [...prevMessages, aiResponse]);
                console.log(messages)
            }, 1); // Simulate a 1-second delay
        }

    }

    const sendMessage = async () => {
        aiDiagnose(userInput)

        let doctorsearch = false;
        if (userInput.trim() === '') {
            return;
        }
        const newMessage = {
            sender: 'User',
            message: userInput,
            timestamp: new Date().toLocaleTimeString(),
        };

        setMessages((prevMessages) => [...prevMessages, newMessage]);
        setUserInput(''); // Clear user input after sending

        const textAnalysis = analyzeText(userInput);

        if ((textAnalysis.positive.includes('want') && !textAnalysis.negative.includes('want') && textAnalysis.tokens.includes('doctor'))) {
            doctorSearchConfirmation();
            return
        }

        let aiResponseText = null;
        if (!doctorsearch) { aiResponseText = await aiRun(userInput.toString()); }

        const aiResponse = {
            sender: 'AI',
            message: aiResponseText ? aiResponseText : "Loading",
            timestamp: new Date().toLocaleTimeString(),
            showdoctor: 'false'
        };

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
            key={Math.random()}
            className={`chat-bubble ${message.sender === 'User' ? 'user' : 'ai'}`}
            style={{ maxWidth: '70%' }}
        >
            <b>{message.sender}:</b> {message.message}
            <span className="timestamp">{message.timestamp}</span>
            <div>
                {(message.showdoctor === 'true') && message.sender === 'AI' ? <DoctorList keyword={searchTerm} /> : " "}
                {(doctorSearchConfirmationActive) && (message.showdoctor === 'pending') && message.sender === 'AI' ? <><Button onClick={() => { message.showdoctor = 'false'; searchDoctors(true) }}>Yes</Button> <Button onClick={() => { message.showdoctor = 'false'; searchDoctors(false) }}>No</Button></> : " "}
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