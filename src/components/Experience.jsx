import { FaBriefcase } from 'react-icons/fa6'
import { PiCertificateFill } from 'react-icons/pi'

const Experience = () => {
  return (
    <div className='absolute top-4 right-4 flex space-x-4 opacity-70 items-center'>
      <FaBriefcase size='30px' className='hover:opacity-70 transition-opacity duration-700' />
      <PiCertificateFill size='35px' className='hover:opacity-70 transition-opacity duration-700' />
    </div>
  )
}

export default Experience
