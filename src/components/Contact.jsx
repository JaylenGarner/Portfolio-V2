import { IoCalendarSharp, IoMailSharp } from 'react-icons/io5'

import Link from 'next/link'

const Contact = () => {
  return (
    <div className='absolute bottom-4 left-4 flex space-x-4 opacity-70 items-center'>
      <Link href={'mailto:jaylen@moonraydevelopment.com'} target='_blank'>
        <IoMailSharp size='35px' className='hover:opacity-70 transition-opacity duration-700' />
      </Link>
      <Link href={'https://calendly.com/jaylen-garner'} target='_blank'>
        <IoCalendarSharp size='35px' className='hover:opacity-70 transition-opacity duration-700' />
      </Link>
    </div>
  )
}

export default Contact