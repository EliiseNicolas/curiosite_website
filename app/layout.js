import './globals.css'
import Navbar from '@/components/Navbar'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="max-w-3xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}