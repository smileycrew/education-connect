export const StudentsList = ({ grades, setStudent, students }) => {
    const handleEditStudentButton = (student) => {
        setStudent(student)
    }
    return (
        <ul className="bg-gray-500 flex flex-col overflow-x-scroll h-[87vh]">
            {students.map((student, index) => (
                <li className="gap-5 grid grid-cols-[2fr,1fr,1fr] hover:bg-gray-400 py-3" key={index} onClick={() => handleEditStudentButton(student)}>
                    <div className="self-center">
                        <img className="bg-gray-100 h-32 rounded-full w-32" src={`https://api.dicebear.com/7.x/big-smile/svg?seed=${student.firstName}%20${student.lastName}`} alt="" />
                    </div>
                    <div className="self-center">
                        <p>
                            {student.firstName} {student.lastName}
                        </p>
                        <p>
                            {grades.find((grade) => grade.id === student.gradeId)?.name} grade
                        </p>
                    </div>
                </li>
            ))}
        </ul>
    )
}