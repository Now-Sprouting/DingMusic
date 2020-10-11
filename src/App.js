// *第三方库
import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// *功能性导入
import routes from '@/router'
import store from '@/store'
// *组件的引入
import DAppHeader from '@/components/app-header'
import DAppFooter from '@/components/app-footer'
import DPlayerBar from '@/pages/player/player-bar'

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div>
                    <DAppHeader />
                    <Suspense fallback={<h1>page loading</h1>}>
                        {renderRoutes(routes)}
                    </Suspense>
                    <DAppFooter />
                    <DPlayerBar />
                </div>
            </HashRouter>
        </Provider>
    )
})
