import React from 'react';
import { BrowserRouter as Router, Route, Routes, RouterProvider } from 'react-router-dom';
import Home from './home';
import Edit from './Edit';
import Signup from './newUser';

const App = () => {
    return (   <Router>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/edit/:id' element={<Edit/>}/>
            <Route path='/signup' element={<Signup/>} />

        </Routes>
    </ Router> );
}
 
export default App;