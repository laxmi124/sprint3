import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../contexts/AuthContext';

const AllLinks = styled(Link)`
text-decoration :none;
margin:2vh;
color:red;
`;

const LoginButton = styled.button`
height:50px;
width:fit-content;
background-color:#cecece;
align-items:center;
margin:3vh;
`
const LogOutButton = styled.button`
height:50px;
width:fit-content;
background-color:#cecece;
align-items:center;
margin:3vh;
`

function Navbar() {

    const {isAuth} = React.useContext(AuthContext)
  return (
    <div>
       
        <AllLinks to='/'>Home</AllLinks>
        <AllLinks to='/Login'>Login</AllLinks>
        <AllLinks to='/Products'>Product</AllLinks>
        <AllLinks to='/Register'>Register</AllLinks>

    
    {
        isAuth? <LoginButton>Log In</LoginButton>:<LogOutButton> Log Out</LogOutButton>
    }
      
       
    </div>
  )
}

export default Navbar