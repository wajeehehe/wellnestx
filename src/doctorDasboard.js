import { Box } from '@mui/joy';
import Sidebar from './Dashboard/components/SIdebar'
import Header from './Dashboard/components/Header';
import CssBaseline from '@mui/joy/CssBaseline';




const Docdash = () => {



    const rows = [
        { ptid: 122, name: 'Jhon Doe', age: 59, sex: 'M', diagnosis: 'Depression' },
        { ptid: 146, name: 'Abdulrehman Arshad', age: 36, sex: 'M', diagnosis: 'Trauma' },
        { ptid: 321, name: 'Javeria Munir', sex: 'F', age: 24, diagnosis: 'Anxiety' },
        { ptid: 456, name: 'Rimsha Ikhlaq', sex: 'F', age: 50, diagnosis: 'Depression' },
        { ptid: 247, name: 'Javeed Chaudary', sex: 'M', age: 27, diagnosis: 'Personality Disorder' }
    ];



    return (
        <div>
            <CssBaseline />
            <Box sx={{ display: 'flex', background: '#f5f5f5' }}>
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
                        flexWrap: 'nowrap',


                    }}>
                    <Box>
                        <h1>DASHBOARD</h1>
                    </Box>
                    {/* <ul className="boxinfo" style={{
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
                    </ul> */}
                    <Box sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' }, width: { xs: '100%', md: '90% !important' } }}>
                        <Box className="iconBox" sx={{}}>
                            <i class='bx bx-plus-medical'></i>
                            <span className='text'>
                                <h3>200</h3>
                                <p>Appointments</p>
                            </span>
                        </Box>
                        <Box className="iconBox" sx={{}}>
                            <i class='bx bx-plus-medical'></i>
                            <span className='text'>
                                <h3>200</h3>
                                <p>Appointments</p>
                            </span>
                        </Box>
                        <Box className="iconBox" sx={{}}>
                            <i class='bx bx-plus-medical'></i>
                            <span className='text'>
                                <h3>200</h3>
                                <p>Appointments</p>
                            </span>
                        </Box>
                        <Box className="iconBox" sx={{}}>
                            <i class='bx bx-plus-medical'></i>
                            <span className='text'>
                                <h3>200</h3>
                                <p>Appointments</p>
                            </span>
                        </Box>


                    </Box>

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
                                        <tr key={row.ptid}>
                                            <td>{row.ptid}</td>
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