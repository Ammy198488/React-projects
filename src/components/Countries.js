import React from 'react'
import {useState, useEffect} from "react"

const countriesUrl ='https://restcountries.com/v2/all';
const Countries = () => {
    const [countries, setCountries] = useState([])

    const countryData = async() => {
        const response = await fetch(countriesUrl)
        const country = await response.json()
        setCountries(country)
        console.log(country)
    }
    useEffect(() => {
        countryData()
    }, [])

  return (
    <>
        {countries.map((countryData) => {
            const {code, name, population, flag, region, capital} = countryData;
            return (
                <section key={code}>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card">
                                <img src={flag} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h1>{ name}</h1>
                                    <h2>Population: <span>{ population}</span></h2>
                                    <h3>Region: <span>{ region}</span></h3>
                                    <h4>Capital: <span>{ capital}</span></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )
        })}
    </>
  )
}

export default Countries
