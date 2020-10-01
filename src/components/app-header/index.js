import React, { memo } from 'react'

import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from "antd";

export default memo(function DAppHeader() {
    const showSelectItem = (item, index) => {
        if (index < 3) {
            return (
                <NavLink to={item.link} key={item.title} className="linkItem" exact>{item.title}
                    <i className="icon"></i>
                </NavLink>)
        } else {
            return (<a href={item.link} key={item.title} className="linkItem">{item.title}</a>)
        }
    }


    return (
        <HeaderWrapper>
            <div className={"content wrap-v1"}>
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01">
                        网易云音乐
                    </a>
                    <div className={"headerLinks"}>
                        {
                            headerLinks.map((item, index) => {
                                return showSelectItem(item, index)
                            })
                        }
                    </div>

                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className="center">创作者中心</div>
                    <div className="login">登录</div>
                </HeaderRight>

            </div>
            <div className={"bottom-border"}></div>
        </HeaderWrapper>
    )
})
