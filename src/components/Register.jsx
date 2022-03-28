import React,{useState,useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext'

function Register() {
     let {handleAuth,logOut,setToken} = useContext(AuthContext);
  

    const [formvalue,setValue] = useState({
      username:"",
        email:"",
        password:"",
        mobile:""
    });
    function handleChange(e){
        let {name,value} = e.target;
        setValue({
            ...formvalue,
            [name] : value,
        })
        console.log(formvalue);
    };
    function submitForm(e) {
      e.preventDefault();
      console.log(formvalue);
      fetch(`https://masai-api-mocker.herokuapp.com/auth/register`, {
        method: "POST",
        body: JSON.stringify(formvalue),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          // setToken(res.token)
          // res.token?handleAuth():logOut()
        })
        .catch((err) => console.log(err));
    }
  

    const {email,password,username,mobile} = formvalue;
  return (
      <div>

          <form onSubmit={submitForm}>
              <input type="text" placeholder="username" name="username" onChange={handleChange} value={username}/>
              <input type="text" placeholder="Email" name="email" onChange={handleChange} value={email}/>
              <input type="text" placeholder="Password" name="password" onChange={handleChange} value={password}/>
              <input type="text" placeholder="mobile" name="mobile" onChange={handleChange} value={mobile}/>
              <input type="submit" value="redirected to the login page" />
          </form>

      </div>
  )
}
export default Register

