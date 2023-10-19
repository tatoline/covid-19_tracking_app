import axios from "axios"
import { useEffect, useState, useMemo } from "react"
import CountryRow from "./CountryRow"
import Loading from "./Loading"

const CovidForCountry = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(false)
    const [filterCountry, setFilterCountry] = useState('');
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
        const response = await axios.get(`${process.env.REACT_APP_API_URL}country`)
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Country filtering process (Optimized with useMemo since getting whole countries from API is expensive)
    const filteredCountries = useMemo(() => {
        return data.filter(item => item.country.toLowerCase().includes(filterCountry.toLowerCase()));
    }, [data, filterCountry])

    return(
        <>
            <div>
                <input value={filterCountry} onChange={e => setFilterCountry(e.target.value)} type="text" placeholder="Search..."
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
            {isLoading ? <Loading /> :
            filteredCountries.map( (item) => {
                return(
                    <CountryRow key={item.country} country={item.country} totalCases={item.totalCases} totalRecovered={item.totalRecovered} totalDeaths={item.totalDeaths} />
                )
            })}
        </>
    )
}

export default CovidForCountry