import { User } from "lucide-react";

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
            <section className="h-80 w-70 rounded-3xl bg-gray-500 flex justify-center items-center hover:rotate-12 hover:scale-105 hover:-translate-y-10 transition-all">
                <div className="h-70 w-60 rounded-xl bg-cyan-950 flex justify-center items-center">
                  <User className="h-50 w-50"/>
                </div>
            </section>
        </header>
    );
}