import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
   <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg px-10 py-0'>
    <Layout className='py-4 flex items-center justify-between '>
      <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
      <div className='flex items-center'>
      Build with
      <span className='text-primary text-2xl px-1'>
      &#9825;
        </span>by&nbsp;<Link href="/" className='underline'>Star Shangeeth</Link>
      </div>
      
      <Link href="/">Hello</Link>
    </Layout>
   </footer>
  )
}

export default Footer