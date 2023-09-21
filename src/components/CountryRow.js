import PropTypes from 'prop-types'

const CountryRow = ({country, totalCases, totalRecovered, totalDeaths}) => {
    return(
        <div className="rounded shadow-md cursor-pointer sm:hover:shadow-xl grid-cols-[183px_repeat(3,minmax(126px,_1fr))]
                        sm:grid-cols-[195px_repeat(3,minmax(142px,_1fr))] sm:hover:scale-105 transition-all sm:px-6 min-w-max
                        m-2 grid auto-cols-max divide-x-2 border-2 text-center">
            <div className="col-span-1 ps-0 pe-3 sm:px-3 text-end">{country}</div>
            <div className="col-span-1 px-1 sm:px-3">{totalCases}</div>
            <div className="col-span-1 px-1 sm:px-3">{totalRecovered}</div>
            <div className="col-span-1 px-1 sm:px-3">{totalDeaths}</div>
        </div>
    )
}

CountryRow.propTypes = {
    country: PropTypes.string,
    totalCases: PropTypes.string,
    totalRecovered: PropTypes.string,
    totalDeaths: PropTypes.string
}

CountryRow.defaultProps = {
    country: 'Not Provided',
    totalCases: 0,
    totalRecovered: 0,
    totalDeaths: 0
}

export default CountryRow