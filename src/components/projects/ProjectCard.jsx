import React from 'react'

const ProjectCard = (props) => {
    return (
           <>
            {/* Image 1 */}
            <div className='w-1/2 group h-full hover:rounded-[50px] relative  transition-all rounded-none overflow-hidden'>
                <img className='object-cover h-full w-full transform transition-transform duration-500 group-hover:scale-105' src={props.image1} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all  absolute top-0 left-0 h-full w-full bg-black/10 z-5 flex items-center justify-center'>
                    <h2 className=' z-10 text-5xl font-[font1] border-3 rounded-full pt-1.5 px-30'>VIEW PROJECT</h2>
                </div>
            </div>
            {/* Image 2 */}
            <div className='w-1/2 h-full group hover:rounded-[50px] relative  transition-all rounded-none overflow-hidden'>
                <img className='object-cover h-full w-full transition-transform duration-500 group-hover:scale-105 ' src={props.image2} alt="" />
                <div className='opacity-0 group-hover:opacity-100 transition-all  absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center z-5'>
                    <h2 className='z-10 text-5xl font-[font1] border-3 rounded-full pt-1.5 px-30'>VIEW PROJECT</h2>
                </div>
            </div>
           </>
    )
}

export default ProjectCard