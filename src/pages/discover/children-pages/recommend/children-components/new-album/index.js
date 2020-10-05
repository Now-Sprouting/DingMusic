import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import { DNewAlbumWraper } from './style'
import DThemeHeaderRecommend from '@/components/theme-header-recommend'
import DAlbumCover from '@/components/album-cover'
import { Carousel } from 'antd'

export default memo(function DRecommendRanking() {
    const dispatch = useDispatch()
    const { newAlbum } = useSelector(state => ({
        newAlbum: state.getIn(['recommend', 'newAlbum'])
    }), shallowEqual)

    const carouselRef = useRef()
    useEffect(() => {
        dispatch(getNewAlbumAction(10))
    }, [dispatch])
    return (
        <DNewAlbumWraper>
            <DThemeHeaderRecommend title='新碟上架'>
            </DThemeHeaderRecommend>
            <div className='content'>
                <button className='btn button-left sprite_02' onClick={e => {carouselRef.current.prev()}}></button>
                <div className='carousel'>
                    <Carousel dots={false} ref={carouselRef} speed={1500}>
                        {
                            [0, 1].map(item => {
                                return (
                                    <div key={item} className='banner'>
                                        {
                                            newAlbum.slice(item * 5, (item + 1) * 5).map(iten => {
                                                return <DAlbumCover
                                                    key={iten.name}
                                                    info={iten}
                                                    size={100}
                                                    width={118}
                                                    bgp='-570px' />

                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
                <button className='btn button-right sprite_02' onClick={e => {carouselRef.current.next()}}></button>
            </div>
        </DNewAlbumWraper>
    )
})
