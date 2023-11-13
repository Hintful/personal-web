import localFont from 'next/font/local'
import './globals.css'
import Navigation from './components/navigation/Navigation'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const monaSans = localFont({
  src: [
    {
      path: '../../fonts/MonaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/MonaSans-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../fonts/MonaSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../fonts/MonaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../fonts/MonaSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
})

export const metadata = {
  title: 'Kurt Choi',
  description: 'Welcome to Kurt\'s website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monaSans.className}>
        <div className="container mt-8 px-12 pb-12 max-w-3xl mx-auto antialiased">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  )
}
