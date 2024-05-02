import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './Resources/Logo.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Alert from '@mui/joy/Alert';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import AuthContext from './AuthContext';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';









const SignUp = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()



  const onSignup = async (e) => {

    e.preventDefault()
    if (password.length < 6) {
      setPasswordError('Password must be more than 6 characters');
      return
    }

    setEmail(email.toLowerCase())
    console.log(email)

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        // Signed in
        const user = userCredential.user;
        console.log(user);
        addToDB()
        alert(`Sign up Successful, please login with your credentials : ${user.email}`)
        navigate("/login")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode == 'auth/email-already-in-use') {
          setEmailError('Email Already in use');
        }
        const errorMessage = error.message;
        // ..
      });
  }


  const addToDB = async () => {
    setEmail(email.toLowerCase())
    try {
      const docRef = await addDoc(collection(db, "users"), {
        fullName,
        email
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  if (!user) {
    return (

      <Box sx={() => ({
        display: 'flex',
        justifyContent: 'flex-end'
      })}>
        <GlobalStyles
          styles={{
            ':root': {
              '--Form-maxWidth': '800px',
              '--Transition-duration': '0.4s',
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
                width: '90%',
                maxWidth: 400,
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
                    Create an Account
                  </Typography>
                  <Typography level="body-sm">
                    Already have an account?{' '}
                    <Link href="/login" level="title-sm" color="success">
                      Sign in!
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
              <Stack gap={4} sx={{ mt: 2 }} >
                <form
                  onSubmit={onSignup}
                >
                  <FormControl required>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={email} onChange={(ev) => setEmail(ev.target.value.toLowerCase())} />
                  </FormControl>
                  {emailError ? <Alert variant="outlined" color="danger">{emailError}</Alert> : ""}
                  <FormControl required>
                    <FormLabel>Password</FormLabel>
                    <Input type={showPassword ? "text" : "password"} name="password" value={password} onChange={(ev) => setPassword(ev.target.value)}
                    />
                  </FormControl>
                  <FormControl required>
                    <FormLabel>Full Name</FormLabel>
                    <Input type="text" name="fullName" value={fullName} onChange={(ev) => setFullName(ev.target.value)}
                    />
                  </FormControl>
                  {passwordError ? <Alert variant="outlined" color="danger">{passwordError}</Alert> : ""}
                  <Stack direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    spacing={0.5}>
                    <Checkbox onChange={handleClickShowPassword} label="Show Password" width="20" />
                  </Stack>
                  <Stack gap={4} sx={{ mt: 2 }}>

                    <Button type="submit" color="success" fullWidth >
                      Sign up
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
            left: 0,
            top: 0,
            bottom: 0,
            right: { xs: 0, md: '50vw' },
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
      </Box>
    )
  }
  if (user) {
    // navigate("/");
    return (
      <Box fullWidth sx={{ height: '100vh', display: 'flex', flexDirection: 'column', gap: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Typography level="p" sx={{ fontSize: '1.5em' }}>You are currently logged in as {user.email}</Typography>
        <Typography level="p" sx={{ fontSize: '1.5em' }}>Please sign out first to create a new account!</Typography>
        <Button color='success' onClick={logout}>Sign Out</Button>
      </Box>
    )
  }
}



export default SignUp