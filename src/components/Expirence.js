import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion'
import LiIcon from './LiIcon'
const Details = ({position,company,companylink,time,address,work}) => {
    const ref = useRef(null)
    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:2,type:"spring"}}

        >
            <h3 className=' capitalize font-bold text-2xl'>{position}&nbsp;<a target='_blank' href={companylink} className='text-primary dark:text-primaryDark  capitalize '>@{company}</a> </h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 '>
                {time} | {address}
            </span>
            <p className=' font-medium w-full'>
                {work}
            </p>
        </motion.div>
    </li>
}

const Expirence = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:ref,
            offset:["start end","center start"]
        }
    )
  return (
    <div className='my-60'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Expirence
        </h2>
        <div ref={ref} className='w-[75%] mx-auto relative '>
            <motion.div 
             style={{scaleY:scrollYProgress}}
            className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light'/>

           

            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details
                position="Website Developer"
                companylink="https://www.uki.life/"
                company="UKI"
                time="12/2020 to 02/2021"
                address="Sri Lanka"
                work="Worked as a Website Developer in UKI as a freelancer.
                Trained, educated, and supported project team members to achieve top-notch standards.
                Established goals and timelines to successfully implement projects. "
                />
                <Details
                position="Project Manager"
                companylink="https://www.uki.life/"
                company="Diamonds Education"
                time="11/2020 to 02/2021 "
                address="Canada"
                work="Worked for the company very respectfully and completed the project before the deadline they gave. 
                Trained, educated, and supported project team members to achieve top-notch standards. 
                Established goals and timelines to successfully implement projects. 
                Inspected finished projects to meet regulatory requirements, building codes, and zoning specifications. 
                Created and delivered status reports and identified pending action items for resolution.  "
                />
            </ul>
        </div>
    </div>
  )
}

export default Expirence