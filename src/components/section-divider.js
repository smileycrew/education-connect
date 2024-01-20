export const SectionDivider = ({ title }) => {
    return (
        <section className="flex gap-5 h-[5rem] items-center mx-[2rem]">
            <h1 className=" sm:text-5xl text-blue-500 text-3xl">{title}</h1>
        </section>
    )
}