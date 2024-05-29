import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase';
import Input from '@mui/joy/Input';



const AppointmentList = () => {
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [unfilteredappointments, setUnfilteredAppointments] = useState([]);
    const [keyword, setKeyword] = useState();
    const [timeSlots, setTimeSlots] = useState([
        { time: 15, available: true },
        { time: 16, available: true },
        { time: 17, available: true },
        { time: 18, available: true },
        { time: 19, available: true },
        { time: 20, available: true },
        { time: 21, available: true },
        { time: 22, available: true },
        { time: 23, available: true },
        { time: 24, available: true },
    ]);

    const handleSearchChange = (event) => {
        setKeyword(event.target.value);
    };

    useEffect(() => {
        const getAppointmentsData = async () => {
            const appointmentsCollection = collection(db, 'Appointments');
            const q = query(appointmentsCollection);
            const querySnapshot = await getDocs(q);
            const appointmentList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
            setUnfilteredAppointments(appointmentList);
            console.log("appointments")

        };
        getAppointmentsData();

    }, []);

    useEffect(() => {
        if (keyword) {
            const filteredAppointment = unfilteredappointments.filter((appointment) =>
                appointment.DocID.toLowerCase().includes(keyword) || appointment.PatientID.toLowerCase().includes(keyword)
            );
            // setFilteredAppointments(filteredAppointment);
            const updatedTimeSlots = timeSlots.map((timeSlot) => {
                const isBooked = filteredAppointment.some((appointment) => appointment.Time == timeSlot.time);

                console.log(timeSlot.time);
                return { ...timeSlot, available: !isBooked };
            });

            setFilteredAppointments(filteredAppointment);
            setTimeSlots(updatedTimeSlots);
        }
        else {
            setFilteredAppointments(unfilteredappointments);
            setTimeSlots(timeSlots.map((slot) => ({ ...slot, available: true }))); // Reset availability on empty search
        }



    }, [keyword, unfilteredappointments]);



    return (
        <div>
            <Input
                value={keyword}
                onChange={handleSearchChange} />

            <ul className="doctorsList" style={{ maxWidth: '500px', margin: 'autonpm' }}>
                {filteredAppointments.map((appointment) => (

                    <li key={appointment.id}>
                        {/* Display appointment details */}
                        {appointment.date} May | {appointment.Time} PM | Dr ID. {appointment.DocID} | Pt ID.  {appointment.PatientID} |
                        {(timeSlots.time)?.available ? "Available" : "Unavailable"}

                    </li>
                ))}
            </ul>
            {(filteredAppointments.length > 0) ? " " : <p>No appointments found</p>}
        </div>
    );
}

export default AppointmentList