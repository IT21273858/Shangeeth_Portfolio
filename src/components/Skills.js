import React from 'react'
import {motion} from 'framer-motion'


const Skill = ({name,x,y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent
        xs:text-dark xs:dark:text-light xs:font-bold
        '
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.5}}}
        viewport={{once:true}}
        >
            {name}
    
        </motion.div>
    )
}
const Skills = () => {
  return (
    <>
    <hr className="w-64 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
    <h2 className='font-bold text-8xl mt-50 w-full text-center md:text-6xl md:mt-25'>Skills</h2>
    <div className=' w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight mb-10 dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm

    '>
    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
    p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover={{scale:1.05}} >
        Web

    </motion.div>
    <Skill name="ReactJs" x="0vw" y="-9vw"/>
    <Skill name="ExpressJs" x="0vw" y="9vw"/>
    <Skill name="NextJs" x="-19vw" y="1vw"/>
    <Skill name="JavaScript" x="19vw" y="1vw"/>
    <Skill name="Java" x="-14vw" y="-11vw"/>
    <Skill name="Kotlin" x="14vw" y="-11vw"/>
    <Skill name="FireBase" x="15vw" y="10vw"/>
    <Skill name="MongoDB" x="22vw" y="-6vw"/>
    <Skill name="Agile" x="25vw" y="-15vw"/>
    <Skill name="Git" x="-13vw" y="11vw"/>
    <Skill name="MVC" x="-24vw" y="-15vw"/>
    <Skill name="ReactNative" x="-23vw" y="-6vw"/>
    <Skill name="Html 5" x="-44vw" y="-5vw"/>
    
    <Skill name="Figma" x="0vw" y="-19vw"/>
    <Skill name="CSS" x="-28vw" y="12vw"/>
    <Skill name="TailwindCSS" x="38vw" y="2vw"/>
    </div>

    
    
    
    </>
  )
}

export default Skills