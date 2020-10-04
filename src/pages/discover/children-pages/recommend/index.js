import React, { memo } from 'react'

import {
  DRecommendWraper,
  DContent,
  DRecommendLeft,
  DRecommendRight
} from './style'
import DTopBanner from '../recommend/children-components/top-banner'
import DHotRecommed from '../recommend/children-components/hot-recommend'
import DNewAlbum from '../recommend/children-components/new-album'
import DRecommendRanking from '../recommend/children-components/recommend-ranking'

function DRecommend(props) {
  return (
    <DRecommendWraper>
      <DTopBanner>
      </DTopBanner>
      <DContent className='wrap-v2'>
        <DRecommendLeft>
          <DHotRecommed>
          </DHotRecommed>
          <DNewAlbum>
          </DNewAlbum>
          <DRecommendRanking>
          </DRecommendRanking>
        </DRecommendLeft>
        <DRecommendRight></DRecommendRight>
      </DContent>
    </DRecommendWraper>
  )
}

export default memo(DRecommend)



