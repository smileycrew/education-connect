import { useEffect, useState } from "react"
import { StudentsList } from "./StudentsList"
import { Student } from "./student"
import { NoStudent } from "./NoStudent"
import { EditStudentForm } from "./EditStudentForm"
import { getStudents } from "../endpoints/students"
import { getGrades } from "../endpoints/grades"
export const Students = () => {
    const [grades, setGrades] = useState([])
    const [student, setStudent] = useState({})
    const [students, setStudents] = useState([])
    const handleGetGrades = () => {
        getGrades().then(setGrades)
    }
    const handleGetStudents = () => {
        getStudents().then(setStudents)
    }
    useEffect(() => {
        handleGetStudents()
        handleGetGrades()
    }, [])
    return (
        <div className="divide-x grid grid-cols-[1fr,2fr,1fr] min-h-[87vh]">
            <StudentsList grades={grades} setStudent={setStudent} students={students} />
            {student.id ? (
                <>
                    <Student grades={grades} student={student} setStudent={setStudent} />
                    <EditStudentForm grades={grades} student={student} setStudent={setStudent} handleGetStudents={handleGetStudents} />
                </>
            ) : (
                <NoStudent />
            )}
        </div>
    )
}