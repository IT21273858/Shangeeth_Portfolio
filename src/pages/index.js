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
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Star Shangeeth</title>
        <meta name="description" content="Generated by create next app" />
        
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt="Shangeeth" className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <Animatedtext text="Designing &nbsp;Tomorrow's Technology Today" className='!text-5xl !text-left '/>
              <p className='my-4 text-base font-medium'>
              A collection of my software engineering achievements.As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications.
              Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href="/shangeeth.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark ' download={true}>
                  Resume
                  <LinkArrow className={'w-6 ml-1'}/>
                </Link>
                <Link href="mailto:vijayathas12shangeeth@gmail.com" 
                className='ml-4 text-lg font-medium capitalize  text-dark underline'>
                  Contact</Link><Image src={Contact} alt='Think' className='w-20 h-20' />
              </div>
            </div>
          </div>
        </Layout>
        <HireMe/>
        <div className='w-24 fixed right-4 bottom-4 top-[75%]
    flex flex-col items-center justify-center overflow-hidden'>
        <Image src={Hireme} alt='Think' className='w-full h-auto' />
        </div>
        
      </main>
    </>
  )
}
