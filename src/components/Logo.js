import PropTypes from 'prop-types'

const Logo = ({title, logo}) => {
    return(
        <div className="flex items-center">
            <img src={logo} alt={title} className="mr-3 h-6" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                {title}
            </span>
        </div>
    )
}

Logo.propTypes = {
    title: PropTypes.string,
    logo: PropTypes.string
}

Logo.defaultProps = {
    title: 'Covid-19 Tracking App',
    logo: 'https://raw.githubusercontent.com/tatoline/covid-19_tracking_app/master/src/img/logo.png'
}

export default Logo