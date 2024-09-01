import React from 'react'
import LogoIcon from '../LogoIcon/LogoIcon'
import CoursesList from '../CoursesList/CoursesList'

const Header = () => {
  return (
    <div className='header container'>
        <div className='flex space-x-10'>
            <LogoIcon></LogoIcon>
            <CoursesList></CoursesList>
        </div>
    </div>
  )
}

export default Header
