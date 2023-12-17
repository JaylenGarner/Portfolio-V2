import { SiLinkedin, SiGithub } from 'react-icons/si'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className='flex space-x-4 opacity-70 items-center absolute bottom-4 right-4 '>
      <Link href={'https://www.linkedin.com/in/jaylen-garner'} target='_blank'>
        <SiLinkedin size='35px' className='hover:opacity-70 transition-opacity duration-700' />
      </Link>
      <Link href={'https://github.com/JaylenGarner'} target='_blank'>
        <SiGithub size='35px' className='hover:opacity-70 transition-opacity duration-700' />
      </Link>
    </div>
  )
}

export default Socials
