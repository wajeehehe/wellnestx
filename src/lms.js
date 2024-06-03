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
import CardContent from '@mui/joy/CardContent';
import Link from '@mui/joy/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { db } from './firebase';


const Lms = () => {
    const [lmsData, setLmsData] = useState([]);

    const lmsCardsStyle = {

        boxShadow: 'lg',
        color: 'black',
        boxShadow: '0 0 25px 0 #0001',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        margin: '10px',
        width: '30%',
        borderRadius: '15px',
        border: 0,
        top: '20px',
        maxWidth: '200px !important'
    };

    const getLmsList = async () => {
        const lmsCollectionRef = collection(db, "Lms");
        const q = query(lmsCollectionRef);
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setLmsData(data)
    };

    useEffect(() => {

        getLmsList();
    }, []);

    return (
        <div>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100dvh', background: '#f5f5f5' }}>
                <Sidebar />
                <Header />

                <Box //main
                    component="main"
                    className="MainContent"
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

                        <Typography variant="h1" sx={{ color: '#f0f1f1', fontSize: '36px' }}>LMS Site</Typography>

                    </Box>
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
                        {lmsData.map(topic => (
                            <Card sx={lmsCardsStyle}>
                                <CardOverflow>
                                    <AspectRatio sx={{ minWidth: 200 }}>
                                        <img
                                            src={topic.img}
                                            srcSet={topic.img}
                                            loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                </CardOverflow>
                                <CardContent>
                                    <Typography level="body-xs" sx={{ padding: '10px 10px' }}>{topic.name}</Typography>
                                </CardContent>

                                <a href={topic.url} style={{ display: 'inline-block', width: '100%' }}>
                                    <Button sx={{ width: '100%' }} variant="solid" color="success" size="lg">
                                        Learn more
                                    </Button>
                                </a>

                            </Card>
                        ))}
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Lms