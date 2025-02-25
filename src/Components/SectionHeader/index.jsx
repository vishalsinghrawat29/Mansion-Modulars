import React from 'react'
import './SectionHeaderStyle.css'

const SectionHeader = ({ title, subtitle }) => (
  <div className='section-header'>
    <h2>{title}</h2>
    <h5>{subtitle}</h5>
  </div>
)
export default SectionHeader
