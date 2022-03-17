import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useRouter } from "next/router"
import Link from "next/link"

export default function NavItem({ name, url, icon }) {
    const router = useRouter()
    return (
        <li>
            <Link href={url} passHref>
                <p
                    className={
                        router.pathname == url
                            ? "cursor-default text-lg text-[#E879F9] hover:text-[#E879F9]"
                            : "cursor-default text-lg text-[#747474] hover:text-[#E879F9]"
                    }
                >
                    <FontAwesomeIcon icon={icon} /> {name}
                </p>
            </Link>
        </li>
    )
}
