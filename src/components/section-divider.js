import { Link } from "react-router-dom"


export const SectionDivider = ({ title }) => {
    return (
        <section className="flex gap-5 h-[5rem] items-center mx-[2rem]">
            <h1 className=" sm:text-5xl text-blue-500 text-3xl">{title}</h1>
            <Link className="bg-green-500 px-3 py-1 rounded text-white" to={"new"}>add</Link>
        </section>
    )
}