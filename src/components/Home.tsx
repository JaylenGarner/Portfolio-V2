"use client"

import { motion } from "framer-motion"


const Home = () => {
  return (
    <>
    {/* Reveal */}
    <motion.div className="absolute z-50 w-screen h-screen flex justify-center items-center bg-black"
    initial={{opacity: 1}}
    animate={{opacity: 0}}
    transition={{duration: 3, delay: .5}}
    >
    <h1 className="text-xl">Jaylen Garner</h1>
    </motion.div>

    {/* Tint */}
    <div className="absolute z-30 w-screen h-screen bg-black bg-blend-darken opacity-30">

    </div>

    {/* Content */}
    <div className="absolute z-40 w-screen h-screen flex justify-center items-center">
        <h1 className="text-xl">
        Jaylen Garner
        </h1>

    </div>
    </>
  )
}

export default Home
