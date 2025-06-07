'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { label: 'Sejarah Singkat', href: '/tentang/sejarah' },
    { label: 'Visi , Misi , Tujuan dan Sasaran', href: '/tentang/visimisi' },
    { label: 'Struktur Organisasi', href: '/tentang/struktur-organisasi' },
    { label: 'Pimpinan', href: '/tentang/pimpinan' },
    { label: 'Prodi', href: '/akademik/prodi' },
    { label: 'Informasi Biaya Pendidikan', href: '/akademik/informasi-biaya' },
  ]

  return (
    <ul className="nav service-menu">
      {menuItems.map((item) => (
        <li key={item.href} className={pathname === item.href ? 'active' : ''}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}
