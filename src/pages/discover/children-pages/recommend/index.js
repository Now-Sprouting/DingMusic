import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '@/pages/discover/children-pages/recommend/store/actionCreators'

function DRecommend(props) {
  // *源码中 useSelector 中 返回的对象进行的比较方式是 === 比较:这就意味着每次其他组件数据发生变化的时候本组件都会重新加载,所以会造成性能上的损耗
  // *解决方法: useSelector 传入第二个参数 shallowEqual
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get('recommend').get('topBanners')
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return (
    <div>
      <h2>DRecommend:{topBanners.length}</h2>
    </div>
  )
}

export default memo(DRecommend)



