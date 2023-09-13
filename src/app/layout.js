
import './globals.css'

export const metadata = {
  title: 'The Greek Life'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any'/>
      </head>
      <body>{children}</body>
    </html>
  )
}
