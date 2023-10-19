import axios from "axios"
import { useEffect, useState } from "react"
import "./styles/CovidForWorld.css"
import PropTypes from 'prop-types'
import Loading from "./Loading"

const CovidForWorld = ({onEarthClick}) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${process.env.REACT_APP_API_URL}world`)
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
        <div className="group flex flex-col items-center justify-center h-full overflow-hidden">
            {isLoading ? <Loading /> :
            <>
                <div onClick={handleOnClick} className="border-2 border-solid border-cyan-950 animate-border-pulse p-4 cursor-pointer">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-4">Total Cases: {data?.totalCases}</h1>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900 mb-6">Total Recovered: {data?.totalRecovered}</h1>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">Total Deaths: {data?.totalDeaths}</h1>
                </div>
                <div className="w-[2px] h-14 sm:h-16 md:h-20 lg:h-28 bg-cyan-950 animate-bg-pulse"></div>
                <div onClick={handleOnClick} className="fixed z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cyan-950
                                animate-text-pulse top-[27rem] sm:top-[32rem] md:top-[36rem] cursor-pointer">Click for details</div>
                <div className="w-[257px] h-[257px] sm:w-[302px] sm:h-[302px]  md:w-[369px] md:h-[369px] 
                                lg:w-[436px] lg:h-[436px] rounded-full border-2 border-solid border-cyan-950 p-4 animate-border-pulse">
                    <div onClick={handleOnClick} style={{transform: `scale(${scaleEarth})`}} className="w-[221px] h-[221px]
                                                                                                        sm:w-[266px] sm:h-[266px]
                                                                                                        md:w-[333px] md:h-[333px]
                                                                                                        lg:w-[400px] lg:h-[400px]
                                                                                                        bg-[length:466px] sm:bg-[length:560px]
                                                                                                        md:bg-[length:700px] lg:bg-[length:840px]
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