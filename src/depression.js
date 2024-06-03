import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React, { useContext, useEffect, useState } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography } from '@mui/joy'
import Header from './Dashboard/components/Header';
import AuthContext from './AuthContext';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';

const Dsite = () => {
    return (
        <div>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100dvh', background: '#f5f5f5' }}>
                <Sidebar />
                <Header />

                <Box //main
                    component="main"
                    className="TopicsContent"
                    sx={{
                        boxSizing: 'border-box',
                        backdropFilter: 'blur(22px)',
                        pt: { xs: 'calc(25px + var(--Header-height)) !important', md: 3 },
                        padding: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        columnGap: 0,
                        gap: { md: 1, xs: 3 },
                        overflow: 'auto',
                        justifyContent: { md: 'flex-start', xs: 'flex-start' },
                        alignItems: { md: 'flex-start', xs: 'center' },
                        alignContent: 'flex-start',
                        flexWrap: 'no-wrap',

                    }}>
                    <Box //Hero
                        sx={{//the hero section style (:'( ))
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                            background: '#2c554b',
                            color: '#f0f4f4',
                            padding: { lg: '25px', md: '10px 25px' },
                            minHeight: { lg: '15dvh', md: '10dvh' },
                            borderRadius: '15px',
                            position: 'relative',
                            top: 0,
                            left: 0,
                            width: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                            textAlign: 'left',
                            zIndex: 1,
                        }}>

                        <Typography variant="h1" sx={{ color: '#f0f1f1', fontSize: '36px', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Depression</Typography>
                    </Box>
                    <Box sx={{
                        my: 5,
                        padding: '0px 30px 0px 30px',
                        textAlign: 'left',
                        "& p": {
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                        },
                        "& ul": {
                            textAlign: 'justify',
                            fontSize: '1.2rem',
                        }
                    }}>
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >What is depression?</Typography>
                        <br />
                        <p>Depression is a mental health problem that involves having a low mood or losing interest and enjoyment in things. It can also cause a range of other changes to how you feel or behave. </p>
                        <p>The symptoms you experience may vary. How intense they are, how long they last, and how much they affect your daily life can also vary. If you experience milder depression, you might have low mood but still be able to carry on with your daily life. But things may feel harder and less worthwhile.</p>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" You are not worthless, you are not a failure, and you are not a loser. That voice saying you are is just your depression trying to trick you. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Symptoms of depression</Typography>

                        <p>These are some common signs of depression that you may experience:</p>
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.2rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >How you might feel</Typography>

                        <ul>
                            <li>Down, upset or tearful</li>
                            <li>Restless, agitated or irritable</li>
                            <li>Guilty, worthless and down on yourself</li>
                            <li>Empty and numb</li>
                            <li>Finding no pleasure in life or things you usually enjoy</li>
                            <li>Feeling tired all the time</li>
                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.2rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >How you might act</Typography>

                        <ul>
                            <li>Avoiding social events and activities you usually enjoy</li>
                            <li>Self-harming or suicidal behaviour</li>
                            <li>Difficulty speaking, thinking clearly or making decisions</li>
                            <li>Difficulty remembering or concentrating on things</li>
                            <li>Difficulty sleeping, or sleeping too much</li>
                            <li>No appetite and losing weight, or eating more than usual and gaining weight</li>
                            <li>Physical aches and pains with no obvious physical cause</li>
                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" When your depression says, “Give up”, hope whispers, “Try one more time”. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Coping with depression</Typography>
                        <p>Here are some things you can try that might help with how you're feeling.</p>
                        <p>Don't worry if some ideas don't work for you. Just try the ones that do.</p>
                        <ul>
                            <li>Talk to someone you trust.</li>
                            <li>It may feel difficult to look after your hygiene when you’re experiencing depression. But small things could make a big difference to how you feel. For example, this could be taking a shower, brushing your teeth and getting dressed.</li>
                            <li>Take a walk, going at your own pace. You might choose to go for a longer walk, but even a few minutes of walking can help you feel relaxed.</li>
                            <li>Learning to breathe more deeply can help you feel a lot calmer for a more clear demonstration <a href='https://www.youtube.com/watch?v=wfDTp2GogaQ'>try following this</a></li>
                            <li>Trying something new can help boost your mood. And it can help to break unhelpful ways of thinking or behaving.</li>
                            <li>Try mindfulness. Mindfulness is a way of giving your full attention to the present moment. Some studies show that practising mindfulness can help to manage depression.</li>

                        </ul>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default Dsite