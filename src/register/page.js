import { useState } from "react"
import { handleInput } from "../library/utilities"
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
                onChange={(event) => handleInput(event, user, setUser)
                }
                placeholder="first name" />
            <input
                className="border"
                name="lastName"
                onChange={(event) => handleInput(event, user, setUser)
                }
                placeholder="last name" />
            <input
                className="border"
                name="email"
                onChange={(event) => handleInput(event, user, setUser)
                }
                placeholder="email" />
            <input
                className="border"
                name="password"
                onChange={(event) => handleInput(event, user, setUser)}
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