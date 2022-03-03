import React from 'react'
// import countries from '../../countries.json'
import { Link, useParams } from 'react-router-dom';


const findCountry = (countries, code) => {
  const fromCodeToCountry =  countries.find((country) => {
      console.log('hey')

        return country.alpha3Code === code;
    })
    return fromCodeToCountry.name.official;
}


function CountryDetails(props) {
    const {countryCode} = useParams();
    const foundCountry = props.countries.find((country) => {
        return country.alpha3Code === countryCode;
    });


    console.log(foundCountry)
  return (
    <div> 
    {!foundCountry && <h1>No country found!</h1>}
    {foundCountry && 
        <>

        <h1>{foundCountry.name.official}</h1>
            <table className='table'>
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{foundCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    {`${foundCountry.area} km`}
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        {foundCountry.borders.map((border) => {
                            return <li><Link to={`/${border}`}>{findCountry(props.countries, border)}</Link></li> 
                            {/* return <li><Link to={`/${border}`}>{border}</Link></li>  */}
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