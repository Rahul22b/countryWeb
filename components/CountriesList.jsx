import React, { useEffect, useState } from 'react'
import fallbackCountriesData from '../countriesData'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies,region,subregion,languages,maps,population,flags,coatOfArms')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCountriesData(data)
        }
        else{
          setCountriesData(fallbackCountriesData)
        }
        
      })
  }, [])

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  return (
    <>
      <div className="countries-container">
        {countriesData
          .filter((country) =>
            country.name.common.toLowerCase().includes(query)
          )
          .map((country) => {
            return (
              <CountryCard
                key={country.name.common}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital?.[0]}
                data={country}
              />
            )
          })}
      </div>
    </>
  )
}
