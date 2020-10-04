import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'



import {
    DThemeHeaderRecommendWraper,
    DThemeHeaderRecommendLeft,
    DThemeHeaderRecommendRight
} from './style'

const DThemeHeaderRecommend = function (props) {
    // *如果父组件不传入 keyword 那么 keyword 为 undefined 下面的 keyword.map就会报错,所以要给keyword一个默认的初始值
    // *也可以使用属性验证的方式
    // const {title, keyword = []} = props
    const { title, keyword } = props
    return (
        <DThemeHeaderRecommendWraper>
            <DThemeHeaderRecommendLeft>
                <i className='leftIcon sprite_02'></i>
                <h3 className='title'>{title}</h3>
                <div className='keyword'>
                    {keyword.map((item, index) => {
                        return (
                            <Fragment key={item}>
                                <span>{item}</span>
                                {index !== (keyword.length - 1) && <div className='bar'>|</div>}
                            </Fragment>
                        )
                    })}
                </div>
            </DThemeHeaderRecommendLeft>
            <DThemeHeaderRecommendRight>
                <NavLink to='/discover/recommend'>更多</NavLink>
                <i className='rightIcon sprite_02'></i>
            </DThemeHeaderRecommendRight>
        </DThemeHeaderRecommendWraper >
    )
}
DThemeHeaderRecommend.propTypes = {
    title: PropTypes.string.isRequired,
    keyword: PropTypes.array
}
DThemeHeaderRecommend.defaultProps = {
    keyword: []
  }
export default memo(DThemeHeaderRecommend)