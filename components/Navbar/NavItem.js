import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link"

export default function NavItem({ url, icon }) {
  const router = useRouter();

  return (
    <li key={url}>
      <Link href={url} passHref>
          <FontAwesomeIcon
            icon={icon}
            className={
              router.pathname.startsWith(url)
                ? "text-[#E879F9] hover:text-[#E879F9]"
                : "text-[#747474] hover:text-[#E879F9]"
            }
          />
      </Link>
    </li>
  );
}