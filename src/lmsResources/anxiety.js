
import Sidebar from '../Dashboard/components/SIdebar'
import React from 'react'
import { Box, Typography } from '@mui/joy'
import Header from '../Dashboard/components/Header';
import CssBaseline from '@mui/joy/CssBaseline';
const Asite = () => {
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

                        <Typography variant="h1" sx={{ color: '#f0f1f1', fontSize: '36px', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Anxiety</Typography>
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
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >What is anxiety?</Typography>
                        <br />
                        <p>Anxiety is what we feel when we are worried, tense or afraid – particularly about things that are about to happen, or which we think could happen in the future. </p>
                        <p>Anxiety is a natural human response when we feel that we are under threat. It can be experienced through our thoughts, feelings and physical sensations.Most people feel anxious at times. It's particularly common to experience some anxiety while coping with stressful events or changes, especially if they could have a big impact on your life.</p>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" You don’t have to control your thoughts. You just have to stop letting them control you. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Effects of anxiety on your body</Typography>
                        <p>These can include:</p>
                        <ul>
                            <li>a churning feeling in your stomach</li>
                            <li>feeling light-headed or dizzy</li>
                            <li>pins and needles</li>
                            <li>feeling restless or unable to sit still</li>
                            headaches, backache or other aches and pains
                            <li>faster breathing</li>
                            <li>a fast, thumping or irregular heartbeat</li>
                            <li>sweating or hot flushes</li>
                            <li>sleep problems</li>
                            <li>grinding your teeth, especially at nigh</li>
                            <li>nausea (feeling sick)</li>
                            <li>needing the toilet more or less often</li>
                            <li>having panic attacks.</li>
                        </ul>

                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Effects of anxiety on your body</Typography>
                        <p>Some of us who go through anxiety may have these feelings, during or afterwards:</p>
                        <ul>
                            <li>having a sense of dread, or fearing the worst</li>
                            <li>feeling like the world is speeding up or slowing down</li>
                            <li>feeling like other people can see you're anxious and are looking at you</li>
                            <li>feeling like you can't stop worrying, or that bad things will happen if you stop worrying</li>
                            <li>worrying about anxiety itself, for example worrying about when panic attacks might happen</li>
                            <li>wanting lots of reassurance from other people or worrying that people are angry or upset with you</li>
                            <li>worrying that you're losing touch with reality</li>
                            <li>low mood and depression</li>
                            <li>rumination – thinking a lot about bad experiences, or thinking over a situation again and again</li>
                            <li>depersonalisation – a type of dissociation where you feel disconnected from your mind or body, or like you are a character that you are watching in a film</li>
                            <li>derealisation – another type of dissociation where you feel disconnected from the world around you, or like the world isn't real</li>
                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" What lies behind us and what lies before us are tiny matters compared to what lies within us. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Coping with anxiety</Typography>
                        <p>Living with anxiety can be very difficult, but there are steps you can take that might help. </p>
                        <p>Don't worry if some ideas don't work for you. Just try the ones that do.</p>
                        <ul>
                            <li>Talking to someone you trust about what's making you anxious could be a relief. </li>
                            <li>Try to get enough sleep. Sleep can give you the energy to cope with difficult feelings and experiences</li>
                            <li>Take a walk, going at your own pace. You might choose to go for a longer walk, but even a few minutes of walking can help you feel relaxed.</li>
                            <li>Learning to breathe more deeply can help you feel a lot calmer for a more clear demonstration <a href='https://www.youtube.com/watch?v=wfDTp2GogaQ'>try following this</a></li>
                            <li>It might help to make a note of what happens when you get anxious or have a panic attack. This could help you spot patterns in what triggers these experiences for you, or notice early signs that they are beginning to happen.</li>
                            <li>Try yoga or meditation to calm yourself.</li>

                        </ul>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default Asite