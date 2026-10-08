import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="sticky top-0 bg-white border-b">
      <nav className="max-w-3xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/image_moi.png"
            alt="Photo d'Elise"
            width={40}
            height={40}
            className="w-auto h-auto rounded-full object-cover"
          />
          <Image
            src="/logo.png"
            alt="curiosité logo"
            width={100}
            height={500}
            className="w-auto h-auto squared-full object-cover"
          />
        </Link>
        <div className="flex gap-2">
          <Link href="/ia" className="px-3 py-1 rounded hover:bg-gray-100">IA</Link>
          <Link href="/physique" className="px-3 py-1 rounded hover:bg-gray-100">Physique</Link>
          <Link href="/musique" className="px-3 py-1 rounded hover:bg-gray-100">Musique</Link>
          <Link href="/a-propos" className="px-3 py-1 rounded hover:bg-gray-100">À mon propos</Link>
        </div>
      </nav>
    </header>
  )
}