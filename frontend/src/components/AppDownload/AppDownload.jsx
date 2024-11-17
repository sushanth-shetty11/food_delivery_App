import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='appdownload' id='appdownload'>
        <p>For better experience Download The App <br></br> Tomata App</p>
        <div className="app-download-platforms">
           <img src={assets.app_store}/>
           <img src={assets.play_store}/>
        </div>
      
    </div>
  )
}

export default AppDownload
