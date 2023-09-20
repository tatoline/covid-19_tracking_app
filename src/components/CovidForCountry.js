import axios from "axios"
import { useEffect, useState } from "react"
import {API_URL, API_TOKEN} from "../const"
import CountryRow from "./CountryRow"


const CovidForCountry = () => {

    const [data, setData] = useState([])
    const [query, setQuery] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const fetchData = async () => {
        setIsLoading(true)
        const response = await axios.get(`${API_URL}countriesData?country=${query}`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setData(response.data.result)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [query])

    return(
        <>
            <div>
                <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search..."
                    className="w-full min-w-max max-w-xl shadow border rounded px-2 py-1 m-2 focus:outline-none focus:shadow-gray-800"/>
            </div>
            <div className="rounded shadow-md cursor-pointer grid-cols-[183px_repeat(3,minmax(126px,_1fr))]
                        sm:grid-cols-[195px_repeat(3,minmax(142px,_1fr))] sm:px-6 m-2 grid auto-cols-max
                        min-w-max divide-x-2 border-2 text-center font-semibold">
                <div className="col-span-1 ps-0 pe-3 sm:px-3 text-end">Country</div>
                <div className="col-span-1 px-1 sm:px-3">Total Case</div>
                <div className="col-span-1 px-1 sm:px-3">Total Recovered</div>
                <div className="col-span-1 px-1 sm:px-3">Total Death</div>
            </div>
            {isLoading && <p>Loading...</p>}
            {data.map( (item) => {
                return(
                    <CountryRow key={item.country} country={item.country} totalCases={item.totalCases} totalRecovered={item.totalRecovered} totalDeaths={item.totalDeaths} />
                )
            })}
        </>
    )
}

export default CovidForCountry