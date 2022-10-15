import React from 'react'
import './firstpage.css'
import twitter from '../../assets/Twitter.svg'
import IMG1 from '../../assets/Avatar1.svg'
import IMG2 from '../../assets/Avatar2.svg'
import IMG3 from '../../assets/Avatar3.svg'
import IMG4 from '../../assets/Avatar4.svg'
import IMG5 from '../../assets/Avatar5.svg'
import IMG6 from '../../assets/Avatar6.svg'
import LOGO from '../../assets/Logo.svg'

const Firstpage = () => {
  return (
    <div className='container'>

        <div className='logo'>
          <img src={LOGO} alt="" />
        </div>

        <div className='thr-img-top'>
          <div className='Image3'>
            <img src={IMG3} alt="" />
          </div>
          <div className='right-top-img'>
            <div className='Image5'>
            <img src={IMG5} alt="" />
            </div>
            <div className='Image2'>
              <img src={IMG2} alt="" />
            </div>
          </div>
        </div>
        
        <h1>Meet New Entrepreneurs</h1>
        <h4>Meet is a new social media platform fir Entrepreneurs to connect and socialize</h4>
        <button className='btn'>Get notified at launch</button>
        <div className='twitter-follow'>
            <img src={twitter} alt="" />
            <h3>Follow us on Twitter</h3>
        </div>
        <div className='Image1'>
          <img src={IMG1} alt="" />
        </div>
        <div className='Image4'>
          <img src={IMG4} alt="" />
        </div>
        <div className='Image6'>
            <img src={IMG6} alt="" />
          </div>
    </div>
  )
}

export default Firstpage