import './globals.css'

export const metadata = {
  title: 'veyra',
  description: 'Secure real-time messaging',
  manifest: '/manifest.json',
  themeColor: '#202C33',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
