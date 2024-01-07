import Animatedtext from '@/components/Animatedtext'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import article1 from '../../public/images/articles/Virtual Dressing Room-master.jpg'
import article2 from '../../public/images/articles/Virtual Dressing Room-master2.jpg'
import { motion, useMotionValue } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


const FramerImage = motion(Image)

const MovingImg = ({title,img,link}) =>{
    const x= useMotionValue(0)
    const y= useMotionValue(0)
    const imgRef= useRef(null)

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block"
        x.set(event.pageX)
        y.set(-10)
    }
    function handleMouseLeave(event) {
        imgRef.current.style.display = "none"
        x.set(0)
        y.set(0)
    }
    return(
        <Link href={link} target='_blank'
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        >
            <h2 className=' capitalize text-xl font-semibold hover:underline'> {title} </h2>
            <FramerImage
            style={{x:x,y:y}}
            initial={{opacity:0}}
            whileInView={{opacity:1,transition:{duration:0.5,ease:"easeInOut"}}}
            ref={imgRef} src={img} alt={title} className=' z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden'/>
            </Link>
    )
}

const Article = ({img,title,date,link}) => {
    return(
        <motion.li
        initial={{y:20}}
        whileInView={{y:0, transition:{duration:0.5}}}
        viewport={{once:true}}
        className=' relative w-full p-4 py-6 my-4 rounded-xl flex items-center 
        justify-between bg-light text-cyan-600 first:mt-0 border border-solid border-dark
         border-r-4 border-b-4 dark:border-light dark:bg-dark
         sm:flex-col
         '>
            <MovingImg title={title} img={img} link={link}/>
            <span className=' text-blue-600 font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm'> {date} </span>
        </motion.li>
    )
}


const FeaturedArticles = ({img,title,time,summary,link}) => {
    return (
        <li className='relative col-span-1 w-full p-5 bg-light border border-solid border-dark rounded-2xl dark:border-light dark:bg-dark'>
            <div className=' absolute top-0 -right-3 sm:-right-2 -z-10 w-[101%] h-[103%] sm:h-[101%] md:h-[102%] rounded-[2.5rem] bg-cyan-600 rounded-br-3xl '/>
             <Link href={link} target='_blank' 
            className=' w-full inline-block cursor-pointer overflow-hidden rounded-lg'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{scale:1.05}}
                transition={{duration:0.2}}
                priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </Link>
            <Link href={link} target='_blank'>
                <h2 className='capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg'> {title} </h2>
            </Link>
            <p className='text-sm mb-2'> {summary} </p>
            <span className='text-primary font-semibold  dark:text-cyan-300'>{time} </span>
        </li>
    )
}
const articles = () => {
  return (
    <>
    <Head>
        <title>
            Articles
        </title>
        <meta name="articles" content="articles published by me"/>
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
        <Layout className='pt-16'>
            <Animatedtext text="Ink in Pixels" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mt-5 md:mt-5'/>
            <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16 sm:gap-y-15'>
                
                   <FeaturedArticles
                   title="Virtual Dressing Room: Smart Approach to Select  
                   and Buy Clothes"
                   summary="This paper explores the transformative potential of a 
                   Virtual Dressing Room as a solution to the challenges associated 
                   with online clothing shopping. Because of global exposure and 
                   cross-cultural influences, the fashion landscape has evolved 
                   significantly, resulting in a diverse and interconnected fashion 
                   ecosystem. However, the lack of a physical fitting experience and 
                   sizing uncertainties are hindering online clothing sales. It 
                   proposes a new approach that combines augmented reality 
                   (AR), virtual reality (VR), and artificial intelligence (AI) to 
                   address these issues. Data collection via interviews and surveys, 
                   technology integration via modern tools and frameworks, and 
                   an agile development process are all part of our methodology. 
                   The results of the research show that the app can provide a 
                   personalized and immersive fitting experience, accurate 
                   recommendations based on body measurements and skin tone 
                   analysis, and user engagement via an AI chatbot. User feedback 
                   emphasizes the importance of addressing sizing uncertainties 
                   when shopping online. In the final analysis, our findings show 
                   how technology has the potential to bridge the gap between in
                   person and online shopping, benefiting both consumers and 
                   retailers in the ever-changing fashion landscape. "
                   time="30 mins"
                   link="https://propulsiontechjournal.com/index.php/journal/article/view/2570"
                   img={article1}
                   />
                   
                   <FeaturedArticles
                   title="Virtual Dressing Room: Smart Approach to Select  
                   and Buy Clothes"
                   summary="This paper explores the transformative potential of a 
                   Virtual Dressing Room as a solution to the challenges associated 
                   with online clothing shopping. Because of global exposure and 
                   cross-cultural influences, the fashion landscape has evolved 
                   significantly, resulting in a diverse and interconnected fashion 
                   ecosystem. However, the lack of a physical fitting experience and 
                   sizing uncertainties are hindering online clothing sales. It 
                   proposes a new approach that combines augmented reality 
                   (AR), virtual reality (VR), and artificial intelligence (AI) to 
                   address these issues. Data collection via interviews and surveys, 
                   technology integration via modern tools and frameworks, and 
                   an agile development process are all part of our methodology. 
                   The results of the research show that the app can provide a 
                   personalized and immersive fitting experience, accurate 
                   recommendations based on body measurements and skin tone 
                   analysis, and user engagement via an AI chatbot. User feedback 
                   emphasizes the importance of addressing sizing uncertainties 
                   when shopping online. In the final analysis, our findings show 
                   how technology has the potential to bridge the gap between in
                   person and online shopping, benefiting both consumers and 
                   retailers in the ever-changing fashion landscape. "
                   time="30 mins"
                   link="https://propulsiontechjournal.com/index.php/journal/article/view/2570"
                   img={article1}
                   />
            </ul>
            <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
            <ul>
                <Article
                title="Virtual Dressing Room-master"
                date="Wed, Nov 8, 2023, 2:04PM"
                img={article2}
                link="https://propulsiontechjournal.com/index.php/journal/article/view/2570"
                />
                
                <Article
                title="Virtual Dressing Room-master"
                date="Wed, Nov 8, 2023, 2:04PM"
                img={article2}
                link="https://propulsiontechjournal.com/index.php/journal/article/view/2570"
                />
            </ul>
        </Layout>
    </main>
    </>
  )
}

export default articles