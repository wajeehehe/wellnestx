import React, { useState, useEffect } from 'react';
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './firebase';
import Input from '@mui/joy/Input';



const AppointmentList = () => {
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [unfilteredappointments, setUnfilteredAppointments] = useState([]);
    const [keyword, setKeyword] = useState();

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
        };
        getAppointmentsData();
        // console.log(appointments)
    }, []);

    useEffect(() => {
        const filteredAppointment = unfilteredappointments.filter((appointment) =>
            appointment.DocID.toLowerCase().includes(keyword, unfilteredappointments) || appointment.PatientID.toLowerCase().includes(keyword, unfilteredappointments)
        );
        setFilteredAppointments(filteredAppointment);

        //getFilteredAppointments();

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


                    </li>
                ))}
            </ul>
            {(filteredAppointments.lenght > 0) ? " " : <p>No appointments found</p>}
        </div>
    );
}

export default AppointmentList