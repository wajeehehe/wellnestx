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

const Site = () => {
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

                        <Typography variant="h1" sx={{ color: '#f0f1f1', fontSize: '36px', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Trauma</Typography>
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
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >What is trauma?</Typography>
                        <br />
                        <p>Trauma is when we experience very stressful, frightening or distressing events that are difficult to cope with or out of our control. It could be one incident, or an ongoing event that happens over a long period of time. </p>
                        <p>Most of us will experience an event in our lives that could be considered traumatic. But we won't all be affected the same way. Trauma can happen at any age. And it can affect us at any time, including a long time after the event has happened.</p>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" You are not your trauma. Your dysfunctions are not a measurement of your true ability. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Effects of trauma?</Typography>
                        <p>When we feel stressed or threatened, our bodies release hormones called cortisol and adrenaline. This is the body's way of preparing to respond to danger, and we have no control over it.</p>
                        <p>This can have a range of effects, which are sometimes called:</p>
                        <ul>
                            <li>Freeze – feeling paralysed or unable to move</li>
                            <li>Flop – doing what you're told without being able to protest</li>
                            <li>Fight – fighting, struggling or protesting</li>
                            <li>Fawn – trying to please someone who harms you</li>
                        </ul>

                        <p>If we experience trauma, our body's reactions can continue long after the trauma is over. For example, when we're in a situation that reminds us of the trauma. This might affect how we think, feel and behave, especially if recovering from the trauma has been difficult.</p>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >How trauma makes us feel?</Typography>
                        <p>Some of us who go through trauma may have these feelings, during or afterwards:</p>
                        <ul>
                            <li>Anger</li>
                            <li>Numbness or difficulty feeling any strong emotions</li>
                            <li>Scared or panicked</li>
                            <li>Irritable</li>
                            <li>Restless</li>
                            <li>Shock or horror</li>
                            <li>Shame</li>
                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" Feeling bad doesn't make me a bad person. All my emotions are valid. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Coping with trauma</Typography>
                        <p>Trauma can cause strong feelings and difficult experiences. It can take time and support to be able to cope. But there are things you can try that might help with how you're feeling.</p>
                        <p>Don't worry if some ideas don't work for you. Just try the ones that do.</p>
                        <ul>
                            <li>Read a book or a magazine, even if it's only for a few minutes.</li>
                            <li>Run yourself a bath, watch a film, play with a pet or try out a new recipe.</li>
                            <li>Take a walk, going at your own pace. You might choose to go for a longer walk, but even a few minutes of walking can help you feel relaxed.</li>
                            <li>Learning to breathe more deeply can help you feel a lot calmer for a more clear demonstration <a href='https://www.youtube.com/watch?v=wfDTp2GogaQ'>try following this</a></li>
                            <li>Try painting, drawing, making crafts, playing a musical instrument, dancing, baking or sewing.
                            </li>
                            <li>Listen to your favourite songs. You could dance or sing along, or just close your eyes and enjoy.</li>

                        </ul>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default Site