import React from 'react'
import { useRoutes } from 'react-router-dom'
import { path } from '../common/path'
import HomeTemplate from '../templates/HomeTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import Banner from '../components/Banner/Banner'
import CoursesListItem from '../components/CoursesList/CoursesListItem'
import NewCourses from '../components/CoursesList/NewCourses'
import CourseDetails from '../components/CourseDetails/CourseDetails'
import Login from '../components/Login/Login'

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
                }
                
            ]
           
        },
        {
            path: `${path.logIn}`,
            element: <Login/>
        },
        {
            path: `${path.PageNotFound}`,
            element: <PageNotFound/>
        }
    ])

  return routes
}

export default useRouteCustom