import { MaximizeTwoTone, Padding } from "@mui/icons-material";
import { Box, Card, Button } from "@mui/joy";
import { useState, useEffect } from "react";
import TimeslotList from "./TimeslotList";

function DoctorPopup({ doctor, onClose }) {

    const [isOpen, setIsOpen] = useState(false); // Track popup visibility

    useEffect(() => {
        setIsOpen(true);
    }, []);

    const handleClose = () => {
        setIsOpen(false); // Close popup on button click
        onClose(); // Call parent's onClose callback
    };

    const popupStyle = {
        position: 'absolute',
        width: '400px',
        height: '450px !important',
        top: 'calc(50% - 150px)',
        left: 'calc(50% - 200px)',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '35px'

    }
    return (
        <Card className={`doctor-popup ${isOpen ? 'popup-enter' : ''}`} sx={popupStyle}>
            <h2 style={{ textTransform: 'Capitalize' }} > Dr.{doctor.name}</h2>
            <p style={{ textTransform: 'Capitalize' }}>{doctor.exp} Years of Experience</p>
            <p style={{ textTransform: 'Capitalize' }}>Speicalizes in {doctor.speciality}</p>
            <p style={{ textTransform: 'Capitalize' }}>{doctor.timings}</p>
            <Box style={{ maxWidth: '100%', overflowX: 'scroll', padding: 5 }}><TimeslotList doctor={doctor} patientid={1} popupClose={handleClose} /></Box>
            <Button onClick={handleClose}>Close</Button>
        </Card>
    );
}

export default DoctorPopup;