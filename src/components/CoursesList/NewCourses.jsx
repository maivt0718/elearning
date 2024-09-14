import React, { useEffect, useState } from 'react'
import CoursesListItem from './CoursesListItem'
import { courses } from '../../services/courses.service'

const NewCourses = () => {
    const [newCourses, setnewCourses] = useState([])
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    useEffect(() => {
        courses.getListCourses().then((res)=>{
            const random = randomNumber(0, 80)
            const tempNewCourses = res.data.filter(item => item.maKhoaHoc).slice(random, random+8)
        
            setnewCourses(tempNewCourses)
        }).catch((err) => {console.error(err);})
    },[])
  return (
    <div className='new_course'>
        <div className='container'>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 col:grid-cols-1 sm:grid-cols-1'>
                {newCourses.map((item, index) => {
                    return <CoursesListItem image={item.hinhAnh} name={item.tenKhoaHoc} numberOfStudent={item.soLuongHocVien} numberOfSeen={item.luotXem} creation_date={item.ngayTao} id={item.maKhoaHoc?item.maKhoaHoc:"undefined"}/>
                })}
            </div>
        </div>
    </div>
  )
}

export default NewCourses