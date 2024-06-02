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
import { db } from './firebase.js';
import DoctorsList from './DoctorsList.js';
import { collection, query, where, getDocs } from "firebase/firestore";
import IconButton from '@mui/material/IconButton'; // Import IconButton for arrows
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'; // Import ArrowBackIosIcon for previous slide
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'; // Import ArrowForwardIosIcon for next slide
//import care from './Resources/care.png'

const Home = () => {
  const { user } = useContext(AuthContext)
  const { userData, setUserData } = useContext(AuthContext)
  const [showDoctorsList, setShowDoctorsList] = useState(false);
  const [doctorSearchKeyword, setDoctorSearchKeyword] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tips, setTips] = useState([]); // Array to store fetched tips

  const handleShowDoctorsList = () => {
    setShowDoctorsList(!showDoctorsList);
    if (showDoctorsList === false) {
      setShowDoctorsList(true)
    }
    console.log(doctorSearchKeyword)

  };

  const handleSearchChange = (event) => {
    setDoctorSearchKeyword(event.target.value.toLowerCase()); // Lowercase for case-insensitive search
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }

    //getting the tips from database
    const fetchTips = async () => {
      const tipsCollection = collection(db, "Tips");
      const tipsSnapshot = await getDocs(tipsCollection);
      const fetchedTips = tipsSnapshot.docs.map((doc) => doc.data().text);
      setTips(fetchedTips);
    };

    fetchTips();
  }, [])

  let navigate = useNavigate();

  //setting the card style  
  const cards = {
    aspectRatio: '1/1',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    borderRadius: '4px',
    marginBottom: '20px',
    height: '300px',
    width: '450px'
  };


  //scrolling to the next slide by the use of arrows
  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % tips.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + tips.length) % tips.length); // Handle negative modulo
  };

  const cardStyle = {
    aspectRatio: '1/1',
    padding: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    borderRadius: '4px',
    backgroundColor: '#bbea93',
    color: 'black',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    margin: '10px',
    maxWidth: '250px',
  };

  const handleCardHover = (event) => {
    event.target.style.transform = 'scale(0.98)'; // Reduce size on hover
    event.target.style.boxShadow = 'rgba(0, 0, 0, 0.3) 0px 4px 12px'; // Increase shadow on hover
  };

  const handleCardLeave = (event) => {
    event.target.style.transform = 'scale(1)'; // Restore original size
    event.target.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 4px 12px'; // Restore original shadow
  };

  const exploreTopicsStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20%', // 20% top margin from the slider
  };


  return (
    <div>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100dvh', background: '#f5f5f5' }}>
        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
            backdropFilter: 'blur(22px)',
            pt: { xs: 'calc(25px + var(--Header-height)) !important', md: 3 },
            padding: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: { md: 'row', xs: 'column' },
            minWidth: 0,
            height: '100dvh',
            columnGap: 0,
            gap: { md: 1, xs: 3 },
            overflow: 'auto',
            justifyContent: { md: 'space-evenly', xs: 'flex-start' },
            alignItems: { md: 'flex-start', xs: 'center' },
            alignContent: 'flex-start',
            flexWrap: 'wrap',

          }}>
          <Box sx={{//the hero section style (:'( ))
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            background: '#2c554b',
            color: '#f0f4f4',
            padding: '10px 0px 0px 30px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',

            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            textAlign: 'left',
            zIndex: 1,
          }}>
            <Typography level='h1' sx={{ color: '#f0f1f1' }}>Welcome {userData.fullName ? userData.fullName : "Laiba"} !</Typography>
            <Typography variant="h5" sx={{ color: '#f0f1f1', fontSize: '22px' }}>Great to have you on board!</Typography>
            <Typography variant="body1" sx={{ color: '#f0f1f1', fontSize: '22px' }}>You're not alone :) Own your journey.</Typography>

            <Box sx={{//style for the search bar
              position: 'absolute',
              top: '0',
              right: '0',
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: '25px',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              padding: '15px',
              width: 'auto',
              height: '100px'
            }}>
              <Box sx={{
                display: 'flex',
                flexGrow: 1,
                width: '0',
                margin: '10px 20px 0 0'
              }}>
                <Input
                  startDecorator={<SearchIcon color='success' />}
                  color=""
                  placeholder="Search anything.."
                  size="lg"
                  variant="outlined"

                />
              </Box>
            </Box>

          </Box>

        </Box >


      </Box>

      {tips.length > 0 && ( // Only display content if tips are fetched(i honestly dont know what tf is happening here)
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'center' }}>
            <Box sx={{ position: 'absolute', top: '40%', left: '27%' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: '20px' }}>
                <IconButton onClick={handlePrevSlide}>
                  <ArrowBackIosIcon />
                </IconButton>
                <IconButton onClick={handleNextSlide}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '80px' }}>
                <Card sx={cards}>
                  <Typography variant="h6" sx={{ fontSize: '18px' }} > {tips[currentSlide % tips.length]}</Typography>
                </Card>
                {tips.length > 1 && (
                  <Card sx={cards}>
                    <Typography variant="h6" sx={{ fontSize: '18px' }}>{tips[(currentSlide + 1) % tips.length]}</Typography>
                  </Card>
                )}
              </Box>
            </Box>
          </Box>
        </>
      )
      }

      <Box sx={exploreTopicsStyle}>
        <Typography variant="h6" sx={{ color: 'black', marginBottom: '10px' }}>
          Explore Topics
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Card sx={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
            <Typography variant="body1">Anxiety</Typography>
          </Card>
          <Card sx={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
            <Typography variant="body1">Depression</Typography>
          </Card>
          <Card sx={cardStyle} onMouseEnter={handleCardHover} onMouseLeave={handleCardLeave}>
            <Typography variant="body1">Stress</Typography>
          </Card>
        </Box>
      </Box>


    </div >
  );
}

export default Home