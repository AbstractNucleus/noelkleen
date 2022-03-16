import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";


export default function NavItem({ name, url, icon }) {
    const router = useRouter()
    return (
        <li>
            <Link href={url}>
                    <p className={
                        router.pathname == (url)
                            ? "text-[#E879F9] hover:text-[#E879F9] text-lg cursor-default"
                            : "text-[#747474] hover:text-[#E879F9] text-lg cursor-default"
                        }><FontAwesomeIcon icon={icon} /> {name}</p>
            </Link>
        </li>
    )
}