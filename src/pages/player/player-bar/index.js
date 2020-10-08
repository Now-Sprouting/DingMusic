import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSongDetailAction, changeSequenceAaction, changeSonDetialAction } from '../store/actionCreator'
import { formatDate } from '@/utils/format-utils'

import { Slider } from 'antd'
import { DPlayerBarWrapper } from './style'
import { changeImgSize } from '../../../utils/format-utils'
import { getPlaySong } from '@/services/player'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default memo(function DPlayerBar() {
    // *redux hook
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong'])
    }), shallowEqual)
    const { sequence } = useSelector(state => ({
        sequence: state.getIn(['player', 'sequence'])
    }), shallowEqual)
    const { lyricList } = useSelector(state => ({
        lyricList: state.getIn(['player', 'lyricList'])
    }))
    const {playList} = useSelector(state => ({
        playList: state.getIn(['player', 'playList'])
    }))
    const dispatch = useDispatch()

    // *react hook
    const audioRef = useRef()
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [sliderIsChange, setSliderIsChange] = useState(false)
    const [isPlaying, setisPlaying] = useState(false)
    const [loopIsVis, setloopIsVis] = useState(false)
    const [lyricTipIsVis, setlyricTipIsVis] = useState(false)
    const [lyricContent, setlyricContent] = useState('')
    const [volumeBarIsVis, setvolumeBarIsVis] = useState(false)
    useEffect(() => {
        dispatch(getSongDetailAction())
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id)
        audioRef.current.play().then(res => {
            setisPlaying(true);
        }).catch(err => {
            setisPlaying(false);
        });
    }, [currentSong])


    // *constant
    const singer = (currentSong.ar && currentSong.ar[0].name) || '未知'
    const img = changeImgSize(((currentSong.al && currentSong.al.picUrl) || ''), 34)
    const duration = currentSong.dt || 0;
    const totaltime = formatDate(currentSong.dt, 'mm:ss')
    const showCurrentTime = formatDate(currentTime, 'mm:ss')

    // *handle
    const playSong = useCallback(() => {
        setisPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play()
    }, [isPlaying])
    const timeUpdate = (e) => {
        const currentTime = e.target.currentTime;
        // 歌词逻辑
        const newLyricList = lyricList.filter((item) => {
            return item.time < currentTime * 1000;
        })
        if (newLyricList.length > 0) {
            const index = newLyricList.length - 1;
            newLyricList[index].content === '' ? setlyricTipIsVis(false) : setlyricTipIsVis(true);
            setlyricContent(newLyricList[index].content)
        }
        if (!sliderIsChange) {
            setCurrentTime(currentTime * 1000);
            setProgress(currentTime * 1000 / duration * 100);
        }
    }
    const sliderChange = useCallback((value) => {
        setSliderIsChange(true);
        const currentTime = value / 100 * duration;
        setCurrentTime(currentTime);
        setProgress(value);

    }, [duration])
    const sliderAfterChange = useCallback((value) => {
        const currentTime = value / 100 * duration / 1000;
        audioRef.current.currentTime = currentTime;
        setCurrentTime(currentTime * 1000);
        setSliderIsChange(false);
        if (!isPlaying) {
            playSong();
        }
    }, [duration, isPlaying, playSong])
    const changeSong = (num) => {
        dispatch(getSongDetailAction(num))
    }
    const changeLoop = () => {
        setloopIsVis(true)
        setTimeout(() => {
            setloopIsVis(false)
        }, 3000);
        let tag = sequence + 1;
        if (tag > 2) tag = 0
        dispatch(changeSequenceAaction(tag))
    }
    const timeEnd = () => {
        if (sequence === 0) {
            const newSong = { ...currentSong }
            dispatch(changeSonDetialAction(newSong))
        } else {
            dispatch(getSongDetailAction(1))
        }
    }
    const changeVolume = () => {
        setvolumeBarIsVis(!volumeBarIsVis)
    }
    const changeVolumeBar = (value) => {
        audioRef.current.volume = value / 100;
    }
    return (
        <DPlayerBarWrapper
            isplaying={isPlaying}
            sequence={sequence}
            loopIsVis={loopIsVis}
            lyricTipIsVis={lyricTipIsVis}
            volumeBarIsVis={volumeBarIsVis}
            >
            <div className='player-bar-main sprite_player-bar'>
                <div className='player-bar-content'>
                    <div className='content-btns'>
                        <div className='btns-pre sprite_player-bar btns-total'
                            onClick={e => { changeSong(-1) }}
                        ></div>
                        <div className='btns-middle sprite_player-bar btns-total'
                            onClick={e => { playSong() }}>
                        </div>
                        <div className='btns-next sprite_player-bar btns-total'
                            onClick={e => { changeSong(1) }}
                        ></div>
                    </div>
                    <NavLink to='/discover/player'>
                        <img src={img} alt='' className='content-head'></img>
                    </NavLink>
                    <div className='content-play'>
                        <div className='play-top'>
                            <a href="javacript" className='top-title'>{currentSong.name}</a>
                            <a href="javacript" className='top-mv sprite_player-bar'> </a>
                            <a href="javacript" className='top-author'>{singer}</a>
                        </div>
                        <div className='play-bottom'>
                            <div className='bottom-play-bar'>
                                <Slider
                                    value={progress}
                                    tooltipVisible={false}
                                    onChange={sliderChange}
                                    onAfterChange={sliderAfterChange}
                                />
                            </div>
                            <div className='bottom-time'>
                                <div className='time-pre'>{showCurrentTime}</div>
                                <div className='time-next'> / {totaltime}</div>
                            </div>
                        </div>
                    </div>
                    <div className='content-operation'>
                        <a href="javacript" className='oper-coll oper-btns sprite_player-bar'> </a>
                        <a href="javacript" className='oper-share oper-btns sprite_player-bar'> </a>
                    </div>
                    <div className='content-contral'>
                        <div href="javacript" className='ctrl-volume ctrl-btns sprite_player-bar'
                            onClick={e => { changeVolume() }}
                        ></div>
                        <div href="javacript" className='ctrl-loop ctrl-btns sprite_player-bar'
                            onClick={e => { changeLoop() }}>
                        </div>
                        <div href="javacript" className='ctrl-list ctrl-btns sprite_player-bar'>
                            {playList.length}
                        </div>
                        {/* 不确定显示元素 */}
                        <div className='loopTipBar sprite_player-bar'>
                            {
                                sequence === 0 ? '单曲循环' : sequence === 1 ? '列表循环' : '随机播放'
                            }
                        </div>
                        <div className='change-volume-bar sprite_player-bar'>
                            <Slider 
                            vertical 
                            defaultValue={100} 
                            onChange={e => {changeVolumeBar(e)}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lyricTip'>
                {
                    lyricContent
                }
            </div>
            <audio ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
                onEnded={e => timeEnd(e)}
            />
        </DPlayerBarWrapper>
    )
})