export const Student = ({ grades, student, setStudent }) => {

    return (
        <section className="flex flex-col items-center justify-center">
            <img className="h-60" src={`https://api.dicebear.com/7.x/big-smile/svg?seed=${student.firstName}%20${student.lastName}`} alt="" />
            <p className="text-3xl">{student.firstName} {student.lastName}</p>
            <p>{grades.find((grade) => grade.id === student.gradeId)?.name} grade</p>
        </section>
    )
}