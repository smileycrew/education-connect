import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getWorksheet } from "../endpoints/worksheets"

export const Worksheet = () => {
    // hooks
    const { worksheetId } = useParams()
    // state
    const [worksheet, setWorksheet] = useState({})
    // handle function to get worksheet
    const handleGetWorksheet = () => getWorksheet(worksheetId).then(setWorksheet)
    // use effect
    useEffect(() => {
        handleGetWorksheet()
    }, [worksheetId])

    return (
        <div className="flex justify-center items-center h-screen">
            <section className="bg-white border flex flex-col items-center justify-center gap-5 p-5 rounded-lg shadow">
                <div className="self-center">
                    <p className="text-3xl">{worksheet.title}</p>
                </div>
                <div>
                    <img alt="" className="h-[20rem]" src={`${worksheet.imageUrl}`} />
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                        <p>grade:</p>
                        <p>{worksheet.grade?.name}</p>
                    </div>
                    <div className="flex gap-3">
                        <p>student:</p>
                        <p>{worksheet.student?.firstName} {worksheet.student?.lastName}</p>
                    </div>
                    <div className="flex gap-3">
                        <p>subject:</p>
                        <p>{worksheet.subject?.name}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}