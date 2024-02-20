import { useEffect, useState } from "react"
import { getGrades } from "../endpoints/grades"
import { getStudents } from "../endpoints/students"
import { addWorksheet } from "../endpoints/worksheets"
import { useNavigate } from "react-router-dom"
import { getSubjects } from "../endpoints/subjects"
import { SectionDivider } from "../components/section-divider"

export const NewWorksheet = ({ userId }) => {
    // navigate hook
    const navigate = useNavigate()
    // state
    const [worksheet, setWorksheet] = useState({
        imageUrl: "",
        gradeId: 1,
        studentId: 1,
        subjectId: 1,
        title: "",
        userId: 0,
    })
    const [grades, setGrades] = useState([])
    const [students, setStudents] = useState([])
    const [subjects, setSubjects] = useState([])
    // handle function to get grades
    const handleGetGrades = () => getGrades().then(setGrades)
    // handle function to get students
    const handleGetStudents = () => getStudents().then(setStudents)
    // handle function to get subjects
    const handleGetSubjects = () => getSubjects().then(setSubjects)
    // handle function for the form
    const handleFormInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        const copy = { ...worksheet }
        if (name === "imageUrl") {
            copy.imageUrl = value
        } else if (name === "gradeId") {
            copy.gradeId = value * 1
        } else if (name === "studentId") {
            copy.studentId = value * 1
        } else if (name === "subjectId") {
            copy.subjectId = value * 1
        } else if (name === "title") {
            copy.title = value
        }
        setWorksheet(copy)
    }
    // handle function to add the userId to the new worksheet
    const handleSetUser = () => {
        const copy = { ...worksheet }
        copy.userId = userId
        setWorksheet(copy)
    }
    // handle function to add the new worksheet to the database
    const handleAddWorksheet = (event) => {
        event.preventDefault()
        addWorksheet(worksheet).then(() => navigate("/worksheets"))
    }
    // use effect
    useEffect(() => {
        handleGetGrades()
        handleGetStudents()
        handleGetSubjects()
        handleSetUser()
    }, [userId])
    // component return
    return (
        <div className="bg-gray-100 flex flex-col justify-center items-center h-[87vh]">
            <div>
                <SectionDivider title="New Worksheet" />
            </div>
            <form className="bg-white border flex flex-col justify-center gap-5 p-10 rounded-lg shadow w-[25rem]">
                <div className="self-center">
                    {/* <p className="text-3xl">new worksheet</p> */}
                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                        <p>select a grade:</p>
                        <select
                            className="border h-[2rem] rounded text-center w-[10rem]"
                            name="gradeId"
                            onChange={handleFormInput}
                        >
                            <option value={1}>choose a grade</option>
                            {grades.map((grade, index) => (
                                <option key={index} value={grade.id}>{grade.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>select a student:</p>
                        <select
                            className="border h-[2rem] rounded text-center w-[10rem]"
                            name="studentId"
                            onChange={handleFormInput}
                        >
                            <option value={1}>choose a student</option>
                            {students.map((student, index) => (
                                <option key={index} value={student.id}>{student.firstName} {student.lastName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>select a subject:</p>
                        <select
                            className="border h-[2rem] rounded text-center w-[10rem]"
                            name="subjectId"
                            onChange={handleFormInput}
                        >
                            <option value={1}>choose a subject</option>
                            {subjects.map((subject, index) => (
                                <option key={index} value={subject.id}>{subject.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>enter worksheet title:</p>
                        <input
                            className="border h-[2rem] rounded text-center w-full"
                            name="title"
                            onChange={handleFormInput}
                            placeholder="enter worksheet title"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>enter image url:</p>
                        <input
                            className="border h-[2rem] rounded text-center w-full"
                            name="imageUrl"
                            onChange={handleFormInput}
                            placeholder="enter image url"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-3">
                        <button
                            className="bg-blue-500 h-[2rem] hover:bg-blue-400 rounded text-white w-full"
                            onClick={handleAddWorksheet}
                        >
                            finish
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}