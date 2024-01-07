import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-ligh p-25 dark:bg-dark xl:p-17 lg:p-9 md:p-5 sm:p-2 ${className}`}>
        {children}
    </div>
  )
}

export default Layout