import { IoMdSend } from 'react-icons/io'

const ContactForm = () => {
  return (
    <div className='form_container'>
      <h2 className='text-xl font-bold'>Contact Me</h2>

      <form className='flex flex-col justify-center items-center w-full space-y-4'>
        <input
          type='text'
          //   value={name}
          //   onChange={(e) => setName(e.target.value)}
          placeholder='Name'
          className='input'
          required
        />
        <input
          type='email'
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          className='input'
          required
        />
        <input
          type='text'
          //   value={subject}
          //   onChange={(e) => setSubject(e.target.value)}
          placeholder='Subject'
          className='input'
          required
        />

        <textarea
          //   value={message}
          //   onChange={(e) => setMessage(e.target.value)}
          placeholder='Message...'
          className='textarea'
          required
        />

        <div className='w-full flex justify-center'>
          <button type='submit' className='button'>
            <IoMdSend size='32px' />
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
