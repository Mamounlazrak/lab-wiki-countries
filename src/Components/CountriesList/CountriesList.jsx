import React from 'react'
import { Link, NavLink } from 'react-router-dom'
// import countries from '../../countries.json'


function CountriesList(props) {
  return (
            <div className="list-group">
              {props.countries.map((country) => {
                  return <Link to={`/${country.alpha3Code}`} className='list-group-item list-group-item-action'>
                  <p><img src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`} alt="Flag" /></p>
                  <p>{country.name.official}</p>
                  </Link>
              })}
              
        </div>
  )
}

export default CountriesList