import { Link } from "react-router-dom"
import { links } from "../library/data"

export const Header = () => {

    //

    return (
        <header
            className="z-[999] relative">
            <nav>
                <ul
                    className="flex flex-wrap items-center justify-center sm:gap-5">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link to={link.to}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li>
                        <button
                            className="self-end">
                            Log Out
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}