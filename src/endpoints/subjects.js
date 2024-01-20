const api = "http://localhost:8088/subjects"

export const getSubjects = () => {
    return fetch(api).then((response) => response.json())
}