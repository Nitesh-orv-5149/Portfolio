export default function Skills() {

    const skills = [
        {
            title:'NextJs',
            text: 'Main framework for fullstack website'
        },
        {
            title:'GSAP',
            text: 'Animation Library'
        },
        {
            title:'Mongodb, Postgresql',
            text: 'Database '
        },
    ]

    return (
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-4xl font-extrabold text-cyan-200">MY SKILLS</h2>
            <section className="mt-20 flex w-full justify-center items-center gap-20 ">
                
                {skills.map((work,index) => (
                    <div className="flex flex-col gap-4 justify-center items-center bg-gradient-to-br from-cyan-400 via-emerald-400 to-cyan-400 select-none text-black font-bold p-10 rounded-4xl" key={index}>
                        <h3 className="text-4xl">{work.title}</h3>
                        <p>{work.text}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}