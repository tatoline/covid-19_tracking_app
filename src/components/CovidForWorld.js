import axios from "axios"
import { useEffect, useState } from "react"
import { API_TOKEN, API_URL } from "../const"

const CovidForWorld = () => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}totalData`, {
            headers: {
                authorization: API_TOKEN
            }
        })
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div className="flex flex-col items-center justify-center h-full">
            {isLoading ? <p>Loading...</p> :
            <>
                <h1 className="text-6xl text-gray-900 mb-4">Total Cases: {data?.totalCases}</h1>
                <h1 className="text-6xl text-gray-900 mb-6">Total Recovered: {data?.totalRecovered}</h1>
                <h1 className="text-6xl text-gray-900">Total Deaths: {data?.totalDeaths}</h1>
            </>
            }
        </div>
    )
}

export default CovidForWorld