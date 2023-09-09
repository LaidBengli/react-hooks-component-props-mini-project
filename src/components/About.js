import React from 'react'

const About = ({logo, txt}) => {
    console.log('about ' + txt)
    const source = logo || "https://via.placeholder.com/215"
  return (
    <aside>
       <img src={source} alt='blog logo'></img> 
       <p>{txt}</p>
    </aside>
  )
}

export default About