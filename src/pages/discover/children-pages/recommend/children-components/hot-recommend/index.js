import React, { memo } from 'react'

import { DHotRecommendWraper } from './style'

import DThemeHeaderRecommend from '@/components/theme-header-recommend'
export default memo(function DRecommendRanking() {
    return (
        <DHotRecommendWraper>
            <DThemeHeaderRecommend title='热门推荐' keyword={['华语', '流行', '摇滚', '民谣', '电子']}>
            </DThemeHeaderRecommend>
        </DHotRecommendWraper>
    )
})
