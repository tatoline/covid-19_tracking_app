import axios from "axios"
import { useEffect, useState } from "react"
import "./styles/CovidForWorld.css"
import PropTypes from 'prop-types'
require('dotenv').config()

const CovidForWorld = ({onEarthClick}) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${process.env.API_URL}world`)
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    // When the Earth image clicked, it will switch to the continent statistics page with animation
    const [scaleEarth, setScaleEarth] = useState(1)
    const handleOnClick = () => {
        setScaleEarth(5)
        setTimeout(() => {
            onEarthClick(3)     
        }, 500)
    }

    return(
        <div className="flex flex-col items-center justify-center h-full overflow-hidden">
            {isLoading ? <p>Loading...</p> :
            <>
                <div className="border-2 border-solid border-cyan-950 animate-border-pulse p-4">
                    <h1 className="text-4xl text-gray-900 mb-4">Total Cases: {data?.totalCases}</h1>
                    <h1 className="text-4xl text-gray-900 mb-6">Total Recovered: {data?.totalRecovered}</h1>
                    <h1 className="text-4xl text-gray-900">Total Deaths: {data?.totalDeaths}</h1>
                </div>
                <div className="w-[2px] h-28 bg-cyan-950 animate-bg-pulse"></div>
                <div className="w-[436px] h-[436px] rounded-full border-2 border-solid border-cyan-950 p-4 animate-border-pulse">
                    <div onClick={handleOnClick} style={{transform: `scale(${scaleEarth})`}} className="w-[400px] h-[400px] bg-[length:840px]
                    rounded-full cursor-pointer transition-all duration-500
                    bg-[url('https://raw.githubusercontent.com/tatoline/covid-19_tracking_app/master/src/img/Earth-Color4096.jpg')]
                    " id="earth"></div>
                </div>
            </>
            }
        </div>
    )
}

CovidForWorld.propTypes = {
    onEarthClick: PropTypes.func
}

CovidForWorld.defaultProps = {
    onEarthClick: () => null
}

export default CovidForWorld