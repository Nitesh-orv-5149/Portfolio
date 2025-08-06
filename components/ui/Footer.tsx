import { ArrowUpRight, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="h-[20vh] w-full rounded-t-4xl bg-sky-950 flex flex-col justify-start items-center py-4 mt-20">
            <div className="w-[60vw] rounded-full bg-cyan-500 flex justify-around items-center py-2 text-black font-bold">
                <h3>Do you want to hire me ?</h3>
                <button className="flex justify-center items-center bg-emerald-300 rounded-2xl px-4 py-2 hover:scale-105 hover:bg-emerald-100 transition-all">Contact-Me<ArrowUpRight/></button>
            </div>
            <div className="mt-8 flex justify-center items-center gap-20">
                <div className="hover:text-cyan-300 transition-all hover:scale-105 ">
                    <InstagramIcon/>
                </div>
                <div className="hover:text-cyan-300 transition-all hover:scale-105 ">
                    <LinkedinIcon/>
                </div>
                <div className="hover:text-cyan-300 transition-all hover:scale-105 ">
                    <YoutubeIcon/>
                </div>
            </div>
        </footer>
    );
}