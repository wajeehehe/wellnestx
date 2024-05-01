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




const Chat = (props) => {
    const { user } = useContext(AuthContext)


    const [messages, setMessages] = useState([{
        id: 1, name: 'Wajeeh', uid: user.email, text: "Hello"
    }, {
        id: 2, name: 'WellNestX', uid: 'ai', text: "Hello, How are you?"
    },
    {
        id: 3, name: 'Wajeeh', uid: user.email, text: "I'm good!!"
    }]);


    const [prompt, setPrompt] = useState("");
    const scroll = useRef()
    const onSend = () => {
        if (prompt) {
            const msgarr = messages;
            const thisMessage = {
                id: 1, name: 'Wajeeh', uid: user.email, text: prompt
            }
            msgarr.push(thisMessage);
            setMessages(msgarr);
            setPrompt('');
            scroll.current.scrollIntoView();
            const x = setTimeout(() => {
                console.log('Calling')
                const msgarr = messages;
                const thisMessage = {
                    id: 1, name: 'AI', uid: 'wellnestx', text: 'OK'
                }
                msgarr.push(thisMessage);
                setMessages(msgarr);
            }, 10);
        }
    }

    return (
        <div >
            <CssBaseline />
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
                    <div className="chat-box" style={{ width: '100%', position: 'sticky', top: '25px' }}>
                        <Stack className="messages-wrapper" sx={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '700px', margin: 'auto' }}>
                            {messages?.map((message) => (
                                <Message key={message.id} message={message} />
                            ))}
                        </Stack>

                    </div>
                    <span style={{ marginTop: '150px' }} ref={scroll}></span>
                    <Box sx={{ padding: '25px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'sticky', bottom: '0', left: '0', height: '80px', width: '100%', background: '#d5e5e5' }}>
                        <Box component="div" sx={{
                            background: '#d5e5e5', display: 'flex', flexDirection: 'row', gap: 2,
                            position: '', width: '100%', bottom: '25px', maxWidth: '700px'
                        }}>
                            <Input placeholder="Type in here…" size="lg" type=" text" name="" fullWidth value={prompt} onChange={(ev) => setPrompt(ev.target.value)} />
                            <Button color="success" onClick={onSend} scroll={scroll}> Send </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </div >


    );

}

export default Chat