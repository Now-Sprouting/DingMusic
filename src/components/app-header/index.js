import React, { memo } from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default memo(function DAppHeader() {
    return (
        <div>
            <NavLink to="/">发现音乐</NavLink>
            <NavLink to="/mine">我的音乐</NavLink>
            <NavLink to="/friend">朋友</NavLink>
        </div>
    )
})
