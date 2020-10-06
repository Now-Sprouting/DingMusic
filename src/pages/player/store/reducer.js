import { Map } from 'immutable'

import * as actionTypes from './constants'
const defaultState = Map({
    currentSong: {}
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SONG_DETIAL:
            return state.set('currentSong', action.currentSong)
        default:
            return state
    }
}

export default reducer