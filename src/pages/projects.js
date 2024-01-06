import Animatedtext from '@/components/Animatedtext'
import { GithubIcon } from '@/components/Icon'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import fmc1 from '../../public/images/projects/fmc.png'
import fmc2 from '../../public/images/projects/fmc2.png'
import pn1 from '../../public/images/projects/plant nexus1.png'
import pn2 from '../../public/images/projects/plant nexus2.png'
import pc from '../../public/images/projects/procument3.png'
import arti from '../../public/images/projects/Artista.png'
import myVideo from '../../public/videos/final.mp4'

const FeaturedProject = ({type,title,summary,img,link,github}) => {
    return (
        <article className='w-full flex items-center justify-between relative rounded-br-2xl
        rounded-3xl border border-solid border-dark bg-light shadow-2xl p-10'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-cyan-600 rounded-br-3xl '/>
            <Link href={link} target='_blank' 
            className=' w-1/2 cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto'/>
            </Link>
            
            <div className=' w-1/2 flex flex-col items-start justify-between pl-6'>
                
                <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
                <h2 className=' my-2 w-full text-left text-4xl font-bold'> {title} </h2>
            </Link>
            <span className='text-primary font-medium text-xl'> {type} </span>
            <p className=' my-2 font-medium text-dark '> {summary} </p>
            <div className=' mt-2 flex items-center'>
                <Link href={github} target='_blank' className=' w-10'> <GithubIcon/> </Link>
                <Link href={link} target='_blank'
                className=' ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold'>Take a Look</Link>
            </div>
            </div>
        </article>
    )
}

const Project = ({title,type,img,link,github}) =>{
    return(
        <article className=' w-full flex flex-col items-center rounded-2xl
         border border-solid border-dark bg-light p-10 relative'>
            <div className=' absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-cyan-600 rounded-br-3xl '/>
             <Link href={link} target='_blank' 
            className=' w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>
            
            <div className=' w-full flex flex-col items-start justify-between mt-4'>
                
                <Link href={link} target='_blank' className=' hover:underline underline-offset-2'>
                <h2 className=' my-2 w-full text-left text-3xl font-bold'> {title} </h2>
            </Link>
            <span className='text-primary font-medium text-xl'> {type} </span>
            
            <div className=' w-full mt-2 flex items-center justify-between'>
            <Link href={link} target='_blank'
                className='text-lg font-semibold underline'>Look</Link>
                <Link href={github} target='_blank' className=' w-8'> <GithubIcon/> </Link>
                
            </div>
            </div>

        </article>
    )
}

const projects = () => {
  return (
    <>
    <Head>
        <title>
            Projects
        </title>
        <meta name="description" content="about my page"/>
    </Head>
    <main className='w-full mb-16 flex flex-col items-center justify-center p-16'>
        <Layout className='pt-2'>
            <Animatedtext text="Innovative Solutions" className='text-5xl'/>
            <Animatedtext text="Tangible Results" className='font-medium  mb-5 '/>
            
            <div className='grid grid-cols-12 gap-12 gap-y-20'>
                <div className='col-span-12 px-20'>
              <video controls autoPlay className='w-full' style={{borderRadius: '2rem',height: '90vh',objectFit: 'fill',}}>
                <source src={myVideo} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              </div>
                <div className='col-span-12'>
                    <FeaturedProject
                    title="Family Medical Care "
                    img={fmc1}
                    summary="Developed a comprehensive web application for efficient medication management and streamlined 
                    order processing for a medical clinic."
                    link="https://fmc-medi.vercel.app/"
                    github="https://github.com/IT21273858/FMC.git"
                    type="NextJS, NodeJS, MongoDB, Tailwind"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                    title="Family Medical Care "
                    img={fmc2}
                    summary="Developed a comprehensive web application for efficient medication management and streamlined 
                    order processing for a medical clinic."
                    link="https://fmc-medi.vercel.app/"
                    github="https://github.com/IT21273858/FMC.git"
                    type="NextJS, NodeJS, MongoDB, Tailwind"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                    title="Virtual Dressing Room "
                    img={arti}
                    summary="Developed a comprehensive web application for efficient medication management and streamlined 
                    order processing for a medical clinic."
                    link="https://github.com/IT21273858/Artista.git"
                    github="https://github.com/IT21273858/Artista.git"
                    type="ReactJs, NodeJs, ThreeJs, WebXR, MongoDB, APIs"
                    />
                </div>
            </div>
            <div className='grid grid-cols-12 gap-12  mt-20'>
                <div className='col-span-12'>
                <FeaturedProject
                    title="Plant Nexus"
                    img={pn1}
                    summary="A groundbreaking mobile platform fostering a thriving gardening community while revolutionizing 
                    plant transactions for a greener, more sustainable world. "
                    link="https://github.com/IT21334542/PlantNexus_Kt"
                    github="https://github.com/IT21334542/PlantNexus_Kt"
                    type=" Kotlin, MongodbRealm, WebXR, API integration"
                    />
                </div>
                <div className='col-span-6'>
                <Project
                    title="Plant Nexus "
                    img={pn2}
                    summary="Developed a comprehensive web application for efficient medication management and streamlined 
                    order processing for a medical clinic."
                    link="https://github.com/IT21334542/PlantNexus_Kt"
                    github="https://github.com/IT21334542/PlantNexus_Kt"
                    type="Kotlin, MongodbRealm, WebXR, API integration"
                    /> 
                </div>
                <div className='col-span-6'>
                <Project
                    title="Procurement for Construction Industry"
                    img={pc}
                    summary="Developed a comprehensive web application for efficient medication management and streamlined 
                    order processing for a medical clinic."
                    link="https://fmc-medi.vercel.app/"
                    github="https://fmc-medi.vercel.app/"
                    type="Kotlin, ReactJs, NodeJs, MongodbRealm, Junit "
                    />
                </div>
                
            </div>
        </Layout>
    </main>
    </>
  )
}

export default projects