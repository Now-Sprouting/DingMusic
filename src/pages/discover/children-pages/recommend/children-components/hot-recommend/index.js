import React, { memo , useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {getHotRecommendAction} from '../../store/actionCreators'
import {count} from '../../store/constants'

import { DHotRecommendWraper } from './style'
import DThemeHeaderRecommend from '@/components/theme-header-recommend'
import DSongCover from '@/components/song-cover'
export default memo(function DRecommendRanking() {

    const dispatch = useDispatch()
    const {hotRecommend} = useSelector(state => ({
        hotRecommend: state.getIn(['recommend', 'hotRecommend'])
    }))

    useEffect(() => {
        dispatch(getHotRecommendAction(count.hotRecommendLimit))
    }, [dispatch])
    return (
        <DHotRecommendWraper>
            <DThemeHeaderRecommend title='热门推荐' keyword={['华语', '流行', '摇滚', '民谣', '电子']}>
            </DThemeHeaderRecommend>
            <div className='content'>
                {
                    hotRecommend.map((item, index) => {
                        return <DSongCover info={item} key={item.id} index={index} size={140}></DSongCover>
                    })
                }
            </div>
        </DHotRecommendWraper>
    )
})
