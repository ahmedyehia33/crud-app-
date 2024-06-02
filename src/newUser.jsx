import React, { useEffect, useState } from 'react';
import { addUser } from './usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const [name , setName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const users = useSelector(state => state.users);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const nextId = users.length + 1;
        dispatch(addUser({id: nextId, name , email}));
        setName('');
        setEmail('');
        navigate('/');
    }

    useEffect(()=>{
        console.log(name);
        console.log(email);
       
    });


    return ( <form style={{width:'80%' , margin:"4rem auto", textAlign:'center'}}>
        <div className="form-group">
          <label htmlFor="userName" style={{marginBottom:"1rem", fontSize:'2rem'} }>Email address</label>
          <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter your name" style={{marginBottom:"1rem"}} value={name} onChange={(e) => setName(e.target.value)}/>
          
        </div>
        <div className="form-group">
          <label htmlFor="userMail" style={{marginBottom:"1rem", fontSize:'2rem'}}>Password</label>
          <input type="email" className="form-control" id="userMail" placeholder="Enter your Email"    style={{marginBottom:"1rem"}}
          value={email}
          onChange={(e) => setEmail(e.target.value)} / >
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
       
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      </form>);
}
 
export default Signup;