import React, { useState } from 'react'

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

//react router
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"

//toast
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"

//firebase
import firebase from "firebase/compat/app"
import "firebase/compat/auth"

//components
import Home from "./Pages/Home"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import PageNotFound from "./Pages/PageNotFound"
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import firbaseConfig from './Config/firbaseConfig';



//init firebase
firebase.initializeApp(firbaseConfig)


const App = () => {

  const [user,setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>
        <Header />
          <Routes>
            <Route exact path='/' element={<Home />}/>
            <Route exact path='/signin' element= {<SignIn />}/>
            <Route exact path='/signup' element={<SignUp />}/>
            <Route exact path='*' element={<PageNotFound />}/>
          </Routes>
          <Footer />
      </UserContext.Provider>
    </Router>
  )
}

export default App