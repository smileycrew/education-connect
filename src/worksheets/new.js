import { useEffect, useState } from "react"
import { getLocalStorage, handleInput, handleSelectInput } from "../library/utilities"
import { getGrades } from "../endpoints/grades"
import { getStudents } from "../endpoints/students"
import { addWorksheet } from "../endpoints/worksheets"
import { useNavigate } from "react-router-dom"

export const NewWorksheet = () => {

    const navigate = useNavigate()

    const [worksheet, setWorksheet] = useState({
        userId: getLocalStorage(),
        gradeId: 1,
        studentId: 1,
        imageUrl: "",
        isComplete: false,
        dateComplete: ""
    })

    const handleGetGrades = () => getGrades().then(setGrades)
    const handleGetStudents = () => getStudents().then(setStudents)

    const [grades, setGrades] = useState([])
    const [students, setStudents] = useState([])

    useEffect(() => {
        handleGetGrades()
        handleGetStudents()
    }, [])

    return (
        <form>
            <select
                name="gradeId"
                onChange={(event) => handleSelectInput(event, worksheet, setWorksheet)}>
                <option value={1}>choose a grade</option>
                {grades.map((grade, index) => (
                    <option key={index} value={grade.id}>{grade.name}</option>
                ))}
            </select>
            <select
                name="studentId"
                onChange={(event) => handleSelectInput(event, worksheet, setWorksheet)}>
                <option value={1}>choose a student</option>
                {students.map((student, index) => (
                    <option key={index} value={student.id}>{student.firstName} {student.lastName}</option>
                ))}
            </select>
            <input
                name="imageUrl"
                onChange={(event) => handleInput(event, worksheet, setWorksheet)}
                placeholder="enter image url"
                required />
            <button
                onClick={(event) => {
                    event.preventDefault()
                    addWorksheet(worksheet).then(() => navigate("/worksheets"))
                }}>
                finish
            </button>
        </form>
    )
}