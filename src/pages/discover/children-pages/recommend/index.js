import React, { memo} from 'react'

import {DRecommendWraper} from './style'
import TopBanner from '../recommend/children-components/top-banner'

function DRecommend(props) {
  return (
    <DRecommendWraper>
      <TopBanner>
      </TopBanner>
    </DRecommendWraper>
  )
}

export default memo(DRecommend)



