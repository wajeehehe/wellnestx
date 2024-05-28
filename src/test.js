/*import React, { useContext, useEffect, useState } from 'react'
import CssBaseline from '@mui/joy/CssBaseline';
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography } from '@mui/joy'
import AuthContext from './AuthContext';
import Input from '@mui/joy/Input';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/joy/Button';
import { db } from './firebase.js';
import DoctorsList from './DoctorsList.js';
import { collection, query, where, getDocs } from "firebase/firestore";*/

import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from './firebase'; // Replace with your Firebase import

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const getAppointmentsData = async () => {
            const appointmentsCollection = collection(db, 'Appointments');
            const q = query(appointmentsCollection); // Order by date (optional)
            const querySnapshot = await getDocs(q);
            const appointmentList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setAppointments(appointmentList);
        };
        getAppointmentsData();
        console.log(appointments)
    }, []);
    /*function DoctorList({ keyword }) {
        const [doctors, setDoctors] = useState([]);
        const [selectedDoctor, setSelectedDoctor] = useState(null);
    
        const handleDoctorClick = (doctor) => {
            setSelectedDoctor(doctor);
        };
    
        useEffect(() => {
            const getDoctorsData = async () => {
                const doctorsCollection = collection(db, 'Doctors');
                const querySnapshot = await getDocs(query(doctorsCollection));
                const doctorList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
                const filteredDoctors = doctorList.filter((doctor) =>
                    doctor.speciality.toLowerCase().includes(keyword) || doctor.name.toLowerCase().includes(keyword)
                );
                setDoctors(filteredDoctors);
    
            };
            getDoctorsData();
    
        }, [keyword]);*/


    if (appointments.length > 0)
        return (
            /* <ul className="doctorsList">
                 {doctors.map(doctor => (
                     <li style={{ textTransform: 'capitalize' }} key={doctor.id} onClick={() => handleDoctorClick(doctor)} > dr. {doctor.name} | {doctor.location} | {doctor.speciality}</li>
                 ))}
                 {selectedDoctor && <DoctorPopup doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
             </ul>*/
            <ul className="appointmentList">
                {appointments.map((appointment) => (

                    <li key={appointment.id}>
                        {/* Display appointment details */}
                        <span>{appointment.date}</span>
                        <span>{appointment.time}</span>
                        <span>Dr. {appointment.doctorid}</span>
                        <span>{appointment.patientid}</span>
                        {/* Add more appointment details as needed */}

                    </li>
                ))}
            </ul>
        );

    else {
        return (

            <p>No appointments found. Please refine your search.</p>

        )
    }
}

export default AppointmentList