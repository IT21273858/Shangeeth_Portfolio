import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import Animatedtext from '@/components/Animatedtext'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icon'
import HireMe from '@/components/HireMe'
import Contact from '../../public/images/svgs/person.gif'
import Hireme from '../../public/images/svgs/hireme.gif'
import TransitionEffect from '@/components/TransitionEffect'
import cv from '../../public/documents/Shangeeth.pdf'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Shangeeth</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <TransitionEffect/>
      <main className='flex items-center text-dark w-full p-2 min-h-screen dark:text-light'>
        <Layout className='pt-0 lg:pt-2 md:pt-12 sm:pt-2'>
          <div className='flex items-center justify-between w-full lg:pt-4  lg:flex-col'>
            <div className='w-full xl:w-full md:w-full' style={{ width: 'max-content' }}>
            <Image src={profilePic} alt="Shangeeth" className='w-[80vw] h-auto lg:hidden md:inline-block md:w-full'
              priority
              sizes="(max-width: 768px) 100vw, 
              (max-width: 1200px) 50vw, 50vw"
              />
            </div>
              
           
            <div className=' flex flex-col items-center self-center lg:w-full lg:text-center'>
              <Animatedtext text="Designing Tomorrow's Technology Today" className='!text-5xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-5xl sm:!text-3xl '/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              A collection of my software engineering achievements.As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href={cv} target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark
                hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base
                ' download={true}>
                  Resume
                  <LinkArrow className={'w-6 ml-1'}/>
                </Link>
                <Link href="mailto:vijayathas12shangeeth@gmail.com" 
                className='ml-4 text-lg font-medium capitalize  text-dark underline dark:text-light md:text-base'>
                  Contact</Link><Image src={Contact} alt='Think' width={60} height={60} className='ml-1 bg-transparent dark:bg-gray-500    dark:rounded-full' />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='w-24 fixed right-4 bottom-4 top-[75%]
    flex flex-col items-center justify-center overflow-hidden md:hidden'>
        <Image src={Hireme} alt='Think' className='w-full h-auto' />
        </div>
        
      </main>
    </>
  )
}
