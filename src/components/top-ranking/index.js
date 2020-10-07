import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { changeImgSize } from '@/utils/format-utils'
import { changeAboutPlayAction } from '@/pages/player/store'

import { DTopRankingWrapper } from './style'
export default memo(function DTopRanking(props) {
    const { info } = props;
    const { tracks = [] } = props.info;

    const dispatch = useDispatch()
    const changeSong = (ids) => {
        dispatch(changeAboutPlayAction(ids))
    }
    return (
        <DTopRankingWrapper>
            <div className='content' >
                <div className='top-ranking'>
                    <div className='image'>
                        <img src={changeImgSize(info.coverImgUrl, 80)} alt="" />
                        <a href="#discover/ranking" className='cover sprite_covor'>  </a>
                    </div>
                    <div className='right'>
                        <a href="#discover/ranking" className='title'>
                            <h3>{info.name}</h3>
                        </a>
                        <div className='btns'>
                            <a href="#discover/ranking" className='play btn sprite_02' >  </a>
                            <a href="#discover/ranking" className='add btn sprite_02' >  </a>
                        </div>
                    </div>
                </div>
                <div className='list'>
                    {
                        tracks.slice(0, 10).map((item, index) => {
                            return (
                                <li key={item.id}>
                                    <div className='number'>{index + 1}</div>
                                    <div className='li-right'>
                                        <a href="#/discober/ranking" className='text'>{item.name}</a>
                                        <div
                                            href="#/discober/ranking"
                                            className='li-play btn sprite_02'
                                            onClick={e => { changeSong(item.id) }}
                                        >  </div>
                                        <a href="#/discober/ranking" className='li-add btn sprite_icon2'>  </a>
                                        <a href="#/discober/ranking" className='li-coll btn sprite_02'>  </a>
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>
                <div className='more'>
                    <a href="#/discober/ranking">查看全部</a>
                </div>
            </div>
        </DTopRankingWrapper>
    )
})
