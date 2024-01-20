import { useNavigate } from "react-router-dom"
import { links } from "../library/data"
import { logout } from "../library/utilities"

export const Header = () => {

    const navigate = useNavigate()

    return (
        <header className="z-[999] relative">
            <nav className="flex items-center bg-blue-500 h-[6.5rem]">
                <ul className="flex flex-wrap gap-y-1 justify-around text-[1.5rem] w-full">
                    {links.map((link, index) => (
                        <li className="active:scale-105 active:shadow-md bg-gray-300 hover:scale-110 hover:shadow-lg rounded-full shadow-md transition" key={index}>
                            <a className="px-7 py-1" href={`${link.to}`}>{link.name}</a>
                        </li>
                    ))}
                    <button className="active:scale-105 active:shadow-md bg-gray-300 hover:scale-110 hover:shadow-lg px-7 rounded-full" onClick={() => logout(navigate)}>Logout</button>
                </ul>
            </nav>
        </header>
    )
}