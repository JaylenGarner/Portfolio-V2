"use client"

import { motion } from "framer-motion"
import { useState } from "react"

import Development from './Development'
import Experience from './Experience'
import Socials from './Socials'
import Contact from './Contact'

const Home = () => {
  const [selected, setSelected] = useState('Jaylen Garner')


  return (
    <>
    {/* Reveal */}
    <motion.div id="revealDiv" className="absolute z-50 w-screen h-[100dvh] flex justify-center items-center bg-black"
    initial={{opacity: 1}}
    animate={{opacity: 0}}
    transition={{duration: 1.5, delay: 0.5}}
    >
    </motion.div>

    <script src="/src/lib/reveal.js"></script>

    {/* Tint */}
    <div className="absolute z-30 w-screen h-screen bg-black bg-blend-darken opacity-50">
    </div>

    {/* Content */}
    <div className="absolute z-50 w-screen h-[100dvh] flex justify-center items-center">
       <h1 className="text-xl font-bold">{selected}</h1>

        {/* Navigation */}
        <motion.div initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 3, delay: 1}}>

            <Experience />
            <Development />
            <Socials />
            <Contact />

        </motion.div>
    </div>
    </>
  )
}

export default Home
