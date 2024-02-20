const api = "http://localhost:8088/students"

export const getStudents = () => {
    return fetch(api).then((response) => response.json())
}

export const editStudent = (student) => {
    return fetch(`${api}/${student.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student)
    }).then((response) => response.json())
}