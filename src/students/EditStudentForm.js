import { useEffect, useState } from "react"

export const EditStudentForm = ({ student, setStudent }) => {
    const [editedStudent, setEditedStudent] = useState({})
    const handleForm = (event) => {
        const copy = { ...editedStudent }
        const { name, value } = event.target
        if (name === "firstName") {
            copy[name] = value
        } else if (name === "lastName") {
            copy[name] = value
        }
        setEditedStudent(copy)
    }
    useEffect(() => {
        setEditedStudent(student)
    }, [student])
    return (
        <form className="flex flex-col items-center justify-center">
            <label>First name: *</label>
            <input className="border" name="firstName" onChange={handleForm} type="text" value={editedStudent.firstName} />
            <label>Last name: *</label>
            <input className="border" name="lastName" onChange={handleForm} type="text" value={editedStudent.lastName} />
            <label>Grade: *</label>
            <select>
                <option>Select student grade</option>
            </select>
        </form>
    )
}