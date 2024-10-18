import React from "react"
import { ICountry } from "../../../Models/ICountry"

interface ICountriesProps{
    countries : ICountry[]
}
// React.FC -- react funcional components
export const ListCountries:React.FC<ICountriesProps> = ({countries}) => {

    return (
        <>
            {countries.map( (country) => {
               return <h2>{country.name.common}</h2>
            }) }
        </>
    )
}