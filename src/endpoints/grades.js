const api = "http://localhost:8088/grades"

export const getGrades = () => {
    return fetch(api).then((response) => response.json())
}