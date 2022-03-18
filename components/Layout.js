import Navbar from "./Navbar/Navbar"

export default function Layout({ children }) {
    return (
        <>
            <div className="min-h-screen bg-[#1b1b1b] text-[#9CA3AF]">
                <Navbar />
                <div className="container py-5 pl-14">{children}</div>
            </div>
        </>
    )
}
