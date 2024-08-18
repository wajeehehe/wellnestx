import { Box } from '@mui/joy';
import Sidebar from './Dashboard/components/SIdebar'
import Header from './Dashboard/components/Header';
import CssBaseline from '@mui/joy/CssBaseline';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import email from './Resources/send-mail.png';
import Alert from '@mui/joy/Alert';

export const Support = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {


        e.preventDefault();

        emailjs.sendForm('service_5j23b1f', 'template_23qtx9d', form.current, {
            publicKey: 'EHulVSDYFrqk_m4MY',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setUserName("");
                    setUserEmail("");
                    setUserMessage("");
                    setFormSubmitted(true);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );



    };

    return (
        <div>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100dvh', background: '#E7FBE6' }}>
                <Sidebar />
                <Header />
                <Box //main
                    component="main"
                    className="MainContent"
                    sx={{
                        boxSizing: 'border-box',
                        pt: { xs: 'calc(25px + var(--Header-height)) !important', md: 3 },
                        padding: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        columnGap: 0,
                        gap: { md: 5, xs: 3 },
                        overflow: 'auto',
                        flexWrap: 'no-wrap',

                    }}>

                    <Box
                        sx={{
                            height: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-evenly',

                        }} >
                        <Box className="leftSide"
                            sx={{
                                width: '40%',
                                border: 'none',
                                padding: '35px',
                                borderradius: '35px',
                                background: '#wE7FBE6',
                                aspectRatio: '1/1'
                            }}
                        >
                            <h2 style={{ textAlign: 'left', fontSize: '28px', color: '#2c554b', fontFamily: 'Montserrat' }}>GET IN TOUCH!</h2>
                            <form ref={form} onSubmit={sendEmail} className='contactform' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '18px' }}  >
                                <label>Name</label>
                                <input type="text" name="from_name" placeholder='Your name...' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                                <label>Email</label>
                                <input type="email" name="from_email" placeholder='Your email...' value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                                <label>Message</label>
                                <textarea name="message" placeholder='Your message...' value={userMessage} onChange={(e) => { setUserMessage(e.target.value) }} />
                                <input type="submit" value="Send" />
                            </form>
                            {formSubmitted ? <Alert sx={{ marginTop: '25px' }} variant="outlined" color="success">Form Submitted Succesfully</Alert> : ""}
                        </Box>
                        <Box className="RightSide">
                            <img src={email} alt='abc'></img>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div>
    );
};

export default Support;