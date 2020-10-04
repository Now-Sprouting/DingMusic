import React, { memo } from 'react'

import {
  DRecommendWraper,
  DContent,
  DRecommendLeft,
  DRecommendRight
} from './style'
import TopBanner from '../recommend/children-components/top-banner'

function DRecommend(props) {
  return (
    <DRecommendWraper>
      <TopBanner>
      </TopBanner>
      <DContent className='wrap-v2'>
        <DRecommendLeft></DRecommendLeft>
        <DRecommendRight></DRecommendRight>
      </DContent>
    </DRecommendWraper>
  )
}

export default memo(DRecommend)



