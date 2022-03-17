import Navbar from "../../../components/Dicespace/Navbar"

export async function getStaticProps() {
    return {
        props: {
            campaign: campaign,
        },
    }
}

export default function Campaign() {
    return (
        <>
            <Navbar />
        </>
    )
}

Campaign.auth = true
