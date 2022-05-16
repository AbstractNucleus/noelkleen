import {
    faHouse,
    faDiceD20,
    faChessRook,
    faNewspaper,
    faTrashCan,
    faIcons,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import LoginLogout from "./LoginLogout"
import NavItem from "./NavItem"

export default function Navbar() {
    const nav_items = [
        {
            url: "/dicespace",
            icon: faDiceD20,
        },
        {
            url: "/gritcraft",
            icon: faChessRook,
        },
        {
            url: "/blog",
            icon: faNewspaper,
        },
        {
            url: "/testing",
            icon: faTrashCan,
        },
    ]

    return (
        <div className="fixed z-40 h-full w-14 bg-[#272727] text-center text-3xl shadow-md">
            <Link href="/" passHref>
                <FontAwesomeIcon
                    icon={faHouse}
                    className="mt-4 text-[#22D3EE] hover:text-[#E879F9]"
                />
            </Link>

            <div className="mx-[0.4rem] my-4 border border-[#747474]" />

            <nav>
                <ul className="space-y-8">
                    {nav_items.map((item, i) => (
                        <NavItem
                            url={item.url}
                            icon={item.icon}
                            key={item.url}
                        />
                    ))}
                    <br />
                    <LoginLogout />
                </ul>
            </nav>
        </div>
    )
}
