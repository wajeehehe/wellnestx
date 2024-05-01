import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React, { useContext, useState } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { AspectRatio, Box, Card, Typography } from '@mui/joy'
import Header from './Dashboard/components/Header';
import AuthContext from './AuthContext';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import { db } from './firebase';

//import logo from 'logo.png'


import { collection, getDocs } from "firebase/firestore";



const Home = (props) => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState("")
  //This is done by wajeeh


  let navigate = useNavigate();
  const cards = {
    minWidth: '150px', aspectRatio: { md: '1.2/1', xs: 'unset' }, width: { lg: '24%', md: '24%', xs: '100%' }, padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
    alignItems: 'center'
  };


  return (
    <div>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh', background: '#D5E5E5' }}>

        <Sidebar />
        <Header />
        <Box
          component="main"
          className="MainContent"
          sx={{
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
            <Typography level='h2' sx={{ color: 'red' }}>WELCOME { }</Typography>
            <Box sx={{ width: { xs: '100%', md: '30%' } }}> <Input
              startDecorator={<SearchIcon color='success' />}
              color="success"
              placeholder="Search anything.."
              size="lg"
              variant="outlined"
              sx={{ borderRadius: '18px' }}
            /> </Box>
          </Box>


          <Card sx={cards}>Hello {name ? name : "Laiba"}</Card>
          <Card sx={cards}>Hello {name ? name : "Wajeeh"}</Card>
          <Card sx={cards}>Hello {name ? name : "Wajeeh"}</Card>
          <Card sx={cards}>Hello {name ? name : "Wajeeh"}</Card>

        </Box >

      </Box >

    </div >
  );
}

const getData = async (userEmail) => {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    if (doc.data().email.email === userEmail);
    console.log(doc.data())
    return doc.data();
  });
}



export default Home