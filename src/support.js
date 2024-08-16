import { Box } from '@mui/joy';
import Sidebar from './Dashboard/components/SIdebar'
import Header from './Dashboard/components/Header';
import CssBaseline from '@mui/joy/CssBaseline';
const Support = () => {

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        aligncontent: 'center',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '25px',
        backgroundColor: '#CAE6B2',

    };

    const headingStyle = {
        fontSize: '2rem',
        marginBottom: '20px'
    };

    const listStyle = {
        listStyleType: 'none',
        padding: '0'
    };

    const listItemStyle = {
        margin: '10px 0'
    };



    return (
        <div>
            <CssBaseline />
            <Box sx={{ display: 'flex', height: '100dvh', background: '#f5f5f5' }}>
                <Sidebar />
                <Header />
                <Box //main
                    component="main"
                    className="MainContent"
                    sx={{
                        boxSizing: 'border-box',
                        backdropFilter: 'blur(22px)',
                        pt: { xs: 'calc(25px + var(--Header-height)) !important', md: 3 },
                        padding: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        columnGap: 0,
                        gap: { md: 1, xs: 3 },
                        overflow: 'auto',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'flex-start',
                        flexWrap: 'no-wrap',

                    }}>

                    <Box style={containerStyle}>

                        <h1 style={headingStyle}>Support</h1>
                        <p>If you need any help, feel free to contact us through one of the following methods:</p>
                        <ul style={listStyle}>
                            <li style={listItemStyle}>Email: support@example.com</li>
                            <li style={listItemStyle}>Phone: +1 (123) 456-7890</li>

                        </ul>

                    </Box>
                </Box>


            </Box>
        </div>
    );
};

export default Support;