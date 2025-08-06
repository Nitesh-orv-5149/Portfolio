import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-cyan-800/60 backdrop-blur-sm flex justify-between items-center px-10 py-2 w-[70vw] rounded-full">
            <div className="bg-cyan-300 text-black font-bold rounded-2xl px-3 py-1 select-none">NK</div>
            <div className="flex justify-center items-center gap-10">
                <Link className="hover:text-cyan-300 hover:underline transition-all " href={'#'}>Contact Me</Link>
                <Link className="hover:text-cyan-300 hover:underline transition-all " href={'#'}>More</Link>
            </div>
        </nav>
    );
}