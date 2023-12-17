import { FaMoon } from 'react-icons/fa6'
import { FaCode } from 'react-icons/fa'

import Link from 'next/link'

const Development = () => {
  return (
    <div className='absolute top-4 left-4 flex space-x-4 opacity-70 items-center'>
      <FaCode size='35px' className='hover:opacity-70 transition-opacity duration-700' />
      <Link href={'https://moonraydevelopment.com'} target='_blank'>
        <FaMoon size='32px' className='hover:opacity-70 transition-opacity duration-700' />
      </Link>
    </div>
  )
}

export default Development
