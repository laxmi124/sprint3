import React,{useState,useContext} from 'react';
import {AuthContext} from '../contexts/AuthContext'

function Login() {
     let {handleAuth,logOut,setToken} = useContext(AuthContext);
  

    const [formvalue,setValue] = useState({
        email:"",
        password:"",
    });
    function handleChange(e){
        let {name,value} = e.target;
        setValue({
            ...formvalue,
            [name] : value,
        })
        console.log(formvalue);
    };
    function submitForm(e){
        e.preventDefault()
        console.log(formvalue);
        fetch(`https://masai-api-mocker.herokuapp.com/auth/login`,{
            method: 'POST',
            body: JSON.stringify(formvalue),
            headers:{
                "Content-Type": "application/json",
            }
        })
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            // setToken(res.token)
            // res.token?handleAuth():logOut()
        })
        .catch((err)=>console.log(err));
    };;


   
    const {email,password} = formvalue;
  return (
      <div>

          <form onSubmit={submitForm}>
              <input type="text" placeholder="Email" name="email" onChange={handleChange} value={email}/>
              <input type="text" placeholder="Password" name="password" onChange={handleChange} value={password}/>
              <input type="submit" value="submit" />
          </form>
      </div>
  )
}
export default Login

