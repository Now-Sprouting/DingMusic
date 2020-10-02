import React, { memo , useEffect} from 'react'
import { connect } from 'react-redux'

import { getTopBannerAction } from '@/pages/discover/children-pages/recommend/store/actionCreators'

function DRecommend(props) {
  const { topBanners, getBanners } = props
  useEffect(() => {
    getBanners()
  }, [getBanners])
  return (
    <div>
      <h2>DRecommend</h2>
    </div>
  )
}
const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
});

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(DRecommend));



