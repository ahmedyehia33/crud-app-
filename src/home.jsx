import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteUser } from './usersSlice';



const Home = () => {
    const users  = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [userIdToDelete, setUserIdToDelete] = useState(null);
    
    const handleDelete = () => {
      dispatch(deleteUser({ id: userIdToDelete }));
      setUserIdToDelete(null); // Reset the userIdToDelete after deletion
  };
    return ( <>
      <h2 style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'4rem'}}>Users</h2>
     <div style={{display:'flex' , justifyContent:'center', width:'100%', marginTop:'1rem'}}> <Link to='/signup'> <button className="btn btn-primary">Add a new user</button> </Link></div>
      <table className="table table-hover" style={{ marginLeft: 'auto', marginTop: '4rem', width: '90%', marginRight: 'auto', border: '3px solid black'}}>
  <thead>
    <tr>
      <th scope="col"></th>
      
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope='col'></th>
    </tr>
  </thead>
  <tbody>
   {users.map((user, index)=> (
    <tr key={user.id}>
        
        <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>
        <Link to={`/edit/${user.id}`}> <button className="btn btn-primary" style={{ marginRight: '0.5rem' } }>Edit</button></Link>
        <button
                                            className="btn btn-danger"
                                            onClick={() => setUserIdToDelete(user.id)}
                                            style={{ cursor: 'pointer' }} // Change cursor to pointer
                                        >
                                            Delete
                                        </button> 
      </td>
    </tr>
   ))}
  </tbody>
</table>
{userIdToDelete && (
                <div className="modal-confirm" 
                style={
                  {position:'absolute', top:'0', right:'0', marginTop:'1rem', display:'grid',
                  justifyContent:'center',
                  alignItems:'center'

                }}>
                    <div className="modal-confirm-content">
                        <p>Are you sure you want to delete this user?</p>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <button className="btn btn-secondary mr-2" onClick={() => setUserIdToDelete(null)}>Cancel</button>
                            <button className="btn btn-danger" onClick={handleDelete}>Confirm</button>
                        </div>
                    </div>
                </div>
            )}

    
    </>
     );
}
 
export default Home;