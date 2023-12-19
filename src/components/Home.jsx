'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

import Development from './Development'
import Experience from './Experience'
import Socials from './Socials'
import Contact from './Contact'

import ContactForm from './ContactForm'

const Home = () => {
  const [content, setContent] = useState('')

  return (
    <>
      {/* Reveal */}
      <motion.div
        id='revealDiv'
        className='absolute z-50 w-screen h-[100dvh] flex justify-center items-center bg-black'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 1.5, delay: 1 }}></motion.div>

      <script src='/src/lib/reveal.js'></script>

      {/* Tint */}
      <div className='absolute z-30 w-screen h-screen bg-black bg-blend-darken opacity-50' />

      {/* Content */}
      <div className='absolute z-50 w-screen h-[100dvh] flex justify-center items-center'>
        {!content && <h1 className='text-xl font-bold'>Jaylen Garner</h1>}

        {content === 'Contact' && <ContactForm />}

        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 3, delay: 1 }}>
          <Experience setContent={setContent} />
          <Development setContent={setContent} />
          <Socials />
          <Contact setContent={setContent} />
        </motion.div>
      </div>
    </>
  )
}

export default Home
