import * as actionTypes from './constants'
import { getSongDetail } from '@/services/player'



export const changeSonDetialAction = (currentSong) => ({
    type : actionTypes.CHANGE_SONG_DETIAL,
    currentSong
})
export const getSongDetailAction = (ids) => {
    return dispatch => {
        getSongDetail(ids).then(res => {
            dispatch(changeSonDetialAction(res.songs[0]))
        })
    }

}
