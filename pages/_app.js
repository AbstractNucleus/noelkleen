import { SessionProvider, useSession } from "next-auth/react"
import "../styles/globals.css"
import Layout from "../components/Layout"
import { config } from "@fortawesome/fontawesome-svg-core"
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider session={session}>
            <Layout>
                {Component.auth ? (
                    <Auth>
                        <Component {...pageProps} />
                    </Auth>
                ) : (
                    <Component {...pageProps} />
                )}
            </Layout>
        </SessionProvider>
    )
}

function Auth({ children }) {
    const { data: session, status } = useSession({ required: true })
    const isUser = !!session?.user

    if (isUser) {
        return children
    }

    return <div className="flex justify-center text-3xl">Loading...</div>
}
