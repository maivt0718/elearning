import React from 'react'
import { useRoutes } from 'react-router-dom'
import { path } from '../common/path'
import HomeTemplate from '../templates/HomeTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import Banner from '../components/Banner/Banner'
import CoursesListItem from '../components/CoursesList/CoursesListItem'
import NewCourses from '../components/CoursesList/NewCourses'

const useRouteCustom = () => {
    const routes = useRoutes([
        {
            path: `${path.homePage}`,
            element: <HomeTemplate/>,
            children:[
                {
                    path: "/",
                    element: [<Banner/>, <NewCourses/>]
                },
                
                
            ]
           
        },
        {
            path: `${path.PageNotFound}`,
            element: <PageNotFound/>
        }
    ])

  return routes
}

export default useRouteCustom