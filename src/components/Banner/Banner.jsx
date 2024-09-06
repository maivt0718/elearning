import React from 'react'
import ButtonCustom from "../ButtonCustom/ButtonCustom"
import useResponsive from '../../hooks/useResponsive'
import { deviceWidth } from '../../common/deviceWidth.js'

const Banner = () => {
  const isResponsive = useResponsive(deviceWidth)

  return (
    <div className='elearning_banner'>
      <div className='container'>
        <div className={`${isResponsive.mobile || isResponsive.tablet ? "block" : "flex"} banner_content`}>
          <div className={`banner_left ${isResponsive.mobile || isResponsive.tablet ? "w-full" : "w-1/2"}`}>
            <h1 className='banner_title'>First Education Theme  <span className='text-pink-400'>Marketplace</span> </h1>
            <p>This will be the best place for anyone to sell courses online, with all the necessary eCommerce features. This is Udemy - Education WordPress Theme.</p>
            <div className="flex banner_btn space-x-3">
              <ButtonCustom content={"Get statred"} classname={"w-1/2 py-2"} bgColor={"bg-pink-400"}/>
              <ButtonCustom content={"Get statred"} classname={"w-1/2 py-2"}/>
            </div>
          </div>
          <div className={`banner_right ${isResponsive.mobile || isResponsive.tablet ? "w-full" : "w-1/2"}`}>
            <img src='https://html.thimpress.com/eduma-html/images/marketplace/banner.png'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner