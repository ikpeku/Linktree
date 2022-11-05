import {useState, useRef} from 'react'

export const Contact = () => {
  const text = useRef()

  const [error, setError] = useState(false)
  // const [text, SetText] = useState("")

  const handleChange = (e) => {
    if(e.target.value.trim().length !== 0){
      setError(false)
      return
    }
  }

const handleSubmit = (e) => {
  e.preventDefault()

  let value = text.current.value

  if(value.trim().length === 0){
    setError(true)
    return
  }

}

  return (
    <>

      <div className="mx-auto  py-6 md:py-16 sm:px-0 lg:px-8">
        <div className="block md:p-6 rounded-lg shadow-lg bg-white lg:w-1/2 mx-auto">
          <h1 className='text-2xl font-bold text-[#101828] sm:text-3xl'>Contact Me</h1>
          <p className='max-w-lg py-4 text-[#475467]'>Hi there, contact me to ask me about anything you have in mind.</p>
          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 md:gap-4">
              <div className="form-group mb-6">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="first_name"
                  aria-describedby="emailHelp123"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  className="
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="last_name"
                  aria-describedby="emailHelp124"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="form-group mb-6">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="email"
                placeholder="yourname@email.com"
                required
              />
            </div>

            <div className="form-group mb-6">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
              onChange={handleChange}
                className={error ? `
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-[red]
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              ` : `
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`
              } ref={text}
                id="message"
                rows="4"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              ></textarea>
              {error && <p className='text-[red] text-sm'>Please enter a message</p>}
            </div>

            <div className="mb-6 flex">
             
            <div>
            <input
                type="checkbox"
                className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                id="check"
                required
              />
            </div>
              <span
                className="form-check-label inline-block text-gray-800"
              >
           
               <label htmlFor="check">
               You agree to providing your data to {'Annette Black'} who may
                contact you.
               </label>
               </span>
            </div>

            <button
              type="submit"
              className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
              id="btn__submit"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
