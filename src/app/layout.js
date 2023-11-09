import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Kurt Choi',
  description: 'Welcome to Kurt\'s website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
