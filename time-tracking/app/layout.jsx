import '@/styles/reset.css'
import '@/styles/global.css'
import { Rubik } from '@next/font/google'

const rubik = Rubik({subsets:["latin"]})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={rubik.className}>
      
      <head />
      <body>
      {children}
      </body>
    </html>
  )
}
