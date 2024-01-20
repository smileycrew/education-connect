const api = "http://localhost:8088/worksheets"

export const addWorksheet = (worksheet) => {
    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(worksheet)
    })
}

export const getWorksheets = () => {
    return fetch(api).then((response) => response.json())
}

export const deleteWorksheet = (worksheetId) => {
    return fetch(`${api}/${worksheetId}`, {
        method: "DELETE"
    })
}

export const getWorksheet = (worksheetId) => {
    return fetch(`${api}/${worksheetId}`).then((response) => response.json())
}