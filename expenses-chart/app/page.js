import HeadBar from '@/components/headbar'
import Main from '@/components/main'
import { DM_Sans } from '@next/font/google'
import React from 'react'

const dm = DM_Sans({ subsets: ['latin'], weight : ["400","700"] })

export default function Home() {
  return (
    <main className={dm.className}>
    <HeadBar/>
    <Main/>
    </main>
  )
}
