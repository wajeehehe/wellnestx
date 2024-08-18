import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, addDoc } from 'firebase/firestore';
import { db } from './firebase';
import Input from '@mui/joy/Input';
import DateDropdown from './datePicker';



const TimeslotList = (props) => {

    const [unfilteredappointments, setUnfilteredAppointments] = useState([]);
    const [docid, setDocid] = useState(props.doctor.docID);
    const [timeSlots, setTimeSlots] = useState([]);
    const [selectedDate, setSelectedDate] = useState(4)


    const updateDate = (timing) => {
        const formattedDate = selectedDate.toString().slice(-2);
        return { ...timing, date: formattedDate };
    };

    useEffect(() => {
        // Update date properties in timings array
        const updatedTimings = timeSlots.map(updateDate);
        setTimeSlots(updatedTimings);
        console.log(timeSlots)
    }, [selectedDate]); // Update effect only when timings change


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
                available: true,
                date: new Date().getDate()
            }
            timings.push(timeSlot);
        }

        setTimeSlots(timings);


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
                isBooked = ((filteredAppointment.length > 0) ? filteredAppointment.some((appointment) => (appointment.time == timeSlot.time)) : false);



                return { ...timeSlot, available: !isBooked };
            });

            setTimeSlots(updatedTimeSlots);
        }
        else {
            setTimeSlots(timeSlots.map((slot) => ({ ...slot, available: true }))); // Reset availability on empty search
        }



    }, [docid, unfilteredappointments, selectedDate]);

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
            date: selectedDate.toString().slice(-2), // Hardcoded for now
            time: selectedTime,
        };

        punchAppointment(newAppointment);
        getAppointmentsData();

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


            <ul className="doctorsList" style={{ margin: 'auto', display: 'flex', flexDirection: 'row', gap: 10 }}>
                {timeSlots.map((timeSlot) => (

                    <li key={timeSlot.id} style={{
                        display: 'flex',
                        aspectRatio: '1/1',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: (timeSlot.available) ? 'white' : 'lightgray',
                        pointerEvents: (timeSlot.available) ? '' : 'none',
                    }} onClick={() => {
                        handleTimeSlotClick(timeSlot)
                        console.log(selectedDate)
                    }}>
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