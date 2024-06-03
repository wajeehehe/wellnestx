import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import Input from '@mui/joy/Input';



const TimeslotList = (props) => {
    const [filteredAppointments, setFilteredAppointments] = useState([]);
    const [unfilteredappointments, setUnfilteredAppointments] = useState([]);
    const [docid, setDocid] = useState(props.doctor.docID);
    const [timeSlots, setTimeSlots] = useState([]);

    const getAppointmentsData = async () => {
        const appointmentsCollection = collection(db, 'Appointments');
        const q = query(appointmentsCollection);
        const querySnapshot = await getDocs(q);
        const appointmentList = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
        setUnfilteredAppointments(appointmentList);
        console.log("appointments")
        const timings = []
        for (let i = props.doctor.startTime; i < props.doctor.endTime; i++) {
            const timeSlot = {
                time: i,
                available: true
            }
            timings.push(timeSlot);
        }
        console.log("timings arr: ", timings)
        setTimeSlots(timings);
        console.log('timeslots ', timeSlots);

    };

    useEffect(() => {

        getAppointmentsData();

    }, []);

    useEffect(() => {

        if (docid && (unfilteredappointments.length > 0)) {
            const filteredAppointment = unfilteredappointments.filter((appointment) =>
                appointment.docID.toLowerCase().includes(docid) || appointment.patientID.toLowerCase().includes(docid)
            );

            // setFilteredAppointments(filteredAppointment);
            const updatedTimeSlots = timeSlots.map((timeSlot) => {
                let isBooked = false;
                isBooked = ((filteredAppointment.length > 0) ? filteredAppointment.some((appointment) => appointment.time == timeSlot.time) : false);



                return { ...timeSlot, available: !isBooked };
            });

            setFilteredAppointments(filteredAppointment);
            setTimeSlots(updatedTimeSlots);
        }
        else {
            setFilteredAppointments(unfilteredappointments);
            setTimeSlots(timeSlots.map((slot) => ({ ...slot, available: true }))); // Reset availability on empty search
        }



    }, [docid, unfilteredappointments]);

    const handleTimeSlotClick = (clickedTimeSlot) => {
        if (clickedTimeSlot.available) {
            console.log("booking in progress....");
            createAppointment(clickedTimeSlot.time)
            props.appointmentBookedConfirmation(props.doctor, clickedTimeSlot)
        } else {
            console.log("Time slot already booked!");
        }
    };

    const createAppointment = async (selectedTime) => {
        const newAppointment = {
            docID: docid.toString(),
            patientID: "1", // Hardcoded for now
            date: 4, // Hardcoded for now
            time: selectedTime,
        };

        punchAppointment(newAppointment);
        getAppointmentsData();

        const aiResponse = {
            sender: 'AI',
            message: `appoinment booked with ${props.doctor.name} at time ${newAppointment.time}`,
            timestamp: new Date().toLocaleTimeString(),
            showdoctor: false
        };
        console.log(aiResponse.message)
        props.popupClose()
    };
    const punchAppointment = async (appointment) => {
        try {
            const appointmentsCollectionRef = collection(db, "Appointments");
            const newAppointmentRef = await addDoc(appointmentsCollectionRef, appointment);
            console.log("Appointment created with ID:", newAppointmentRef.id);
        } catch (error) {
            console.error("Error adding appointment:", error);

        }
    };



    return (
        <div>
            <Input
                value={docid}

            />

            <ul className="doctorsList" style={{ margin: 'auto', display: 'flex', flexDirection: 'row', gap: 10 }}>
                {timeSlots.map((timeSlot) => (

                    <li key={timeSlot.id} style={{
                        display: 'flex',
                        aspectRatio: '1/1',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: (timeSlot.available) ? 'white' : 'lightgray', // Visual cue for booked slots
                        pointerEvents: (timeSlot.available) ? '' : 'none', // Disable interactions on booked slots
                    }} onClick={() => handleTimeSlotClick(timeSlot)}>
                        {timeSlot.time === 24
                            ? '12 AM'
                            : timeSlot.time < 12
                                ? `${timeSlot.time % 12 || 12} AM`
                                : timeSlot.time === 12
                                    ? '12 PM'
                                    : `${timeSlot.time - 12} PM`}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TimeslotList