import { createSlice } from '@reduxjs/toolkit';
import { users } from './users';




const usersSlice = createSlice({
    name:'users',
    initialState: users,
    reducers:{
        addUser:(state , action)=> {
          state.push(action.payload)
        },
        editUser: (state, action ) =>{
            const {id , name , email} = action.payload;
            const userToEdit = state.find(user => user.id === id);
            if (userToEdit) {
                userToEdit.name = name;
                userToEdit.email = email;
            }
            
        },
        deleteUser: (state, action)=>{
            const {id} = action.payload;
            return state.filter((u) => u.id != id)
        }
    }
})

export const { addUser, editUser , deleteUser} = usersSlice.actions;
export default usersSlice.reducer;