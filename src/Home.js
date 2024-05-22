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



const Home = () => {
  const { user } = useContext(AuthContext)
  const { userData, setUserData } = useContext(AuthContext)
  const [showDoctorsList, setShowDoctorsList] = useState(false);
  const [doctorSearchKeyword, setDoctorSearchKeyword] = useState();
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
  }, [])


  let navigate = useNavigate();
  const cards = {
    minWidth: '150px', aspectRatio: { md: '1.2/1', xs: 'unset' }, width: { lg: '24%', md: '24%', xs: '100%' }, padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
    alignItems: 'center'
  };


  return (
    <div>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh', background: 'transparent' }}>

        <Sidebar />
        <Header />


        <Box
          component="main"
          className="MainContent"
          sx={{
            backdropFilter: 'blur(22px)',
            background: "#D5E5E5fa",
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
            flexWrap: 'wrap'
          }}
        >

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '25px', justifyContent: 'space-between', alignItems: 'center', padding: '15px', width: '100%', position: 'sticky', top: '0', height: '100px' }}>
            <Typography level='h1' sx={{ color: '#2E7D32dd' }}>Welcome {userData.fullName ? userData.fullName : "Laiba"} !</Typography>
            <Box sx={{ width: { xs: '100%', md: '30%' } }}> <Input
              startDecorator={<SearchIcon color='success' />}
              color=""
              placeholder="Search anything.."
              size="lg"
              variant="outlined"
            /> </Box>
          </Box>




          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Input
              startDecorator={<SearchIcon color='success' />}
              color=""
              placeholder="Search for Doctors"
              size="lg"
              variant="outlined"
              value={doctorSearchKeyword}
              onChange={handleSearchChange}
            />
            <Button onClick={handleShowDoctorsList}>{showDoctorsList ? "Hide" : "Search"}</Button>
            {showDoctorsList && <DoctorsList keyword={doctorSearchKeyword} />}
          </Box>


        </Box >

      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          width: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: 0,
          zIndex: -5,
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://t3.ftcdn.net/jpg/05/87/64/16/360_F_587641642_GnVhXpvkKtqMWtAutjqq5gMQznlOwOh7.jpg)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
          },
        })}
      />
    </div >
  );
}




export default Home