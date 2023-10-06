import { useState } from "react"
import Logo from "./Logo"
import MenuItem from "./MenuItem"
import PropTypes from 'prop-types'

const Header = ({activeId, onMenuChange}) => {

    const [_activeId, setActiveId] = useState(activeId)

    const [menuItems] = useState(
        [
            {
                id: 1,
                title: 'World Statistics',
                active: true
            },
            {
                id: 2,
                title: 'Country Statistics',
                active: true
            },
            {
                id: 3,
                title: 'Continent Statistics',
                active: true
            }
        ]
    )

    return(
        <nav className="bg-gray-800 border-gray-200 px-2 py-2.5">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo />
                <div className="w-auto block">
                    <ul className="flex flex-row mt-4 font-semibold text-xs space-x-8">
                        {menuItems.map( (item) => 
                            <MenuItem
                                key={item.id}
                                active={item.id === _activeId }
                                title={item.title}
                                onClick={() => {
                                    setActiveId(item.id)
                                    onMenuChange(item.id)
                                }}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

Header.propTypes = {
    activeId: PropTypes.number,
    onMenuChange: PropTypes.func
}

Header.defaultProps = {
    activeId: 1,
    onMenuChange: () => null
}

export default Header