const api = "http://localhost:8088/"

export const registerUser = (user) => {

    const userToSave = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    }

    return fetch(api + "users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToSave)
    })
}