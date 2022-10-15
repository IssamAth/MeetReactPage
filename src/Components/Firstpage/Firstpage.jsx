import React from 'react'
import './firstpage.css'
import twitter from '../../assets/Twitter.svg'

const Firstpage = () => {
  return (
    <div className='container'>

        <h1>Meet New Entrepreneurs</h1>
        <h4>Meet is a new social media platform fir Entrepreneurs to connect and socialize</h4>
        <button className='btn'>Get notified at launch</button>
        <div>
            <h3>Follow us on Twitter</h3>
            <img src={twitter} alt="" />
        </div>

    </div>
  )
}

export default Firstpage