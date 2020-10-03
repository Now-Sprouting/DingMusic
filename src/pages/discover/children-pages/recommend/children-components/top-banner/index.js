import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '@/pages/discover/children-pages/recommend/store/actionCreators'

import { Carousel } from 'antd'
import { DTopBannerWrapper, DBannerLeft, DBannerRight, DBannerControl } from './style'
export default memo(function TopBanner() {
    // *源码中 useSelector 中 返回的对象进行的比较方式是 === 比较:这就意味着每次其他组件数据发生变化的时候本组件都会重新加载,所以会造成性能上的损耗
    // *解决方法: useSelector 传入第二个参数 shallowEqual

    // *state
    const [CurrentIndex, setCurrentIndex] = useState(0)


    // *组件和redux相关联，获取数据以及对数据进行操作
    const { topBanners } = useSelector(state => ({
        // topBanners: state.get('recommend').get('topBanners')
        topBanners: state.getIn(['recommend', 'topBanners'])
    }), shallowEqual)
    const dispatch = useDispatch()

    // *Hooks相关
    const CarouselRef = useRef()
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    const bannerChange = useCallback((from, to) => {
        setTimeout(() => {
            setCurrentIndex(to);
        }, 0);
    }, []);

    // *其他业务逻辑
    const bgImage = topBanners[CurrentIndex] && (topBanners[CurrentIndex].imageUrl + "?imageView&blur=40x20")
    return (
        <DTopBannerWrapper bgImage={bgImage}>
            <div className={'banner wrap-v2'}>
                <DBannerLeft>
                    <Carousel effect="fade" autoplay dotPosition='bottom' beforeChange={bannerChange}
                        ref={CarouselRef} autoplaySpeed={4000}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div className='banner-item' key={item.imageUrl}>
                                        <img src={item.imageUrl} alt="" className='image' />
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </DBannerLeft>
                <DBannerRight>
                </DBannerRight>
                <DBannerControl>
                    <button className='btn-left btn' onClick={e => { CarouselRef.current.prev() }}></button>
                    <button className='btn-right btn' onClick={e => { CarouselRef.current.next() }}></button>
                </DBannerControl>
            </div>
        </DTopBannerWrapper>
    )
})
