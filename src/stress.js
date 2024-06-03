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

const Stsite = () => {
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

                        <Typography variant="h1" sx={{ color: '#f0f1f1', fontSize: '36px', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Stress</Typography>
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
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >What is stress?</Typography>
                        <br />
                        <p>Stress is how we react when we feel under pressure or threatened. It usually happens when we are in a situation that we don't feel we can manage or control. </p>
                        <p>When we experience stress, it can be as:</p>
                        <ul>
                            <li>An individual, for example when you have lots of responsibilities that you are struggling to manage</li>
                            <li>Part of a group, for example if your family is going through a difficult time, such as bereavement or financial problems</li>
                            <li>Part of your community, for example if you belong to a religious group that is experiencing discrimination</li>
                            <li>A member of society, for example during natural disasters or events like the coronavirus pandemic</li>
                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" The power for creating a better future is contained in the present moment: You create a good future by creating a good present. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Effects of stress on your mind</Typography>
                        <p>If you are stressed, you might feel:</p>
                        <ul>
                            <li>Irritable, angry, impatient or wound up</li>
                            <li>Over-burdened or overwhelmed</li>
                            <li>Anxious, nervous or afraid</li>
                            <li>Like your thoughts are racing and you can't switch off</li>
                            <li>Unable to enjoy yourself</li>
                            <li>Depressed</li>
                            <li>Uninterested in life</li>
                            <li>Like you've lost your sense of humour</li>
                            <li>A sense of dread</li>
                            <li>Worried or tense</li>
                            <li>Neglected or lonely</li>
                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Effects of stress on your body</Typography>
                        <p>Some of us who go through anxiety may have these feelings, during or afterwards:</p>
                        <ul>
                            <li>Difficulty breathing</li>
                            <li>Panic attacks</li>
                            <li>Blurred eyesight or sore eyes</li>
                            <li>Sleep problems</li>
                            <li>Fatigue</li>
                            <li>Muscle aches and headaches</li>
                            <li>Chest pains and high blood pressure</li>
                            <li>Indigestion or heartburn</li>
                            <li>Constipation or diarrhoea</li>
                            <li>Feeling sick, dizzy or fainting</li>
                            <li>Sudden weight gain or weight loss</li>

                        </ul>
                        <br />
                        <Typography variant="h2" sx={{ color: '#648876', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center !important' }}>" In the end, just three things matter: How well we have lived. How well we have loved. How well we have learned to let go. "</Typography>
                        <br />
                        <Typography variant="h2" sx={{ color: 'black', fontSize: '1.4rem !important', fontFamily: 'Montserrat', fontWeight: 'bold' }} >Coping with trauma</Typography>
                        <p>Being prepared for periods of stress can make it easier to get through them. And knowing how to manage our wellbeing can help us recover after a stressful event. Some of us may refer to our ability to manage stress as our resilience.Here are things you can try that might help with how you're feeling.</p>
                        <p>Don't worry if some ideas don't work for you. Just try the ones that do.</p>
                        <ul>
                            <li>Learning to be kinder to yourself can help with how you feel in different situations. Try to take breaks in your day for things you enjoy. And reward yourself for your achievements, even if they seem small.</li>
                            <li>Develop your interests and hobbies. Spending time on things you enjoy could help distract you from a stressful situation. If stress is making you feel lonely or isolated, shared hobbies can also be a good way to meet new people.</li>
                            <li>Take a walk, going at your own pace. You might choose to go for a longer walk, but even a few minutes of walking can help you feel relaxed.</li>
                            <li>Try to find time to relax. This might feel hard if you can't do anything to stop a situation that is making you stressed. But if you can allow yourself a short break, this can help with how you feel.Here is something <a href='https://www.youtube.com/watch?v=wfDTp2GogaQ'>you can try</a></li>
                            <li>Try painting, drawing, making crafts, playing a musical instrument, dancing, baking or sewing.
                            </li>
                            <li>Look after your physical health. Getting enough sleep, staying physically active and eating a balanced diet can make stress easier to manage.</li>

                        </ul>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default Stsite