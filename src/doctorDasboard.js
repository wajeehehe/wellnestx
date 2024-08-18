import { Box } from '@mui/joy';
import Sidebar from './Dashboard/components/SIdebar'
import Header from './Dashboard/components/Header';
import CssBaseline from '@mui/joy/CssBaseline';




const Docdash = () => {

    function createData(id, name, age, sex, diagnosis) {
        return { id, name, age, sex, diagnosis };
    }

    const rows = [
        createData(122, 'Jhon Doe', 59, 'M', 'Depression'),
        createData(146, 'Abdulrehman Arshad', 36, 'M', 'Trauma'),
        createData(321, 'Javeria Munir', 'F', 24, 'Anxiety'),
        createData(456, 'Rimsha Ikhlaq', 'F', 50, 'Depression'),
        createData(247, 'Javeed Chaudary', 'M', 27, 'Personality Disorder'),
    ];



    return (
        <div>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100dvh', background: '#f5f5f5' }}>
                <Sidebar />
                <Header />
                <Box //main
                    component="main"
                    className="DashMain"
                    sx={{

                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        flexDirection: 'column',
                        padding: { xs: 2, sm: 2, md: 3 },
                        gridGap: '16px',
                        width: '100%',
                        flexWrap: 'wrap',


                    }}>
                    <Box>
                        <h1>DASHBOARD</h1>
                    </Box>
                    <ul className="boxinfo" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                        gap: '50px',
                        listStyleType: 'none',
                        padding: '0',
                        width: '75%',
                        marginTop: '36px'
                    }}>
                        <li>
                            <i class='bx bx-user-check'></i>
                            <span className='text'>
                                <h3>115</h3>
                                <p>New Patients</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bx-happy'></i>
                            <span className='text'>
                                <h3>80%</h3>
                                <p>Satisfaction</p>
                            </span>
                        </li>
                        <li>
                            <i class='bx bx-plus-medical' ></i>
                            <span className='text'>
                                <h3>200</h3>
                                <p>Appointments</p>
                            </span>
                        </li>
                    </ul>

                    <Box className="tabledata">
                        <div className="appointment-list">
                            <div className="head">
                                <h3>Recent Appointments</h3>
                                <i class='bx bx-search-alt'></i>
                                <i class='bx bx-filter' ></i>
                            </div>



                            <table  >
                                <thead>
                                    <tr>
                                        <th>Pt.ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Sex</th>
                                        <th>Diagnosis</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row) => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.name}</td>
                                            <td>{row.age}</td>
                                            <td>{row.sex}</td>
                                            <td>{row.diagnosis}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>
                        <Box className="todo">
                            <Box className="head">
                                <h2>TODO List</h2>
                                <i class='bx bx-bell-plus'></i>
                                <i class='bx bx-filter' ></i>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
        </div >
    );

};

export default Docdash;