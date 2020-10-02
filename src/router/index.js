import React from 'react'

import DDiscover from '@/pages/discover'
import DMine from '@/pages/mine'
import DFriend from '@/pages/friend'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'


const routes = [
    {
        path: '/',
        exact: true,
        render: () => (
            <Redirect to='/discover' />
        )
    },
    {
        path: '/discover',
        exact: true,
        component: DDiscover
    },
    {
        path: '/mine',
        component: DMine
    },
    {
        path: '/friend',
        component: DFriend
    }
]

export default routes;