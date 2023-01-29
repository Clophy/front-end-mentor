"use client"
import { Manrope } from "@next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"], weight: ["400","800"] });
async function getApi(){
  const res = await fetch("https://api.adviceslip.com/advice");
    return res.json();

} 

export default async function Home() {
  const data = await getApi()
  console.log(data)

  return (
    <main className={manrope.className}>
      <div className="container">
        <p>ADVICE #{data.slip.id}</p>
        <h1>&quot;{data.slip.advice}&quot;</h1>
        <div className="hr">
          <Image src="/pattern-divider-desktop.svg" fill alt="sa"/>
        </div>
        <button className="dice">
         <Image src="icon-dice.svg" width={16} height={16} alt="as"/>
        </button>
      </div>
    </main>
  );
}
