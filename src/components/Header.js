import { useState } from "react"
import Logo from "./Logo"
import MenuItem from "./MenuItem"

const Header = () => {

    const [menuItems] = useState(
        [
            {
                title: 'World Statistics',
                value: 1,
                active: true
            },
            {
                title: 'Country Statistics',
                value: 2,
                active: true
            },
            {
                title: 'Continent Statistics',
                value: 3,
                active: true
            }
        ]
    )

    return(
        <nav className="bg-gray-800 border-gray-200 px-2">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Logo />
                <div className="w-auto block">
                    <ul className="flex flex-row mt-4 font-medium">
                        {menuItems.map( (item) => <MenuItem active={item.active} title={item.title} />)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header