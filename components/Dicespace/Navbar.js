import { faBook, faChessKnight, faEnvelope, faHouse, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import NavItem from "./NavItem";
import TestModal from "./TestModal";


export default function Navbar() {
    const [open, setOpen] = useState(false)
    const items = [
        {
            name: "Overview",
            url : "/dicespace",
            icon : faHouse
        },
        {
            name: "Campaigns",
            url : "/dicespace/campaigns",
            icon : faChessKnight
        },
        {
            name: "Characters",
            url : "/dicespace/characters",
            icon : faUsers
        },
        {
            name: "Library",
            url : "/dicespace/library",
            icon : faBook
        },
    ]

    return (
        <>
    <div className="text-3xl z-40">
        <nav>
            <ul className="justify-center flex space-x-16">
                <FontAwesomeIcon icon={faEnvelope} className="float-right" onClick={() => {setOpen(true)}} />
                {items.map((item) => (
                    <NavItem name={item.name} url={item.url} icon={item.icon} />
                ))}
            </ul>
            <div className="mt-4 mb-8 border border-[#747474]" />
        </nav>
    </div>
    <div className={open == false ? "hidden fixed z-50" : "block fixed z-50"}>
            <div className="min-h-screen">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75">

                <button className="w-fit h-fit" onClick={() => {setOpen(false)}}>
                    CLOSE
                </button>

                </div>
            </div>
        </div>
    </>
)}