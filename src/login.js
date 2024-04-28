import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './Resources/Logo.jpg'
import Alert from '@mui/joy/Alert';
import GlobalStyles from '@mui/joy/GlobalStyles';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AuthContext from './AuthContext';





const Login = (props) => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const navigate = useNavigate()

  const onLogin = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => {
        alert(`Sign-in Successful | Welcome ${email}`)
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (error.code == 'auth/invalid-credential') {
          setPasswordError('Invalid Email or Password');
        }
        else if (error.code == 'auth/too-many-requests') {
          setPasswordError('Access to this account has been temporarily disabled due to many failed login attempts. Please try again later');
        }
        console.log(errorCode, errorMessage)
      });
  }


  return (

    <div>
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
          },
        }}
      />
      <Box
        sx={() => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(22px) brightness(1)',
          backgroundColor: 'rgba(255 255 255 / 0.2)'
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100dvh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <img src={logo} width={100}></img>
            </Box>

          </Box>
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              pb: 5,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              maxWidth: 400,
              width: '90%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
              [`& .MuiFormLabel-asterisk`]: {
                visibility: 'hidden',
              },
            }}
          >
            <Stack gap={4} sx={{ mb: 2 }}>
              <Stack gap={1}>
                <Typography component="h1" level="h3">
                  Sign in
                </Typography>
                <Typography level="body-sm">
                  New to WellNestX?{' '}
                  <Link href="/signup" level="title-sm" color="success">
                    Create your Account Now!
                  </Link>
                </Typography>
              </Stack>
            </Stack>
            <Divider
              sx={() => ({
                color: { xs: '#FFFFFF', md: 'text.tertiary' },

              })}
            >

            </Divider>
            <Stack gap={4} sx={{ mt: 2 }}>
              <form
                onSubmit={onLogin}
              >
                <FormControl required>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={email} onChange={(ev) => setEmail(ev.target.value)} />
                </FormControl>
                <FormControl required>
                  <FormLabel>Password</FormLabel>
                  <Input type={showPassword ? "text" : "password"} name="password" value={password} onChange={(ev) => setPassword(ev.target.value)} />
                </FormControl>
                {passwordError ? <Alert variant="outlined" color="danger">{passwordError}</Alert> : ""}
                <Stack direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={0.5}>
                  <Checkbox onChange={handleClickShowPassword} label="Show Password" width="20" />
                </Stack>
                <Stack gap={4} sx={{ mt: 2 }}>

                  <Button type="submit" color="success" endDecorator={<KeyboardArrowRight position="end" />} fullWidth >
                    Sign in
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>
          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" textAlign="center">
              © WellNestX {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage:
            'url(https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2)',
          },
        })}
      />
    </div>
  )
}

export default Login