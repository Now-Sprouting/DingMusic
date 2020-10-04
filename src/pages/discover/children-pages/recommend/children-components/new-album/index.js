import React, { memo } from 'react'

import {DNewAlbumWraper} from './style'
import DThemeHeaderRecommend from '@/components/theme-header-recommend'
export default memo(function DRecommendRanking() {
    return (
        <DNewAlbumWraper>
            <DThemeHeaderRecommend title='新碟上架'>
            </DThemeHeaderRecommend>
        </DNewAlbumWraper>
    )
})
