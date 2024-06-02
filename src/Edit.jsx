import React, { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { editUser } from './usersSlice';

const Edit = () => {
    const { id } = useParams();
    const userId = parseInt(id);
    const users = useSelector( state => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()
   const user = users.find((u) => u.id == userId);
   const {name , email} = user;
    const [updatedUserName, setUpdatedUserName] = useState(name);
    const [updatedUseremail, setUpdatedUserEmail] = useState(email);


const handleUpdate =(e)=>{
    e.preventDefault();
    dispatch(editUser({id: userId , name: updatedUserName, email: updatedUseremail}));
    navigate('/');
}

    return ( <form style={{width:'80%' , margin:"4rem auto", textAlign:'center'}}>
    <div className="form-group">
      <label htmlFor="userName" style={{marginBottom:"1rem", fontSize:'2rem'} }>Email address</label>
      <input type="text" className="form-control" id="userName" aria-describedby="emailHelp" placeholder="Enter your name" style={{marginBottom:"1rem"}}
      value={updatedUserName}
      onChange={(e) => setUpdatedUserName(e.target.value)}/>
      
    </div>
    <div className="form-group">
      <label htmlFor="userMail" style={{marginBottom:"1rem", fontSize:'2rem'}}>Password</label>
      <input type="email" className="form-control" id="userMail" placeholder="Enter your Email"  style={{marginBottom:"1rem"}} 
       value={updatedUseremail}  
        onChange={(e) => setUpdatedUserEmail(e.target.value)}
        />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
   
    <button type="submit" className="btn btn-primary" onClick={handleUpdate}>update</button>
  </form>);
}
 
export default Edit;