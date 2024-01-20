import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getWorksheet } from "../endpoints/worksheets"
import { worksheetType } from "../library/data"
import { getGrades } from "../endpoints/grades"
import { getStudents } from "../endpoints/students"

export const Worksheet = () => {

    const { worksheetId } = useParams()

    const [worksheet, setWorksheet] = useState(worksheetType)
    const [grades, setGrades] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {
        getWorksheet(worksheetId).then(setWorksheet)
        getGrades().then(setGrades)
        getStudents().then(setStudents)
    }, [worksheetId])

    return (
        <>
            <p>grade id {worksheet.gradeId}</p>
            <select>
                <option>choose a grade</option>
                {grades.map((grade, index) => (
                    <option>{grade.name}</option>
                ))}
            </select>
            <p>student id {worksheet.studentId}</p>
            <select>
                <option>choose a student</option>
                {students.map((student) => (
                    <option>{student.firstName} {student.lastName}</option>
                ))}
            </select>
            <p>image url {worksheet.imageUrl}</p>
            <input defaultValue={worksheet?.imageUrl} />
            <p>{worksheet.isComplete ? "complete" : <button>mark as complete button</button>}</p>
            <p>{worksheet.dateComplete ? worksheet.dateComplete : "no"}</p>
            <button>finish</button>
        </>
    )
}