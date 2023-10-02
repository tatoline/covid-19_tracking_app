import { useEffect, useState } from "react"

const ContinentBox = ({activeContinent, hide, data}) => {

    const [headers] = useState([
        {
            id: 'continent',
            title: 'Continent'
        },
        {
            id: 'totalCases',
            title: 'Total Cases'
        },
        {
            id: 'newCases',
            title: 'New Cases'
        },
        {
            id: 'totalRecovered',
            title: 'Total Recovered'
        },
        {
            id: 'totalDeaths',
            title: 'Total Deaths'
        },
        {
            id: 'newDeaths',
            title: 'New Deaths'
        },
        {
            id: 'activeCases',
            title: 'Active Cases'
        },
    ])

    const [continentBoxPositions] = useState(
        {
            "north-america": {"x":"-10", "y":"-9"},
            "south-america": {"x":"-34", "y":"8"},
            "europe": {"x":"-16", "y":"-13"},
            "africa": {"x":"18", "y":"5"},
            "asia": {"x":"13", "y":"4"},
            "australia": {"x":"13", "y":"4"},
        }
    )

    // Transition: translate smooth scroll effect
    const [xYPosition, setXYPosition] = useState([])
    useEffect(() => {
        let translateTimeout

        if(activeContinent){
            translateTimeout = setTimeout(() => {
                setXYPosition([continentBoxPositions[activeContinent].x, continentBoxPositions[activeContinent].y])
            }, 100)
        }

        return () => clearTimeout(translateTimeout)

    }, [activeContinent, continentBoxPositions])


    // Continent name adjustment for continent ids
    const formatContinentName = (name) => {
        return name.toLowerCase().replace(/ /g, '-')
    }

    // Setting array by continent ids
    const [continentData] = useState({})

    useEffect(() => {
        // console.log("data", JSON.stringify(data))
        if(data && data.length > 0){
            data.forEach((item) => {
                item.continent = item.continent === "Oceania" ? "Australia" : item.continent
                let formattedContinentName = formatContinentName(item.continent)
                continentData[formattedContinentName] = item
            })
        }
    }, [data, activeContinent])

    return(
        (data && data.length > 0 && continentData[activeContinent]) && (
        <div  key={activeContinent} className={`h-44 w-60 bg-slate-500 absolute rounded border-cyan-500 border-2 p-1 transition-all duration-500
            ${hide ? 'opacity-0' : 'opacity-70'}`}
            style={{transform: `translate(${xYPosition[0]}rem, ${xYPosition[1]}rem)`}}>
            {headers.map((item) => (
                <div key={`div${item.id}`}>
                    <span key={item.id} className="font-semibold">{item.title}: </span>
                    {continentData[activeContinent] && (
                        <span key={`info${item.id}`} >{continentData && continentData[activeContinent] && continentData[activeContinent][item.id]}</span>
                    )}
                </div>
            ))}
        </div>
        )
    )
}

export default ContinentBox