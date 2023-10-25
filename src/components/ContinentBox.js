import { useEffect, useState } from "react"
import useWindowSize from "../hooks/useWindowSize"

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

    const {width} = useWindowSize()

    /* If screen width smaller than 768px (md), continent info box will be shown fixed and vertically centered.
     */
    const calculateContinentBoxForSmallScreens = () => {
        return {
            "x": "0",
            "y": "10"
        }
    }

    const [continentBoxResponsivePositions] = useState(
        {
            "north-america": {
                "md": {"x":"-2", "y":"-4"},
                "lg": {"x":"-3", "y":"-6"},
                "xl": {"x":"-5", "y":"-8"},
                "2xl": {"x":"-10", "y":"-9"}
            },
            "south-america": {
                "md": {"x":"-16", "y":"5"},
                "lg": {"x":"-22", "y":"6"},
                "xl": {"x":"-28", "y":"8"},
                "2xl": {"x":"-34", "y":"8"}
            },
            "europe": {
                "md": {"x":"-9", "y":"-5"},
                "lg": {"x":"-12", "y":"-11"},
                "xl": {"x":"-15", "y":"-13"},
                "2xl": {"x":"-16", "y":"-13"}
            },
            "africa": {
                "md": {"x":"10", "y":"2"},
                "lg": {"x":"13", "y":"3"},
                "xl": {"x":"16", "y":"4"},
                "2xl": {"x":"18", "y":"5"}
            },
            "asia": {
                "md": {"x":"5", "y":"3"},
                "lg": {"x":"11", "y":"5"},
                "xl": {"x":"12", "y":"6"},
                "2xl": {"x":"13", "y":"4"}
            },
            "australia": {
                "md": {"x":"5", "y":"3"},
                "lg": {"x":"7", "y":"4"},
                "xl": {"x":"11", "y":"6"},
                "2xl": {"x":"13", "y":"4"}
            },
        }
    )

    const [continentBoxPosition, setContinentBoxPosition] = useState(
        {
            "x": "0",
            "y": "0"
        }
    )

    useEffect( () => {
        // Assigning continent box position as responsive
        if(activeContinent && continentBoxResponsivePositions[activeContinent])  {
            if (width >= 1536) {
                setContinentBoxPosition(continentBoxResponsivePositions[activeContinent]['2xl'])
            }
            else if (width >= 1280 && width < 1536) {
                setContinentBoxPosition(continentBoxResponsivePositions[activeContinent]['xl'])
            }
            else if (width >= 1024 && width < 1280) {
                setContinentBoxPosition(continentBoxResponsivePositions[activeContinent]['lg'])
            }
            else if (width >= 768 && width < 1024) {
                setContinentBoxPosition(continentBoxResponsivePositions[activeContinent]['md'])
            }
            else if (width < 768) {  // Box will be shown fixed and vertically centered on mobile screens
                setContinentBoxPosition(calculateContinentBoxForSmallScreens())
            }
        }
    }, [width, continentBoxResponsivePositions, activeContinent])

    // Transition: translate smooth scroll effect
    const [xYPosition, setXYPosition] = useState([])
    useEffect(() => {
        let translateTimeout

        if(activeContinent){
            translateTimeout = setTimeout(() => {
                setXYPosition([continentBoxPosition.x, continentBoxPosition.y])
            }, 100)
        }

        return () => clearTimeout(translateTimeout)

    }, [activeContinent, continentBoxPosition])


    // Continent name adjustment for continent ids
    const formatContinentName = (name) => {
        return name.toLowerCase().replace(/ /g, '-')
    }

    // Setting array by continent ids
    const [continentData] = useState({})

    useEffect(() => {
        if(data && data.length > 0){
            data.forEach((item) => {
                item.continent = item.continent === "Oceania" ? "Australia" : item.continent
                let formattedContinentName = formatContinentName(item.continent)
                continentData[formattedContinentName] = item
            })
        }
    }, [data, activeContinent, continentData])

    return(
        (data && data.length > 0 && continentData[activeContinent]) && (
        <div key={activeContinent} className={` bg-slate-500 absolute rounded border-cyan-500 border-2 p-1 transition-all duration-500
            ${hide ? 'opacity-0 z-0' : 'opacity-70 z-20'}`}
            style={{transform: `translate(${xYPosition[0]}rem, ${xYPosition[1]}rem)`}}>
            {headers.map((item) => (
                <div key={`div${item.id}`} className="text-xs leading-3 lg:text-sm lg:leading-4 xl:text-base xl:leading-normal">
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