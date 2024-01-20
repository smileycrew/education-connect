import { useState } from "react"
import { registerUser } from "../endpoints/users"
import { useNavigate } from "react-router-dom"

export const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        aboutMe: ""
    })

    return (
        <form>
            <input
                className="border"
                name="firstName"
                onChange={''}
                placeholder="first name" />
            <input
                className="border"
                name="lastName"
                onChange={''}
                placeholder="last name" />
            <input
                className="border"
                name="email"
                onChange={''}
                placeholder="email" />
            <input
                className="border"
                name="password"
                onChange={''}
                placeholder="password" />
            <button
                type="submit"
                className="border"
                onClick={(event) => {
                    event.preventDefault()
                    registerUser(user).then(() => navigate("/"))
                }}>
                Register
            </button>
        </form>
    )
}