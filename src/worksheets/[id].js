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
        <div className="flex justify-center relative items-center">
            <div className="flex flex-col">
                <div className="self-center">
                    <h1 className="text-[4rem] text-blue-500">{worksheet.title}</h1>
                </div>
                <div className="flex gap-5">
                    <div>
                        <img className="border" src={worksheet.imageUrl} alt="" />
                    </div>
                    <div className="flex flex-col justify-around">
                        <div>
                            <div>
                                <p>grade:</p>
                            </div>
                            <div className="border rounded-full">
                                <p className="text-center">{worksheet.grade?.name}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>subject:</p>
                            </div>
                            <div className="border rounded-full">
                                <p className="px-3 text-center">{worksheet.subject?.name}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>student:</p>
                            </div>
                            <div className="border rounded-full">
                                <p className="px-3 text-center">{worksheet.student?.firstName} {worksheet.student?.lastName}</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}