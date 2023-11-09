import { Roboto } from 'next/font/google'
import './globals.css'
import Navigation from './components/navigation/Navigation'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Kurt Choi',
  description: 'Welcome to Kurt\'s website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
