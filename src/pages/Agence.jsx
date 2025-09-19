import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'
import Lenis from '@studio-freight/lenis'

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  // const imageArray = ["https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg","https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg", "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg", "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg", "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg", "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg", "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  //   "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg", "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
  //    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg-"
  // ]
  const imageArray = [
    "/IMAGES/V1.jpg",
    "/IMAGES/V2.jpg",
    "/IMAGES/V3.jpg",
    "/IMAGES/V4.jpg",
    "/IMAGES/V5.jpg",
    "/IMAGES/V6.jpg",
    "/IMAGES/V7.jpg",
    "/IMAGES/V8.jpg",
    "/IMAGES/V9.jpg",
    "/IMAGES/V10.jpg",
    "/IMAGES/V11.jpg",
    "/IMAGES/V12.jpg",
    "/IMAGES/V13.jpg",
    "/IMAGES/V14.jpg"
  ]
  useGSAP(function () {

    const lenis = new Lenis({
      duration: 1.2,       // speed of scroll
      easing: (t) => 1 - Math.pow(1 - t, 3), // ease-out cubic
      smooth: true,
      smoothTouch: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Sync with ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        //  markers:true,
        start: "top 29.5%",
        end: "top -90%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,

        onUpdate: function (e) {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length);
          }
          else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div className='Main'>
      <div>
        <div className='bg-white text-black h-[200vh] pt-1 ' >
          <div className='section1 relative'>
            <div className='absolute top-40 left-[30vw]'> 
              <div ref={imageDivRef} className=' overflow-hidden h-[20vw] w-[15vw] rounded-3xl   '>
                <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
              </div>
            </div>
            <div className='relative font-[font2]'>
              <div className=' pt-[60vh]'>
                <h1 className='  text-[20vw] text-center uppercase leading-[17vw]'>SEVEN7Y <br />
                  TWO</h1>
              </div>
              <div className='pl-[40%] mt-20'>
                <p className='text-5xl'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
              </div>
            </div>
          </div>
          <div className="section2"></div>
        </div>
      </div>
      <div className='w-ful text-black overflow-hidden'>
        <div className="sec1 w-full flex font-semibold text-[1.6vw]">
          <div className='w-[36vw]  flex  pl-13 '><h1>Expertise</h1></div>
          <div className='w-[64vw] px-3'>
            <h1>
              <ul>
                <li>Strategy</li>
                <li>Advertising</li>
                <li>Branding</li>
                <li>Content</li>
              </ul>
            </h1>
          </div>
        </div>
        <div className='sec2 flex text-[1.4vw] font-semibold py-16 h-[50vh]'>
          <div className='w-1/3 flex  justify-center items-center'>
            <div>
              <p>Our Work_ Born in curiosity, raised by</p>
              <p>dedication and fed with a steady diet of</p>
              <p>creativity.</p>
            </div>
          </div>

          <div className='w-1/3 flex  justify-center items-center'>
            <div>
              <p>Our Creative_ Simmering in an</p>
              <p>environment where talent can come to a </p>
              <p>full boil. Encouraged to become the best </p>
              <p>versions of ourselves.</p>
            </div>
          </div>
          <div className='w-1/3 flex  justify-center items-center'>
            <div>
              <p>Our Culture_ We’re open to</p>
              <p>each other. Period. The team</p>
              <p>works together to create a</p>
              <p>space that makes us proud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence