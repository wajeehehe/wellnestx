
import Sidebar from './Dashboard/components/SIdebar'
import React, { useContext, useEffect, useState } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography } from '@mui/joy'
import Header from './Dashboard/components/Header';
import AuthContext from './AuthContext';
import Button from '@mui/joy/Button';
import { db } from './firebase.js';
import { collection, query, where, getDocs } from "firebase/firestore";
import SimpleSlider from './slider.js';
import logo from './Resources/Logo.jpg'





const Home = () => {
  const { user } = useContext(AuthContext)
  const [doctorMap, setDoctorMap] = useState()
  const userid = '1';
  const { userData, setUserData } = useContext(AuthContext)
  const [filteredAppointments, setFilteredAppointments] = useState(null);
  const [tips, setTips] = useState([]); // Array to store fetched tips
  const [upcomingAppointments, setUpcomingAppointments] = useState(["You have an upcoming appointment at 2PM with Dr. Wajeeh Hassan today!"])


  const getCurrentMonthName = () => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const now = new Date();
    return monthNames[now.getMonth()];
  };
  const capitalizeName = (name) => {
    if (!name) return "";
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  const getDoctorsData = async () => {
    try {
      const appointmentsCollection = collection(db, 'Doctors');
      const q = query(appointmentsCollection);
      const doctorsSnapshot = await getDocs(q);

      if (doctorsSnapshot) {
        const doctorsList = doctorsSnapshot.docs.map(doc => ({ ...doc.data(), docID: doc.data().docID }));
        console.log(doctorsList);

        // Create a mapping of docID to doctor name
        const docMap = {};
        doctorsList.forEach(doctor => {
          console.log(doctor.docID, doctor.name);
          docMap[doctor.docID] = doctor.name;
        });

        setDoctorMap(docMap); // Asynchronous state update
      }
    } catch (error) {
      console.error("Error fetching doctors data:", error);
    }
  }

  const getAppointmentsData = async () => {
    if (!doctorMap) {
      // Exit if doctorMap is empty
      return;
    }

    try {
      console.log(doctorMap);
      const appointmentsCollection = collection(db, 'Appointments');
      const q = query(appointmentsCollection);
      const querySnapshot = await getDocs(q);

      const appointmentList = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          ...data,
          id: doc.id,
          doctorName: doctorMap[data.docID] || "Unknown Doctor"
        };
      });

      console.log("Raw Appointments List ");
      console.log(appointmentList);

      if (userid && appointmentList.length > 0) {
        const filteredAppointment = appointmentList.filter((appointment) =>
          appointment.patientID === userid
        );

        setFilteredAppointments(filteredAppointment);
        console.log("Filtered Appointments List for User ", userid);
        console.log(filteredAppointments);
      }
    } catch (error) {
      console.error("Error fetching appointments data:", error);
    }
  }

  useEffect(() => {
    getDoctorsData();
  }, []); // Fetch doctors data once on component mount

  useEffect(() => {
    if (doctorMap) {
      getAppointmentsData();
    }
  }, [doctorMap]);



  useEffect(() => {
    // This effect runs whenever `filteredAppointments` is updated.
    if (filteredAppointments) {
      console.log("Filtered Appointments List for User ", userid);
      console.log(filteredAppointments);
      const upcomingAppointmentsRaw = filteredAppointments.map((appointment) => `You have an upcoming appointment with Doctor ${capitalizeName(appointment.doctorName)} at ${appointment.time}:00 on ${appointment.date} ${getCurrentMonthName()}`);
      setUpcomingAppointments(upcomingAppointmentsRaw);
      console.log("Running", upcomingAppointmentsRaw);
    }
  }

    , [filteredAppointments]);

  const topicsList = [
    { name: "Anxiety", slug: '/anxiety' },
    { name: "Depression", slug: '/depression' },
    { name: "Stress", slug: '/stress' },
    { name: "Trauma", slug: '/trauma' },
    { name: "Adhd", slug: '/adhd' }]

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
    maxWidth: '150px',
    borderRadius: '15px',
    border: 0,
    padding: '15px',
    cursor: 'pointer',
    fontSize: '1em'
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
            pt: { xs: 'calc(25px + var(--Header-height)) !important', md: 3 },
            padding: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minWidth: 0,
            columnGap: 0,
            gap: { md: 5, xs: 3 },
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
              borderRadius: '35px',
              position: 'relative',
              top: 0,
              left: 0,
              width: '100%',

              justifyContent: 'space-between',
              alignItems: 'center',
              textAlign: 'left',
              zIndex: 1,
            }}>
            <Box sx={{
              padding: '15px',
              height: '100%',
              width: '70%',
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              background: '#2c554b',
              color: '#f0f4f4',
              justifyContent: 'center'
            }}>
              <Typography level='h1' sx={{ color: '#f0f1f1', margin: 0, fontSize: '2em' }}>Welcome {userData.fullName ? userData.fullName : "Wajeeh"} !</Typography>
              <Typography variant="h5" sx={{ color: '#f0f1f1', fontSize: '22px', margin: 0, fontSize: '1.2em' }}>Great to have you on board!</Typography>
              <Typography variant="body1" sx={{ color: '#f0f1f1', fontSize: '22px', margin: 0, fontSize: '1.2em' }}>Remember you're not alone. WellNestX is here to help you.</Typography>
            </Box>
            <Box sx={{
              padding: '15px',
              boxSizing: 'border-box',
              aspectRatio: '1/1',
              width: '170px',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              background: '#fff',
              color: '#f0f4f4',
              borderRadius: '15px',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 25px 0 #e7e7e730'
            }}>
              <img src={logo} style={{ width: '75px', height: '55px', objectFit: 'contain' }} />
              <h2 style={{ color: '#2E7D32', margin: '5px 0', fontSize: '1.2em' }}>WellNestX AI</h2>
              <Button sx={{ marginTop: '15px' }} color="success" onClick={() => { navigate('/chat') }}>Talk Now!</Button>

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
          <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', overflow: 'visible' }} >
            <Box sx={{ width: '65%', overflow: 'hidden', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'column', border: 'none', borderRadius: '35px', padding: '35px', boxShadow: '0 0 25px 0 #0001', background: '#fff' }}>
              <h2 sx={{ textAlign: 'center' }}>Tips for your Mental Health</h2>
              <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', }}><SimpleSlider childClass="sliding-tips" data={tips} /></Box>
            </Box>
            <Box sx={{ width: '30%', overflow: 'hidden', flexDirection: 'column', borderRadius: '35px', background: '#fff', boxShadow: '0 0 25px 0 #0001', padding: '25px', gap: 5 }}>
              <h2 style={{ textAlign: 'left' }}>Notifications</h2>
              <Box sx={{ maxHeight: '80%', overflowY: 'scroll' }}>
                <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '10px 0' }}><SimpleSlider childClass="upcoming" data={upcomingAppointments} /></Box>
                <Box sx={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', margin: '10px 0' }}><SimpleSlider childClass="upcoming" data={upcomingAppointments} /></Box>
              </Box>
            </Box>
          </Box>

          <Box //Explore Topics
            sx={{ position: 'relative', bottom: 0, width: '100%', display: { xl: 'flex', lg: 'flex' }, flexDirection: 'column', gap: 0, padding: 0, width: '100%', alignItems: 'flex-start' }}
          >
            <h2 style={{ color: '#272727', marginBottom: '20px', fontFamily: 'Montserrat', marginTop: '-5px' }}>
              Explore Topics
            </h2>
            <Box sx={{ display: 'flex', gap: '15px', justifyContent: 'flex-start' }}>
              {topicsList.map(topic => (
                <Card sx={cardStyle} onClick={() => { navigate(topic.slug) }}>
                  < Typography variant="body1" sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#272727dd', fontSize: '0.9em' }}>{topic.name}</Typography>
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