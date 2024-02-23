import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DAO Drops',
}

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut ic`on' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicons/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicons/android-chrome-512x512.png' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
