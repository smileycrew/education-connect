import { useEffect, useState } from "react"
import { editStudent } from "../endpoints/students"

export const EditStudentForm = ({ grades, student, setStudent, handleGetStudents }) => {
    const [editedStudent, setEditedStudent] = useState({})
    const handleForm = (event) => {
        const copy = { ...editedStudent }
        const { name, value } = event.target
        if (name === "firstName") {
            copy[name] = value
        } else if (name === "lastName") {
            copy[name] = value
        } else if (name === "gradeId") {
            copy[name] = parseInt(value)
        }
        setEditedStudent(copy)
    }
    const handleUpdateButton = (event) => {
        event.preventDefault()
        editStudent(editedStudent).then((data) => {
            setStudent(data)
            handleGetStudents()
        })
    }
    useEffect(() => {
        setEditedStudent(student)
    }, [student])
    return (
        <form className="flex flex-col gap-5 items-center justify-center">

            {/* <p>edit student information</p> */}

            <div className="relative">
                <input className="border border-emerald-700 outline-emerald-700 pl-2 py-2 rounded peer transition w-full" name="firstName" onChange={handleForm} required type="text" value={editedStudent.firstName} />
                <label className="absolute bg-white left-3 px-1 pointer-events-none text-xs text-gray-500 -top-2 peer-focus:text-gray-950">* First name</label>
            </div>

            <div className="relative">
                <input className="border border-emerald-700 outline-emerald-700 pl-2 py-2 rounded peer transition w-full" name="lastName" onChange={handleForm} required type="text" value={editedStudent.lastName} />
                <label className="absolute bg-white left-3 px-1 pointer-events-none text-xs text-gray-500 -top-2 peer-focus:text-gray-950">* Last name</label>
            </div>

            <div className="relative">
                <select className="border border-emerald-700 outline-emerald-700 pl-2 py-2 rounded peer transition w-full" name="gradeId" onChange={handleForm} required type="text" value={editedStudent.lastName}>
                    <option>Select student grade</option>
                    {grades.map((grade) => (
                        <option value={grade.id}>{grade.name}</option>
                    ))}
                </select>
                <label className="absolute bg-white left-3 px-1 pointer-events-none text-xs text-gray-500 -top-2 peer-focus:text-gray-950">* Student grade</label>
            </div>

            <button className="bg-blue-500 h-10 px-3 py-2 rounded text-white" onClick={handleUpdateButton}>Edit</button>
            {/* <div className="relative">
                <input className="border border-emerald-700 outline-emerald-700 pl-2 py-2 rounded peer w-full" name="imageUrl" onChange={"handleEditProductForm"} required type="text" value={""} />
                <label className="absolute bg-white left-3 px-1 pointer-events-none text-xs text-gray-500 -top-2 peer-focus:text-gray-950">* Image Url</label>
            </div> */}
        </form>
    )
}