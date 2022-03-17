import { useSession, signIn, signOut } from "next-auth/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserXmark, faUserCheck } from "@fortawesome/free-solid-svg-icons"

export default function LoginLogout() {
    const { data: session } = useSession()
    if (session) {
        return (
            <li key="logout">
                <FontAwesomeIcon
                    icon={faUserCheck}
                    className="text-[#737373] hover:text-[#E879F9]"
                    onClick={() => signOut()}
                />
            </li>
        )
    }
    return (
        <li key="login">
            <FontAwesomeIcon
                icon={faUserXmark}
                className="text-[#737373] hover:text-[#E879F9]"
                onClick={() => signIn()}
            />
        </li>
    )
}
