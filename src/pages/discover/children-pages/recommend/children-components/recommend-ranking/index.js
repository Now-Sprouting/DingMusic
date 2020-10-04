import React, { memo } from 'react'

import { DRecommendRankingWraper } from './style'
import DThemeHeaderRecommend from '@/components/theme-header-recommend'
export default memo(function DRecommendRanking() {
    return (
        <DRecommendRankingWraper>
            <DThemeHeaderRecommend title='榜单'>
            </DThemeHeaderRecommend>
        </DRecommendRankingWraper>
    )
})
