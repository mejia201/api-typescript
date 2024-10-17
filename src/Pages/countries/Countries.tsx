import { useEffect, useState } from "react"
import { ICountry } from "../../Models/ICountry";

const APIurl = "https://restcountries.com/v3.1/all"

export const Countries = () => {

    const [countries, setCountries] = useState();

    const getCountries = async () => {
        const response:Response = await fetch(APIurl)
        const data: ICountry[] = await response.json();
        console.log(data)
    }

    useEffect( () =>{

        getCountries();

    }, []);

    return (
        <div>Countries</div>
    )
}