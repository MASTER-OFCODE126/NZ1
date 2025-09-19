import React from 'react'
import Video from './Video'
const HomeHeroText = () => {
    return (
        <div className='font-[font1] pt-5 text-center '>
            <div className='text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center'>The spark for </div>
            <div className='text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center'> all
                <div id='zx' className='   h-[8vw]  px-3 -mt-2 rounded-full overflow-hidden  flex items-center justify-center'>
                        <Video className='rounded-full object-cover h-full w-full' />
                </div>things
            </div>
            <div className='text-[9.5vw] uppercase leading-[9vw] flex items-center justify-center'>creative</div>
        </div>
    )
}

export default HomeHeroText