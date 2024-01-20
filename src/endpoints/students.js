const api = "http://localhost:8088/students"

export const getStudents = () => {
    return fetch(api).then((response) => response.json())
}