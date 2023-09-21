import axios from "axios"
import { useEffect, useState } from "react"
import {API_URL, API_TOKEN} from "../const"
import CountryRow from "./CountryRow"


const CovidForCountry = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setLoading] = useState(false)
    const [headers] = useState([
        {
            title: 'Country'
        },
        {
            title: 'Total Cases'
        },
        {
            title: 'Total Recovered'
        },
        {
            title: 'Total Deaths'
        },
    ])

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}countriesData?country=${query}`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [query])

    return(
        <>
            <div>
                <input value={query} onChange={(e) => {setQuery(e.target.value)}} placeholder="Search..."
                    className="w-full min-w-max max-w-xl shadow border rounded px-2 py-1 m-2 focus:outline-none focus:shadow-gray-800"/>
            </div>
            <div className="rounded shadow-md cursor-pointer grid-cols-[183px_repeat(3,minmax(126px,_1fr))]
                        sm:grid-cols-[195px_repeat(3,minmax(142px,_1fr))] sm:px-6 m-2 grid auto-cols-max
                        min-w-max divide-x-2 border-2 text-center font-semibold">
                {headers.map((header, index) => {
                    return(
                        <div key={header.title} className={`col-span-1 ps-0 pe-3 sm:px-3 ${index === 0 ? 'text-end' : ''}`}>{header.title}</div>
                    )
                })}
            </div>
            {isLoading ? <p>Loading...</p> :
            data.map( (item) => {
                return(
                    <CountryRow key={item.country} country={item.country} totalCases={item.totalCases} totalRecovered={item.totalRecovered} totalDeaths={item.totalDeaths} />
                )
            })}
        </>
    )
}

export default CovidForCountry