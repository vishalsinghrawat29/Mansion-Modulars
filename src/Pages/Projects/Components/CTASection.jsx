import React from 'react'
import PageCTA from '../../../Components/PageCTA'

const CTASection = () => {
  return (
    <section className='page-cta-contianer'>
      <PageCTA
        imageUrl='https://res.cloudinary.com/dpghwxqij/image/upload/v1740643552/ProjectCTA_stk6nb.png'
        heading='Make Your Space Work for You'
        subheading='From concept to completion, we bring your vision to life with personalized, creative, and functional designs. Let’s make your space uniquely yours.'
        ctaText='📅 Get a Free Design Consultation'
      />
    </section>
  )
}

export default CTASection
