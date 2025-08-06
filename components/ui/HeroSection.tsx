import { User } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <header className="flex w-full justify-around items-center h-screen">
            <section className="flex flex-col justify-center items-center gap-10">
                <h1
                    className="uppercase text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 from-50% to-zinc-950 underline underline-offset-10 decoration-4 decoration-cyan-300"
                >
                    FULLSTACK WEB DEVELOPER
                </h1>
                <p className="text-cyan-100">
                    lorem ipsum lorem ipsum lorem ipsum<br/>
                    lorem ipsum lorem ipsum lorem ipsum<br/>
                    lorem ipsum lorem ipsum lorem ipsum<br/>
                    lorem ipsum lorem ipsum lorem ipsum<br/>
                    lorem ipsum lorem ipsum lorem ipsum<br/>
                    lorem ipsum lorem ipsum lorem ipsum<br/>
                </p>
            </section>
            <section className="h-85 w-60 rounded-3xl bg-cyan-900 flex justify-center items-center hover:rotate-12 hover:scale-170 hover:-translate-x-30 transition-all">
                <div className=" rounded-xl flex justify-center items-center">
                  <Image className="rounded-2xl" src={'/nitesh.JPG'} alt="logo" width={200} height={200}/>
                </div>
            </section>
        </header>
    );
}