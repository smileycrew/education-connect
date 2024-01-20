import { useState } from "react"
import { handleLogin } from "../library/utilities"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    // hooks
    const navigate = useNavigate()
    // state
    const [login, setLogin] = useState({})
    // handle input function
    const handleFormInput = (event) => {
        const name = event.target.name
        const value = event.target.value
        const copy = { ...login }
        if (name === "email") {
            copy.email = value
            setLogin(copy)
        } else if (name === "password") {
            copy.password = value
            setLogin(copy)
        }
    }
    // component return
    return (
        <form>
            <input
                className="border"
                name="email"
                onChange={handleFormInput}
                placeholder="enter your email"
                required
                type="email" />
            <input
                className="border"
                name="password"
                onChange={handleFormInput}
                placeholder="enter your password"
                required
                type="text" />
            <button className="border" onClick={(event) => handleLogin(event, login, navigate)}>
                login
            </button>
        </form>
    )
}