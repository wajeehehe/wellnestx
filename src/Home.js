import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React, { useContext, useState } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { AspectRatio, Box, Card, Typography } from '@mui/joy'
import Header from './Dashboard/components/Header';
import AuthContext from './AuthContext';

//import logo from 'logo.png'



const Home = (props) => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState("Wajeehehe")
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
          <Card sx={cards}>Hello {name ? name : "Laiba"}</Card>
          <Card sx={cards}>Hello {name ? name : "Wajeeh"}</Card>
          <Card sx={cards}>Hello {name ? name : "Wajeeh"}</Card>
          <Card sx={cards}>Hello {name ? name : "Wajeeh"}</Card>

          {/* <MyProfile /> */}
        </Box>
      </Box>
    </div >
  );
}


export default Home