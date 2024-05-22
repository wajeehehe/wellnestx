import React from "react";
import { db } from "./firebase";
import { AspectRatio, Box, Card } from "@mui/joy";
import { Padding } from "@mui/icons-material";

const Timeslots = ({ doctor }) => {
    const timeSlotBoxesStyle = {
        aspectRatio: '1/1', width: '100px',
        border: '2px solid #e7e7e7', display: 'flex',
        justifyContent: 'center', alignItems: 'center',
        borderRadius: '5px', boxShadow: '0 0 25px 0 #0001',
        padding: '0 5px'
    }

    return (
        <Box sx={{ padding: '0 15px', display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: 2, margin: '15px 0', maxWidth: '350px', overflowX: 'scroll', overflowY: 'visible' }}>
            <div style={timeSlotBoxesStyle}>5:00PM</div>
            <div style={timeSlotBoxesStyle}>6:00PM</div>
            <div style={timeSlotBoxesStyle}>7:00PM</div>
            <div style={timeSlotBoxesStyle}>8:00PM</div>
            <div style={timeSlotBoxesStyle}>9:00PM</div>
            <div style={timeSlotBoxesStyle}>10:00PM</div>
        </Box>
    )
}


export default Timeslots