import { useState } from "react"
import { handleLogin } from "../library/utilities"
import { Link, useNavigate } from "react-router-dom"
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
        <div className="bg-gray-100 flex flex-col gap-10 justify-center h-screen items-center">
            <div>
                <h1 className="text-3xl">Welcome to <span className="text-[5rem] text-blue-500"> Education Connect</span></h1>
            </div>
            <form className="bg-white border border-gray-300 flex rounded-md shadow">
                <div className="flex flex-col gap-5 p-10">
                    <div className="self-center">
                        <h2 className="text-3xl">Sign in</h2>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="email">Email: *</label>
                        </div>
                        <div>
                            <input className="border h-10 hover:bg-gray-100 rounded text-center w-[20rem]"
                                id="email"
                                name="email"
                                type="email"
                                onChange={handleFormInput}
                                required
                                placeholder="Enter your email..." />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="password" >Password: *</label>
                        </div>
                        <div>
                            <input className="border h-10 hover:bg-gray-100 rounded text-center w-[20rem]"
                                id="password"
                                name="password"
                                type="password"
                                onChange={handleFormInput}
                                required
                                placeholder="Enter your password..." />
                        </div>
                    </div>
                    <div>
                        <button className="bg-blue-500 h-10 hover:bg-blue-400 rounded text-white w-full"
                            onClick={(event) => handleLogin(event, login, navigate)}>
                            Login
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <p>Not a member?</p>
                        <p className="hover:underline text-blue-600">
                            <Link to={"/register"}>Register</Link>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}