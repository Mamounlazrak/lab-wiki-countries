import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import countries from './countries.json'
import CountriesList from './Components/CountriesList/CountriesList';
import CountryDetails from './Components/CountryDetails/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



function App() {

const [getCountries, setGetCountries] = useState([]);

useEffect(() => {
  axios
    .get('https://ih-countries-api.herokuapp.com/countries')
    .then((response) => {
      setGetCountries(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
},
[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
        <div className='row'>
          <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>

            <CountriesList countries={getCountries}></CountriesList>
          </div>
          <div class="col-7">
            <Routes>
              <Route path="/:countryCode" element={<CountryDetails countries={getCountries}/>}></Route>
            </Routes>
          </div>
        </div>
    </div>


    </div>
  );
}

export default App;
