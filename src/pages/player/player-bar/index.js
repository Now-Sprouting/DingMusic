import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getSongDetailAction } from '../store/actionCreator'
import { formatDate } from '@/utils/format-utils'

import { Slider } from 'antd'
import { DPlayerBarWrapper } from './style'
import { changeImgSize, getPlaySong } from '../../../utils/format-utils'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'

export default memo(function DPlayerBar() {
    // *redux hook
    const { currentSong } = useSelector(state => ({
        currentSong: state.getIn(['player', 'currentSong'])
    }), shallowEqual)
    const dispatch = useDispatch()

    // *react hook
    const audioRef = useRef()
    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [sliderIsChange, setSliderIsChange] = useState(false)
    const [isPlaying, setisPlaying] = useState(false)
    useEffect(() => {
        dispatch(getSongDetailAction(28996919))
    }, [dispatch])
    useEffect(() => {
        audioRef.current.src = getPlaySong(currentSong.id)
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
    return (
        <DPlayerBarWrapper isplaying={isPlaying} >
            <div className='player-bar-main sprite_player-bar'>
                <div className='player-bar-content'>
                    <div className='content-btns'>
                        <div className='btns-pre sprite_player-bar btns-total'></div>
                        <div className='btns-middle sprite_player-bar btns-total'
                            onClick={e => { playSong() }}>
                        </div>
                        <div className='btns-next sprite_player-bar btns-total'></div>
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
                        <a href="javacript" className='ctrl-volume ctrl-btns sprite_player-bar'> </a>
                        <a href="javacript" className='ctrl-loop ctrl-btns sprite_player-bar'> </a>
                        <a href="javacript" className='ctrl-list ctrl-btns sprite_player-bar'> </a>
                    </div>
                </div>
            </div>
            <audio ref={audioRef}
                onTimeUpdate={e => timeUpdate(e)}
            />
        </DPlayerBarWrapper>
    )
})
