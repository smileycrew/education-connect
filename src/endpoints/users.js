const api = "http://localhost:8088/users"

export const registerUser = (user) => {

    const userToSave = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        aboutMe: user.aboutMe
    }

    return fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userToSave)
    })
}

export const getUsers = () => {
    return fetch(api).then((response) => response.json())
}