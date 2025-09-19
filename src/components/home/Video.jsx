import React from 'react'
const video = () => {
  return (
    <div className='h-full w-full'>
        <video className='h-full w-full object-cover' autoPlay loop muted src={`${import.meta.env.BASE_URL}V1.mp4`}></video>
    </div>
  )
}

export default video