import Calculator from '@/components/calculator'
import { Space_Mono } from '@next/font/google'
const mono = Space_Mono({subsets:['latin'], weight:["700"]})

export default function Home() {
  return (
    <main className={mono.className}>
    <h1>SPLITTER</h1>
    <Calculator/>
    </main>
  )
}
