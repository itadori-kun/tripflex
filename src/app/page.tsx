

// import vercel from "@/public/vercel.svg"
// import Image from "next/image"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
import { Slider } from "@/components/slider";

export default function Home() {
  return (
    <main className="grid place-items-center p-9">
      <header className="mb-16">
        <h1 className="font-bold text-3xl text-center text-[#0c0c0c]">Welcome to TripFlex</h1>
        <p className="font-normal text-xl text-[#0c0c0c]/65 ">
          How will you be joining us today?
        </p>
      </header>

      <div className="h-[323px] w-[322px]">
        <Slider />
      </div>


    </main>
  );
}
