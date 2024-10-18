import { useEffect, useState } from "react"
import { ICountry } from "../../Models/ICountry";
import { ListCountries } from "./Components/ListCountries";

const APIurl = "https://restcountries.com/v3.1/all"

export const Countries = () => {

    const [countries, setCountries] = useState<ICountry[] | []>([]);

    const getCountries = async () => {
        const response:Response = await fetch(APIurl)
        const data: ICountry[] = await response.json();
        console.log(data)
        setCountries(data)
    }

    useEffect( () =>{

        getCountries();

    }, []);

    return (
        <div>Countries
        <ListCountries countries={countries}/>
        </div>
    )
}