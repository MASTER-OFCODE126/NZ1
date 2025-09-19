import React from 'react'
const video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src="./V1.mp4"></video>
    </div>
  )
}

export default video