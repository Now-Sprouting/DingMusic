import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotRankingAction } from '../../store/actionCreators'


import { DRecommendRankingWraper } from './style'
import DThemeHeaderRecommend from '@/components/theme-header-recommend'
import DTopRanking from '@/components/top-ranking'

export default memo(function DRecommendRanking() {
    const dispatch = useDispatch()
    const {fastUpRank} = useSelector(state => ({
        fastUpRank: state.getIn(['recommend', 'fastUpRank'])
    }))
    const {newMusicRank} = useSelector(state => ({
        newMusicRank: state.getIn(['recommend', 'newMusicRank'])
    }))
    const {originMusicRank} = useSelector(state => ({
        originMusicRank: state.getIn(['recommend', 'originMusicRank'])
    }))
    useEffect(() => {
        dispatch(getHotRankingAction(0))
        dispatch(getHotRankingAction(2))
        dispatch(getHotRankingAction(3))
    }, [dispatch])
    return (
        <DRecommendRankingWraper>
            <DThemeHeaderRecommend title='榜单'>
            </DThemeHeaderRecommend>
            <div className='recomendContent'>
                <DTopRanking info={fastUpRank}>
                </DTopRanking>
                <DTopRanking info={newMusicRank}>
                </DTopRanking>
                <DTopRanking info={originMusicRank}>
                </DTopRanking>
            </div>
        </DRecommendRankingWraper>
    )
})
