import axios from "axios"
import { useEffect, useState } from "react"
import Continents from "./Continents"
import ContinentBox from "./ContinentBox"
import Loading from "./Loading"

const CovidForContinent = () => {

    const [isLoading, setLoading] = useState(false)
    const [data, setData] =useState([])
    const [activeContinent, setActiveContinent] = useState()
    const [isHovered, setHovered] = useState(false)
    const [timerId, setTimerId] = useState(null)  // When a continent unhovered, info about that continent still will be visible for a specific second
    const [hide, setHide] = useState(true)

    const fetchData = async () => {
        setLoading(true)
        const response = await axios.get(`${process.env.REACT_APP_API_URL}continent`)
        setData(response.data.result)
        setLoading(false)
    }

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {

        /* This is blocking the flashing of continent info box.
        *  Continent SVG image has white gaps between countries.
        *  Since end-user without noticing moving their cursor from gaps,
        *  a little timeout is enough for starting hide process.
        */
        if (!isHovered) {
            const newTimerId = setTimeout(() => {
                setHide(true)
            }, 500)

            setTimerId(newTimerId)
            }

            else {
                setHide(false)
                if (timerId) {
                    clearTimeout(timerId)
                }
            }
    }, [isHovered])

    return(
        <div className="flex items-center justify-center -tr">
            {isLoading ? <Loading /> :
            <>
                <Continents isHovered={(bool) => setHovered(bool)} activeContinent={(id) => setActiveContinent(id)} />
                <ContinentBox activeContinent={activeContinent} hide={hide} data={data} />
            </>
            }
        </div>
    )
}

export default CovidForContinent