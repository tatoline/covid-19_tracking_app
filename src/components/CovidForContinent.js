import axios from "axios"
import { useEffect, useState } from "react"
import { API_TOKEN, API_URL } from "../const"
import Continents from "../const/Continents"

const CovidForContinent = () => {

    const [isLoading, setLoading] = useState(false)
    const [data, setData] =useState([])

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${API_URL}continentData`, {
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
        <div className="flex items-center justify-center">
            <Continents />
        </div>
    )

}

export default CovidForContinent