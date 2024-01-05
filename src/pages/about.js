import Animatedtext from '@/components/Animatedtext'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
    <Head>
        <title>
            About Me
        </title>
        <meta name="description" content="about my page"/>
    </Head>
    <main>
        <Animatedtext text="Passion is Purpose"/>
    </main>
    
    </>
  )
}

export default about