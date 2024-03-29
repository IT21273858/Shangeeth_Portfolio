import Animatedtext from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profile from '../../public/images/profile/developer-pic-2.jpg'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Expirence from '@/components/Expirence'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null)

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue,{duration: 6000})
    const isInView = useInView(ref,{once:true})
    useEffect(() => {
        if(isInView){
            motionValue.set(value)
        }
    },[isInView,value,motionValue])

    useEffect(() =>{
        springValue.on("change", (latest) =>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue,value])


    return <span ref={ref}></span>
}
const about = () => {
  return (
    <>
    <Head>
        <title>
            About Me
        </title>
        <meta name="aboutme" content="about my page"/>
    </Head>
    <TransitionEffect/>
    <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <Animatedtext text="Tech Explorer on a Mission" className='mb-16 text-7xl lg:!text-6xl sm:!text-5xl xs:!text-3xl sm:mb-8 sm:mt-3' />
          <div className='grid w-full grid-cols-8 gap-16 p-12 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                I&apos;m Shangeeth, an aspiring software engineer pursuing a Bachelor&apos;s degree in Software Engineering at SLIIT.
                My passion lies in crafting innovative digital experiences and leveraging technology to solve real-world problems.
                With a focus on design excellence and user-centered thinking, I&apos;m committed to creating functional and intuitive solutions across websites, mobile apps, and digital products.
              </p>
                <p className='my-4 font-medium'>
                My journey in software engineering spans a diverse range of programming languages and frameworks, including Kotlin, Java, ReactJS, NextJS, HTML5, PHP, and more.
                Proficient in project management and fostering strong client relationships, I&apos;ve honed my skills in areas like MVC architecture, Agile Scrum practices, and version control using Git.
                </p>
                <p className='font-medium'>
                My experience includes freelance work as a Website Developer and a role as a Project Manager, where I led teams to exceed project goals and timelines.
                I&apos;ve actively engaged in ensuring compliance with industry standards, building codes, and project specifications. Additionally, I hold a diploma in Cyber Security & Ethical Hacking, graduating with honors, showcasing my commitment to continuous learning and growth.
                </p>
            </div>
            <div className='col-span-3 flex items-center justify-center dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
              <div className='relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 shadow-md dark:bg-light'>
                <Image src={profile} alt='Shangeeth' className='w-full h-auto rounded-2xl'
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              </div>
            </div>


            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                   <AnimatedNumbers value={2}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm'> Statisfied Clients</h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={10}/>+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm'> Completed Projects</h2>
            </div>
            <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                    <AnimatedNumbers value={1}/> +
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm-text-base xs:text-sm'> Years of Expirence</h2>
            </div>
            </div>
            
          </div>
          <Skills/>
          <Expirence/>
          <Education/>
        </Layout>
        
    </main>
    
    </>
  )
}

export default about