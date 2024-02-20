import { useState } from "react"
import { StudentsList } from "./StudentsList"
import { Student } from "./student"
import { NoStudent } from "./NoStudent"
import { EditStudentForm } from "./EditStudentForm"

export const Students = () => {
    const [student, setStudent] = useState({})
    return (
        <div className="grid grid-cols-3 min-h-[87vh]">
            <StudentsList student={student} setStudent={setStudent} />
            {student.id ? (
                <>
                    <Student student={student} setStudent={setStudent} />
                    <EditStudentForm student={student} setStudent={setStudent} />
                </>
            ) : (
                <NoStudent />
            )}
        </div>
    )
}