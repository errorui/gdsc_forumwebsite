import './globals.css'
import { Inter } from 'next/font/google'
import Nav from './components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'w-help forum',
  description: 'forum website to solve your coding doubts by proffessionals',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
<Nav></Nav>
        {children}</body>
    </html>
  )
}
