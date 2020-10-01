import DDiscover from '@/pages/discover'
import DMine from '@/pages/mine'
import DFriend from '@/pages/friend'


const routes = [
    {
        path: '/',
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