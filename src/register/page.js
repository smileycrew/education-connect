import { useState } from "react"
import { registerUser } from "../endpoints/users"
import { Link, useNavigate } from "react-router-dom"

export const Register = () => {
    // hooks
    const navigate = useNavigate()
    // state
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        aboutMe: ""
    })
    // handle function for the register form
    const handleRegisterForm = (event) => {
        const name = event.target.name
        const value = event.target.value
        const copy = { ...user }
        if (name === "firstName") {
            copy.firstName = value
            setUser(copy)
        } else if (name === "lastName") {
            copy.lastName = value
            setUser(copy)
        } else if (name === "email") {
            copy.email = value
            setUser(copy)
        } else if (name === "password") {
            copy.password = value
            setUser(copy)
        }
    }
    // handle function to register new user
    const handleRegisterUser = (event) => {
        event.preventDefault()
        registerUser(user).then(() => navigate("/"))
    }

    return (
        <div className="bg-gray-100 flex justify-center items-center h-screen">
            <form className="bg-white border flex flex-col gap-5 p-10 rounded shadow" onSubmit={handleRegisterUser}>
                <div>
                    <h1 className="text-4xl text-center">Register</h1>
                </div>
                <div>
                    <p>First name: *</p>
                    <input className="border h-10 rounded text-center w-[20rem]" minLength={2} name="firstName" onChange={handleRegisterForm} placeholder="Enter your first name" required type="text" value={user.firstName} />
                </div>
                <div>
                    <p>Last name: *</p>
                    <input className="border h-10 rounded text-center w-[20rem]" name="lastName" onChange={handleRegisterForm} placeholder="Enter your last name" required type="text" value={user.lastName} />
                </div>
                <div>
                    <p>Email: *</p>
                    <input className="border h-10 rounded text-center w-[20rem]" name="email" onChange={handleRegisterForm} placeholder="Enter your email" required type="email" value={user.email} />
                </div>
                <div>
                    <p>Password: *</p>
                    <input className="border h-10 rounded text-center w-[20rem]" name="password" onChange={handleRegisterForm} placeholder="Enter your password" required type="password" value={user.password} />
                </div>
                <div>
                    <button className="bg-blue-500 h-10 hover:bg-blue-400 rounded text-white w-full" >
                        Register
                    </button>
                </div>
                <div className="flex justify-between">
                    <p>Already a member?</p>
                    <p className="hover:underline text-blue-600">
                        <Link to={"/login"}>Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}