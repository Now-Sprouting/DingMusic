import React from 'react'

import DDiscover from '@/pages/discover'
import DRecommend from "@/pages/discover/children-pages/recommend";
import DRanking from "@/pages/discover/children-pages/ranking";
import DSongs from "../pages/discover/children-pages/songs";
import DDjradio from "../pages/discover/children-pages/djradio";
import DArtist from "../pages/discover/children-pages/artist";
import DAlbum from "../pages/discover/children-pages/album";
import DMine from '@/pages/mine'
import DFriend from '@/pages/friend'
import DPlayer from '@/pages/player'
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
        component: DDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to="/discover/recommend" />
                )
            },
            {
                path: "/discover/recommend",
                component: DRecommend
            },
            {
                path: "/discover/ranking",
                component: DRanking
            },
            {
                path: "/discover/songs",
                component: DSongs
            },
            {
                path: "/discover/djradio",
                exact: true,
                component: DDjradio
            },
            {
                path: "/discover/artist",
                component: DArtist
            },
            {
                path: "/discover/album",
                component: DAlbum
            },{
                path: "/discover/player",
                component: DPlayer
            }
        ]
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