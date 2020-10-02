// *第三方库
import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
// *功能性导入
import routes from '@/router'
import store from '@/store'
// *组件的引入
import DAppHeader from '@/components/app-header'
import DAppFooter from '@/components/app-footer'

export default memo(function App() {
    return (
        <Provider store={store}>
            <HashRouter>
                <div>
                    <DAppHeader />
                    {renderRoutes(routes)}
                    <DAppFooter />
                </div>
            </HashRouter>
        </Provider>
    )
})
