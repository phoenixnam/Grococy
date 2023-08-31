import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../Contents/html/Home';
import Login from '../Contents/html/login';
import SignUp from '../Contents/html/Signup';
import DetailPage from '../Contents/html/DetailPage';
import Sanpham from '../Contents/html/A';
function App() {

   return (
      <>
         {/* <Router>
            <Routes>
               <Route exact path="/sanpham" component={Sanpham} />
               <Route path="/detail/:id" component={DetailPage} />
            </Routes>
         </Router> */}
         

         {/* <Router>
            <Routes>
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<SignUp />} />
               <Route path='/home' element={<Home />} />
               <Route path="/categories/:id" component={ProductDetail} />
            </Routes>
         </Router> */}

      </>
   );
}

export default App;