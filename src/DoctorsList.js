import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase'; // Replace with your Firebase import
import DoctorPopup from './DoctorPopup';
import Button from '@mui/joy/Button';

function DoctorList({ keyword }) {
    const [unfilteredDoctors, setUnfilteredDoctors] = useState([]);
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
            setUnfilteredDoctors(doctorList);
            console.log("Sending API Req");
        };
        getDoctorsData();

    }, []);

    useEffect(() => {
        const filteredDoctors = unfilteredDoctors.filter((doctor) =>
            doctor.speciality.toLowerCase().includes(keyword) || doctor.name.toLowerCase().includes(keyword)
        );
        setDoctors(filteredDoctors);
        if (filteredDoctors.length === 0) {
            setDoctors(unfilteredDoctors);
        }
        console.log("Filtering with", keyword)
    }, [keyword, unfilteredDoctors]);


    if (doctors.length > 0)
        return (
            <ul className="doctorsList">
                {doctors.map(doctor => (
                    <li style={{ textTransform: 'capitalize' }} key={doctor.id} onClick={() => handleDoctorClick(doctor)} > {doctor.name} | {doctor.location} | {doctor.speciality}</li>
                ))}
                {selectedDoctor && <DoctorPopup doctor={selectedDoctor} onClose={() => setSelectedDoctor(null)} />}
            </ul>
        );

    else {
        return (
            //<p>No Doctors Found, please refine your search</p>//loading circle
            <Button loading variant="plain">
                Plain
            </Button>
        )
    }
}

export default DoctorList;