import "@/styles/reset.css"
import "@/styles/global.css"


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
      {children}
      </body>
    </html>
  );
}