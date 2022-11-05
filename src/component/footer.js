import React from 'react'
import img from '../constant'
export const Footer = () => {

    const { zurilogo, I4GLogo } = img
  return (
    <div className='md:absolute md:bottom-5 w-full'>
        <div className="md:flex justify-between space-y-5 md:mt-16 border-t-2 border-gray-200 w-5/6 mx-auto py-3">
        <a
          href=" https://training.zuri.team/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img id="zuri" src={zurilogo} alt="logo" />
        </a>

        <p className='pb-5 md:pt-0'>HNG Internship 9 Frontend Task</p>

        <a href="https://ingressive.org/">
          <img id="I4G" src={I4GLogo} alt="logo" />
        </a>
      </div>
    </div>
  )
}
