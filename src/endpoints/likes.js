const api = "http://localhost:8088/likes"
export const getUserLikesExpandWorksheet = (userId) => {
    return fetch(`${api}?userId=${userId}&_expand=worksheet`).then((response) => response.json())
}
// endpoint to delete like
export const deleteLike = (likeToDelete) => {
    console.log("🚀 ~ deleteLike ~ likeToDelete:", likeToDelete)
    return fetch(`${api}/${likeToDelete}`, {
        method: "DELETE"
    })
}