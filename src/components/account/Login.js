import React from 'react'
import { useState } from 'react';
import { Box, TextField, Button, styled, Typography } from '@mui/material'

const Component = styled(Box)`
width: 440px;
margin: auto;
background: white;
box-shadow: 7px 4px 9px 7px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0 '

});
const Wrapper = styled(Box)`
padding: 25px 35px;
display: flex;
flex:1;
flex-direction: column;
& > div, & > button, & > p {
  margin-top: 20px;
}

`
const LoginButton = styled(Button)`
text-transform: none;
background: Black;
color: white;
height: 48px;
border-radius: 2px;
`
const Login = () => {
  const [account, toggleAccount] = useState('login');
  const toggleSignup = () => {
    account === 'signup' ? toggleAccount('login'): toggleAccount('signup');
  }
  return (
    <Component>
      <Box>
        <Image src='images/logo.png' alt="Sign In" />
        {
          account === 'login' ?
            <Wrapper>
              <TextField variant="filled" label="Enter username" />
              <TextField variant="filled" label="Enter password" />
              <LoginButton variant="contained">Sign In</LoginButton>
              <Typography style={{ textAlign: `center` }}>Don't have an account?</Typography>
              <Button onClick={() => toggleSignup()}>
                Sign Up</Button>
            </Wrapper>
            :
            <Wrapper>
              <TextField variant="filled" label="Enter username" />
              <TextField variant="filled" label="Enter email" />
              <TextField variant="filled" label="Enter password" />
              <TextField variant="filled" label="Enter confirm password" />
              <Button variant="contained">Sign Up</Button>
              <Typography style={{ textAlign: `center` }}>Already have an account?</Typography>
              <LoginButton onClick={() => toggleSignup()}>
                Sign In</LoginButton>
            </Wrapper>
        }
        </Box>
      </Component>
  )
}

export default Login