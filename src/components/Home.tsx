"use client"

import { motion } from "framer-motion"


const Home = () => {
  return (
    <>
    {/* Reveal */}
    <motion.div className="absolute z-50 w-screen h-[100dvh] flex justify-center items-center bg-black"
    initial={{opacity: 1}}
    animate={{opacity: 0}}
    transition={{duration: 3, delay: 1}}
    >
    <h1 className="text-xl">Jaylen Garner</h1>
    </motion.div>

    {/* Tint */}
    <div className="absolute z-30 w-screen h-screen bg-black bg-blend-darken opacity-50">

    </div>

    {/* Content */}
    <div className="absolute z-40 w-screen h-[100dvh] flex justify-center items-center">
        <h1 className="text-xl">Jaylen Garner</h1>

        <h2 className="absolute top-4 left-4 text-lg">Software Engineer</h2>

        <h2 className="absolute top-4 right-4 text-lg">Business</h2>

        <h2 className="absolute bottom-4 left-4 text-lg">Socials</h2>

        <h2 className="absolute bottom-4 right-4">Contact</h2>


    </div>
    </>
  )
}

export default Home
