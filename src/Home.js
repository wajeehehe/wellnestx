import DashboardTemplate from './Dashboard/DashboardTemplate'
import Sidebar from './Dashboard/components/SIdebar'
import React from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography } from '@mui/joy'
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import logo from './Resources/Logo.jpg'
//import logo from 'logo.png'



const Home = (props) => {
  const { loggedIn, email, name } = props
  let navigate = useNavigate();
  const goToLogin = () => { navigate('/login') }
  console.log(loggedIn)
  if (loggedIn) {
    navigate('/login')
    return (
      <Stack sx={{ gap: '35px', maxWidth: '390px', margin: 'auto', width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
        <img src={logo} style={{ width: '200px' }}></img>
        <Typography level="h3">Please Login to your account to access the homepage</Typography>
        <Button fullWidth color="success" onClick={goToLogin}>Login</Button>
      </Stack >
    )
  } else {


    return (
      <div disableTransitionOnChange>
        <CssBaseline />
        <Box sx={{ display: 'flex', minHeight: '100dvh', background: '#D5E5E5' }}>
          <Sidebar name="Full Name" email={email} />
          {/* <Header /> */}
          <Box
            component="main"
            className="MainContent"
            sx={{
              pt: { xs: 'calc(12px + var(--Header-height))', md: 3 },
              padding: { xs: 2, sm: 2, md: 3 },
              flex: 1,
              display: 'flex',
              flexDirection: 'row',
              minWidth: 0,
              height: '100dvh',
              gap: 3,
              overflow: 'auto',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              alignContent: 'flex-start',
              flexWrap: 'wrap'
            }}
          >
            <Card sx={{
              backDropFilter: 'blur(2px)', maxWidth: '250px', minWidth: '200px', width: '33%', padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
              alignItems: 'center'
            }}>Hello {name ? name : "Wajeeh"}</Card>
            <Card sx={{
              maxWidth: '250px', minWidth: '200px', width: '33%', padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
              alignItems: 'center'
            }}>Hello {name ? name : "Wajeeh"}</Card>
            <Card sx={{
              maxWidth: '250px', minWidth: '200px', width: '33%', padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
              alignItems: 'center'
            }}>Hello {name ? name : "Wajeeh"}</Card>
            <Card sx={{
              maxWidth: '250px', minWidth: '200px', width: '33%', padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
              alignItems: 'center'
            }}>Hello {name ? name : "Wajeeh"}</Card>
            <Card sx={{
              minWidth: '200px', width: '100%', padding: 5, minHeight: 200, display: 'flex', justifyContent: 'center',
              alignItems: 'center'
            }}>Hello {name ? name : "Wajeeh"}</Card>
            {/* <MyProfile /> */}
          </Box>
        </Box>
      </div >
    );
  }
}

export default Home