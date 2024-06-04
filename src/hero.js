
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Card, Typography, Button } from '@mui/joy'


export default function Hero({ title }) {

    const navigate = useNavigate()
    return (

        <Box //Hero
            sx={{//the hero section style (:'( ))
                display: 'flex',
                flexDirection: 'row',
                gap: 2,
                background: '#2c554b',
                color: '#f0f4f4',
                padding: { lg: '25px', md: '10px 25px' },
                minHeight: { lg: '15dvh', md: '10dvh' },
                borderRadius: '15px',
                position: 'relative',
                top: 0,
                left: 0,
                width: '100%',
                justifyContent: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                zIndex: 1,
            }}>
            <Typography variant="h1" sx={{ color: '#f0f1f1', fontSize: '36px', fontFamily: 'Montserrat !important', fontWeight: 'bold' }} >{title}</Typography>
            <Button sx={{
                fontFamily: 'Montserrat !important', backgroundColor: '#bbea93',
                color: '#2c554b'
            }} variant="soft" color='success' onClick={() => { navigate('/chat') }}>Talk with WellNestX AI !</Button>
        </Box >)
}