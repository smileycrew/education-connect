import { useState } from "react"
import { handleInput, handleLogin } from "../library/utilities"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate()

    return (
        <form>
            <input
                className="border"
                name="email"
                onChange={(event) => handleInput(event, login, setLogin)}
                placeholder="enter your email"
                required />
            <input
                className="border"
                name="password"
                onChange={(event) => handleInput(event, login, setLogin)}
                placeholder="enter your password"
                required />
            <button
                className="border"
                onClick={(event) => handleLogin(event, login, navigate)}>
                login
            </button>
        </form>
    )
}