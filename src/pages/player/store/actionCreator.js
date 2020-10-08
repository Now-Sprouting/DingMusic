import * as actionTypes from './constants'
import { getSongDetail, getLyric } from '@/services/player'
import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric'


export const changeSonDetialAction = (currentSong) => ({
    type: actionTypes.CHANGE_SONG_DETIAL,
    currentSong
})
export const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})
export const changeCurrentSongIndexAction = (currentSongIndex) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    currentSongIndex
})
export const changeSequenceAaction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})
export const changeLyricAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC,
    lyricList
})
export const getSongDetailAction = (num) => {
    return (dispatch, getState) => {
        let currentIndex = getState().getIn(['player', 'currentSongIndex'])
        const playList = getState().getIn(['player', 'playList'])
        const sequence = getState().getIn(['player', 'sequence'])
        if (num === 1 || num === -1) {
            // 顺序播放下一首
            if (sequence === 0 || sequence === 1) {
                currentIndex = currentIndex + num
                if (currentIndex === (playList.length)) currentIndex = 0;
                if (currentIndex === -1) currentIndex = playList.length - 1;
            } else {
                // 随机播放
                let index = getRandomNumber(playList.length)
                while (currentIndex === index) {
                    index = getRandomNumber(playList.length)
                }
                currentIndex = index;
            }
        }
        const currentSongs = playList[currentIndex]
        dispatch(getLyricAction(currentSongs.id))
        dispatch(changeCurrentSongIndexAction(currentIndex))
        dispatch(changeSonDetialAction(currentSongs))
    }
}

export const changeAboutPlayAction = (ids) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(['player', 'playList']);
        const index = playList.findIndex(item => {
            return ids === item.id;
        })
        if (index !== -1) {
            return
        } else {
            getSongDetail(ids).then(res => {
                const currentSong = res.songs[0];
                const currentPlayList = [...playList]
                currentPlayList.push(currentSong)
                dispatch(getLyricAction(currentSong.id))
                dispatch(changePlayListAction(currentPlayList));
                dispatch(changeSonDetialAction(currentSong));
                dispatch(changeCurrentSongIndexAction(currentPlayList.length - 1))
            })
        }
    }
}

export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyricListString = res.lrc.lyric;
            const lyricList = parseLyric(lyricListString)
            dispatch(changeLyricAction(lyricList))
        })
    }
}
