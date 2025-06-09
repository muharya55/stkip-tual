'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  const menuItems = [
    { label: 'Sejarah Singkat', href: '/sejarah' },
    { label: 'Visi , Misi , Tujuan dan Sasaran', href: '/visimisi' },
    { label: 'Struktur Organisasi', href: '/struktur-organisasi' },
    { label: 'Pimpinan', href: '/pimpinan' },
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
