import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pushkar Yadav',
  description: 'I am Pushkar Yadav a Developer from India. Created 16+ personal projects with 15K+ users',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
            {children}
      </body>
    </html>
  )
}
