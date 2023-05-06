import React from 'react'
import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'
import { Footer } from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
      <Footer />
    </>
  )
}
