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
import SimpleSlider from './slider.js';
import logo from './Resources/Logo.jpg'
import { CenterFocusStrong } from '@mui/icons-material';




const Home = () => {
  const { user } = useContext(AuthContext)
  const { userData, setUserData } = useContext(AuthContext)
  const [showDoctorsList, setShowDoctorsList] = useState(false);
  const [doctorSearchKeyword, setDoctorSearchKeyword] = useState();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [tips, setTips] = useState([]); // Array to store fetched tips
  const [upcomingAppointments, setUpcomingAppointments] = useState(["You have an upcoming appointment at 2PM with Dr. Wajeeh Hassan today!"])

  const topicsList = [
    { name: "Anxiety", slug: '/anxiety' },
    { name: "Depression", slug: '/depression' },
    { name: "Stress", slug: '/stress' },
    { name: "Trauma", slug: '/trauma' }]

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
      console.log(tips)
    };

    fetchTips();
  }, [])

  let navigate = useNavigate();


  const cardStyle = {
    backgroundColor: '#bbea93',
    color: 'black',
    boxShadow: '0 0 25px 0 #0001',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    margin: '0px',
    width: '15vw',
    borderRadius: '15px',
    border: 0,
    padding: '35px 15px',
    cursor: 'pointer'
  };



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
            justifyContent: { md: 'space-between', xs: 'flex-start' },
            alignItems: { md: 'flex-start', xs: 'center' },
            alignContent: 'flex-start',
            flexWrap: 'no-wrap',

          }}>
          <Box //Hero
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 2,
              background: '#2c554b',
              color: '#f0f4f4',
              padding: { lg: '25px', md: '10px 25px' },
              minHeight: { lg: '15dvh', md: '5dvh' },
              borderRadius: '15px',
              position: 'relative',
              top: 0,
              left: 0,
              width: '100%',

              justifyContent: 'space-between',
              alignItems: 'flex-start',
              textAlign: 'left',
              zIndex: 1,
            }}>
            <Box sx={{
              padding: '25px',
              height: '100%',
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              background: '#2c554b',
              color: '#f0f4f4',
              justifyContent: 'center'
            }}>
              <Typography level='h1' sx={{ color: '#f0f1f1' }}>Welcome {userData.fullName ? userData.fullName : "Friend"} !</Typography>
              <Typography variant="h5" sx={{ color: '#f0f1f1', fontSize: '22px' }}>Great to have you on board!</Typography>
              <Typography variant="body1" sx={{ color: '#f0f1f1', fontSize: '22px' }}>Remember you're not alone. Own your journey.</Typography>
            </Box>
            <Box sx={{
              padding: '25px',
              boxSizing: 'border-box',
              height: { lg: '225px', sm: '175px' },
              aspectRatio: '1/1',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              background: '#fff',
              color: '#f0f4f4',
              borderRadius: '15px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 25px 0 #e7e7e730'
            }}>
              <img src={logo} style={{ width: '100px', height: '75px', objectFit: 'contain' }} />
              <h2 style={{ color: '#2E7D32', margin: '5px 0' }}>WellNestX AI</h2>
              <Button color="success" onClick={() => { navigate('/chat') }}>Talk Now!</Button>

            </Box>
            {/* <Input
              sx={{ position: 'absolute', right: '25px', top: '25px' }}
              startDecorator={<SearchIcon color='success' />}
              color=""
              placeholder="Search anything.."
              size="lg"
              variant="outlined"

            /> */}


          </Box>
          <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
            <Box sx={{ width: '65%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <h2>Tips for your Mental Health</h2>
              <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}><SimpleSlider childClass="sliding-tips" data={tips} /></Box>
            </Box>
            <Box sx={{ width: '30%', overflow: 'hidden', flexDirection: 'column' }}>
              <h2>Upcoming Appointments</h2>
              <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', }}><SimpleSlider childClass="upcoming" data={upcomingAppointments} /></Box>
            </Box>
          </Box>

          <Box //Explore Topics
            sx={{ display: { xl: 'flex', lg: 'none' }, flexDirection: 'column', gap: 0, padding: '5px', width: '100%', alignItems: 'flex-start' }}
          >
            <h2 style={{ color: '#272727', marginBottom: '20px', fontFamily: 'Montserrat' }}>
              Explore Topics
            </h2>
            <Box sx={{ display: 'flex', gap: '25px', justifyContent: 'flex-start' }}>
              {topicsList.map(topic => (
                <Card sx={cardStyle} onClick={() => { navigate(topic.slug) }}>
                  < Typography variant="body1" sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#272727dd' }}>{topic.name}</Typography>
                </Card>
              ))}
            </Box>
          </Box>
        </Box >


      </Box>




    </div >
  );
}

export default Home