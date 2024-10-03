import React from 'react'
import { useRoutes } from 'react-router-dom'
import { path } from '../common/path'
import HomeTemplate from '../templates/HomeTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import Banner from '../components/Banner/Banner'
import CoursesListItem from '../components/CoursesList/CoursesListItem'
import NewCourses from '../components/CoursesList/NewCourses'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import AdminTemplate from '../templates/AdminTemplate/AdminTemplate'
import UserDetails from '../components/UserDetails/UserDetails'
import Login from '../pages/Login/Login'
import AdminLogin from '../pages/AdminLogin/AdminLogin'
import ManagerUser from '../pages/ManagerUser/ManagerUser'

const useRouteCustom = () => {
    const routes = useRoutes([
        {
            path: `${path.homePage}`,
            element: <HomeTemplate/>,
            children:[
                {
                    path: `${path.homePage}`,
                    element: [<Banner key={"banner"}/>, <NewCourses key={"new_courses"}/>]
                },
                {
                    path: `${path.courseDetails}/:slug`,
                    element: [<CourseDetails key={"course_details"}/>]
                },
                {
                    path: `${path.user}`,
                    element: <UserDetails/>
                }
                
            ]
           
        },
        {
            path: `${path.logIn}`,
            element: <Login/>
        },
        {
            path: `${path.admin}`,
            element: <AdminTemplate/>,
            children:[
                {
                    index:true,
                    element: <ManagerUser/>
                }
            ]
        },
        {
            path: `${path.PageNotFound}`,
            element: <PageNotFound/>
        },
        ,
        {
            path: `${path.admin_login}`,
            element: <AdminLogin/>
        },
    ])

  return routes
}

export default useRouteCustom