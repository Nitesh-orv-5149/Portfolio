import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Works() {
    return (
        <section className="mt-20 flex flex-col justify-center items-center">
            <h1 className="text-4xl text-cyan-200 font-extrabold">My Work</h1>
            <div className="flex flex-col justify-center items-center gap-20 mt-10">
                <div  className="mt text-2xl text-emerald-300 hover:underline hover:scale-105 transition-all flex justify-center items-center gap-2">
                    <a className=" " href="https://vector-x-t6pr.vercel.app">VectorX academy</a>
                    <ArrowUpRight/>
                    <Image className="rounded-2xl" src={'/logo.png'} alt="logo" width={100} height={100}/>
                </div>
                <iframe src="https://vector-x-t6pr.vercel.app" className="mt-10 w-[70vw] h-[80vh] rounded-2xl"></iframe>
            </div>
        </section>
    );
}