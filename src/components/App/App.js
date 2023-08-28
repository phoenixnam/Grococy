import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Contents/html/Home';
import Login from '../Contents/html/login';
import SignUp from '../Contents/html/Signup';

function App() {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<SignUp />} />
               <Route path='/home' element={<Home />} />
            </Routes>
         </Router>
      </>
   );
}

export default App;