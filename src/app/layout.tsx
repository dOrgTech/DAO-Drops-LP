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
        <title>DAO Drops</title>
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicons/favicon-16x16.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicons/favicon-32x32.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/favicons/android-chrome-192x192.png' />
        <link rel='icon' type='image/png' sizes='512x512' href='/favicons/android-chrome-512x512.png' />

        <meta name='title' content='DAO Drops' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='DAO Drops' />
        <meta property='og:url' content='https://daodrops.io' />
        <meta
          property='og:description'
          content='DAO Drops creates forkable primitives for communities to run their own funding rounds in ways that more intelligently capture the wisdom and experience of stakeholders in decision making.'
        />
        <meta property='og:image' content='/metaimage.png' />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:title' content='DAO Drops' />
        <meta property='twitter:url' content='https://daodrops.io' />
        <meta
          property='twitter:description'
          content='DAO Drops creates forkable primitives for communities to run their own funding rounds in ways that more intelligently capture the wisdom and experience of stakeholders in decision making.'
        />
        <meta property='twitter:image' content='/metaimage.png' />

        <meta name='theme-color' content='#ffffff' />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body>{children}</body>
    </html>
  )
}
