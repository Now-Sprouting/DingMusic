import React, { memo, useState } from 'react'


import { DTopRankingWrapper } from './style'
export default memo(function DTopRanking() {
    const [state, setstate] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    return (
        <DTopRankingWrapper>
            <div className='content' >
                <div className='top-ranking'>
                    <div className='image'>
                        <img src="https://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg?param=80x80" alt="" />
                        <a href="#discover/ranking" className='cover sprite_covor'>  </a>
                    </div>
                    <div className='right'>
                        <a href="#discover/ranking" className='title'>
                            <h3>云音乐飙升榜</h3>
                        </a>
                        <div className='btns'>
                            <a href="#discover/ranking" className='play btn sprite_02' >  </a>
                            <a href="#discover/ranking" className='add btn sprite_02' >  </a>
                        </div>
                    </div>
                </div>
                <div className='list'>
                    {
                        state.map((item) => {
                            return (
                                <li key={item}>
                                    <div className='number'>{item}</div>
                                    <div className='li-right'>
                                        <a href="#/discober/ranking" className='text'>会不会(吉他版)会不会(吉他版)</a>
                                        <a href="#/discober/ranking" className='li-play btn sprite_02'>  </a>
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
