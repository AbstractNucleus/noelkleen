import {
    faBook,
    faChessKnight,
    faEnvelope,
    faHouse,
    faUsers,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import NavItem from "./NavItem"

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const items = [
        {
            name: "Overview",
            url: "/dicespace",
            icon: faHouse,
        },
        {
            name: "Campaigns",
            url: "/dicespace/campaigns",
            icon: faChessKnight,
        },
        {
            name: "Characters",
            url: "/dicespace/characters",
            icon: faUsers,
        },
        {
            name: "Library",
            url: "/dicespace/library",
            icon: faBook,
        },
    ]

    return (
        <>
            <div className="z-40 text-3xl">
                <nav>
                    <ul className="flex justify-center space-x-16">
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="float-right"
                            onClick={() => {
                                setOpen(true)
                            }}
                        />
                        {items.map((item) => (
                            <NavItem
                                name={item.name}
                                url={item.url}
                                icon={item.icon}
                                key={item.name}
                            />
                        ))}
                    </ul>
                    <div className="mt-4 mb-8 border border-[#747474]" />
                </nav>
            </div>
            <div
                className={
                    open == false ? "fixed z-50 hidden" : "fixed z-50 block"
                }
            >
                <div className="min-h-screen">
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
                        <button
                            className="h-fit w-fit"
                            onClick={() => {
                                setOpen(false)
                            }}
                        >
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
