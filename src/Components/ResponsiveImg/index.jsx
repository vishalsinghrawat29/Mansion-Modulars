import React, { useState, useEffect } from 'react'

const ResponsiveImg = ({ desktopImg, mobileImg, alt }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <img
      src={isMobile ? mobileImg : desktopImg}
      alt={alt}
      style={{ width: '100%', height: 'auto' }}
    />
  )
}

export default ResponsiveImg
