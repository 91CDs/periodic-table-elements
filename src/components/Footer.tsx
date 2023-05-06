import { Inter } from 'next/font/google'
import React from 'react'
import footer from "../styles/App.module.css"

const inter = Inter({ subsets: ['latin'] })

export const Footer = () => {
  return <div className={`${inter.className} ${footer.footer}`}> Made by a literal compact disk </div>
}
