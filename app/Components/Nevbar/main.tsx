import React from 'react'

export default function Nevbar() {
  return (
    <div  >
      <div className='bg-blue-900 text-white flex justify-between h-12 items-center' >
    <h1 className='text-xl m-2' >RIDA</h1>
    <ul className='mr-2 flex gap-4 '  >
      <a className='hover:text-black' href="">home</a>
      <a className='hover:text-black' href="">about</a>
      <a className='hover:text-black'href="">contect</a>
      
    </ul>
  </div>
    </div>
  )
}

