import { getUsers } from "../endpoints/users"

// function will take an event, state, setter,
export const handleInput = (event, state, setter) => {
    setter({ ...state, [event.target.name]: event.target.value })
}

export const handleSelectInput = (event, state, setter) => {
    setter({ ...state, [event.target.name]: event.target.value * 1 })
}

export const handleLogin = (event, login, navigate) => {
    event.preventDefault()
    getUsers().then((data) => {
        const user = data.find((datum) => datum.email === login.email && datum.password === login.password)
        if (user === undefined) {
            window.alert("invalid login")
            navigate("/register")
        } else {
            localStorage.setItem("user", JSON.stringify({
                id: user.id,
            }))
            navigate("/")
        }
    })
}
// get local storage function
export const getLocalStorage = () => {
    const user = localStorage.getItem("user")
    return JSON.parse(user).id
}
