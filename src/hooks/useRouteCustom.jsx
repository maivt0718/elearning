import React from 'react'
import { useRoutes } from 'react-router-dom'
import { path } from '../common/path'
import HomeTemplate from '../templates/HomeTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'

const useRouteCustom = () => {
    const routes = useRoutes([
        {
            path: `${path.homePage}`,
            index: true,
            element: <HomeTemplate/>
        },
        {
            path: `${path.PageNotFound}`,
            element: <PageNotFound/>
        }
    ])

  return routes
}

export default useRouteCustom