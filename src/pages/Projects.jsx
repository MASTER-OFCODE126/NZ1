import React, { useRef, useEffect } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'
const Projects = () => {
  const mainRef = useRef(null);
  const projects = [
    {
      image1: "/IMG/S1.jpg",
      image2: "/IMG/S2.jpg"
    },
    {
      image1: "/IMG/S3.jpg",
      image2: "/IMG/S4.jpg"
    },
    {
      image1: "/IMG/S5.jpg",
      image2: "/IMG/S6.jpg"
    },
    {
      image1: "/IMG/S7.jpg",
      image2: "/IMG/S8.jpg"
    },
    {
      image1: "/IMG/S9.jpg",
      image2: "/IMG/S10.jpg"
    },
    {
      image1: "/IMG/S11.jpg",
      image2: "/IMG/S12.jpg"
    },
    {
      image1: "/IMG/S13.jpg",
      image2: "/IMG/S14.jpg"
    },
    {
      image1: "/IMG/S15.jpg",
      image2: "/IMG/S16.jpg"
    }
  ]

  gsap.registerPlugin(ScrollTrigger)

  // useGSAP(function(){



  //       gsap.from('.Slide',{
  //         height:"100px",
  //         stagger:{
  //          amount:0.4
  //         },
  //         scrollTrigger:{
  //          trigger:'.main',
  //          start:"top 90%",
  //          end:"top -90%",
  //          scrub:true
  //         }
  //       })
  // })

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,   // lower = snappier, higher = smoother
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // make GSAP + ScrollTrigger sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    return () => {
      lenis.destroy();
    };
  }, []);
   
  
  useGSAP(() => {
    gsap.utils.toArray(".Slide").forEach((slide, i) => {
      gsap.fromTo(
        slide,
        { height: 0, opacity: 0 },
        {
          height: "500px",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: slide,
            start: "top 80%",
            end: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

  return (
    <div className='p-2 text-black'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] text-[10vw] uppercase'>WORK</h2>
      </div>
      <div ref={mainRef} className='-mt-7  text-white main'>
        {/* Section 1 */}
        {projects.map(function (elem, idx) {
          return <div key={idx} className='Slide w-full  mb-3  flex gap-3'>
            <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects