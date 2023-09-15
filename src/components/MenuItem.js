import PropTypes from 'prop-types'

const MenuItem = ({title, active, hide, onClick}) => {
    return(
        hide ??
        <li>
            <button onClick={onClick} className={`menu-item block border-0 py-2 pr-4 pl-3 hover:text-blue-200 cursor-pointer ${
                active ? 
                    'text-blue-700' : 
                    'text-gray-400' }`}>
                {title}
            </button>
        </li>
    )
}

MenuItem.propTypes = {
    title: PropTypes.string,
    active: PropTypes.bool,
    show: PropTypes.bool,
    onClick: PropTypes.func
}

MenuItem.defaultProps = {
    title: 'Covid-19 Tracking App',
    active: false,
    show: false,
    onClick: () => null
}

export default MenuItem