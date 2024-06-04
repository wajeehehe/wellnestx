
import Sidebar from './Dashboard/components/SIdebar'
import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { Box, Card, Typography } from '@mui/joy'
import Header from './Dashboard/components/Header';
import Button from '@mui/joy/Button';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import AspectRatio from '@mui/joy/AspectRatio';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import Hero from './hero';


const Lms = () => {
    const [lmsData, setLmsData] = useState([]);

    const lmsCardsStyle = {

        color: 'black',
        boxShadow: '0 0 25px 0 #0001',
        transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        margin: '10px',
        width: '30%',
        borderRadius: '15px',
        border: 0,
        top: '20px',
        maxWidth: '300px !important'
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
                    className="LmsContent"
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
                    <Hero title={"LMS Library"} />
                    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'center' }}>
                        {lmsData.map(topic => (
                            <Card sx={lmsCardsStyle} className="lms-post">
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
                                    <Typography level="body-xs" className="lms-post-title" sx={{ padding: '10px 10px', fontWeight: 'bold', fontSize: '18px', fontFamily: 'Montserrat' }}>{topic.name}</Typography>
                                    <Typography level="body-sm" className="lms-post-desc" sx={{ padding: '10px 10px', fontSize: '16px', fontFamily: 'Montserrat' }} >
                                        {topic.text}
                                    </Typography>
                                </CardContent>
                                <a href={topic.url} style={{ display: 'inline-block', width: '100%', textDecoration: 'none', }}>
                                    <Button sx={{
                                        width: '100%', fontFamily: 'Montserrat !important', backgroundColor: '#bbea93',
                                        color: '#2c554b'
                                    }} variant="soft" color='success' size="lg">
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