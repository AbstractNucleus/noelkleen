import { useState } from "react"

export default function TestModal() {
    let [open, setOpen] = useState(false)

    return (
        <>
            <button
                className=" mt-5 h-fit w-fit"
                onClick={() => {
                    setOpen(true)
                }}
            >
                MODAL
            </button>

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
