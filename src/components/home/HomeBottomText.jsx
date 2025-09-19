import React from 'react'
import { Link } from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
        <Link className='text-[7vw] uppercase leading-[7vw] border-3 border-white rounded-full px-12 pt-3 hover:border-[#d3fd50] hover:text-[#D3FD50]' to='/projects'>Work</Link>
        <Link className='text-[7vw] uppercase leading-[7vw] border-3 border-white rounded-full px-12 pt-3 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agence'>Agency</Link>
    </div>
  )
}

export default HomeBottomText