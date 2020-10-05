import React, { memo } from 'react'

import { DRecommendRankingWraper } from './style'
import DThemeHeaderRecommend from '@/components/theme-header-recommend'
import DTopRanking from '@/components/top-ranking'
export default memo(function DRecommendRanking() {
    return (
        <DRecommendRankingWraper>
            <DThemeHeaderRecommend title='榜单'>
            </DThemeHeaderRecommend>
            <div className='content'>
                <DTopRanking>
                </DTopRanking>
            </div>
        </DRecommendRankingWraper>
    )
})
