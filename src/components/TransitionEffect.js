import React from 'react'
import { motion } from 'framer-motion'
const TransitionEffect = () => {
  return (
    <>
    <motion.div className='fixed top-0 b right-full w-screen h-screen z-30 bg-radialBg'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    exit={{x:["0%","100%"],width:["0%","100%"]}}
    transition={{duration:0.8,ease:"easeInOut"}}
    />
     <motion.div className='fixed top-0 b right-full w-screen h-screen z-20 bg-radialBg2'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{delay:0.2,duration:0.8,ease:"easeInOut"}}
    />
     <motion.div className='fixed top-0 b right-full w-screen h-screen z-10 bg-radialBg3'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{delay:0.4,duration:0.8,ease:"easeInOut"}}
    />
    
    </>
  )
}

export default TransitionEffect