import React, { useState, useEffect } from 'react';
// import countries from '../../countries.json'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';



const findCountry = (countries, code) => {
  const fromCodeToCountry =  countries.find((country) => {
      console.log('hey')

        return country.alpha3Code === code;
    })
    return fromCodeToCountry.name.official;
}

function CountryDetails(props) {
    
    
    const {countryCode} = useParams();
    const [getCountry, setGetCountry] = useState('');


    useEffect(() => {
        axios
            .get(`https://ih-countries-api.herokuapp.com/countries/${countryCode}`)
            .then((response) => {
            setGetCountry(response.data)
            })
            .catch((err) => console.log(err))
    }, 
    [countryCode])

    

    const foundCountry = props.countries.find((country) => {
        return country.alpha3Code === countryCode;
    });


    console.log(foundCountry)
  return (
    <div> 
    {!getCountry && <h1>No country found!</h1>}
    {getCountry && 
        <>

        <h1>{getCountry.name.official}</h1>
            <table className='table'>
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{getCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {`${getCountry.area} km`}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {getCountry.borders.map((border) => {
                            return <li><Link to={`/${border}`}>{findCountry(props.countries, border)}</Link></li> 
                        })}
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </>
    }
    </div>
  )
}

export default CountryDetails