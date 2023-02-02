'use client'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { ChakraProvider ,Heading, Text} from '@chakra-ui/react'
import Practise from './Practise'
import Header from './Header'
import Pricing from './Pricing'
import Features from './Features'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ChakraProvider >
   {/* <Practise/>  */}
<Header/>
<Pricing/>
<Features/>


    </ChakraProvider>
  )
}
