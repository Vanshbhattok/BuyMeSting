import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div >
        
      <footer className='bg-slate-950 text-white justify-between px-4 h-15 flex items-center justify-center'>
        <p className='text-center'>Copyright &copy; {currentYear} Buy Me Sting - All Rights reserved</p>
      </footer>
    </div>
  )
}

export default Footer
