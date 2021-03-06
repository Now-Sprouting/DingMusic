// *经过考虑，该reducer中 topBanners 不存在深层修改的情况，所以使用 Map 而不是 formJs
import { Map } from 'immutable'
import * as actionTypes from './constants'


const defaultState = Map({
    topBanners: [],
    hotRecommend: [],
    newAlbum: [],

    fastUpRank: {},
    newMusicRank: {},
    originMusicRank: {}
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.topBanners)
        case actionTypes.CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommend', action.hotRecommend)
        case actionTypes.CHNAGE_NEW_ALBUM:
            return state.set('newAlbum', action.newAlbum)
            
        case actionTypes.CHANGE_FASTUPRANK:
            return state.set('fastUpRank', action.fastUpRank)
        case actionTypes.CHANGE_NEWMUSICRANK:
            return state.set('newMusicRank', action.newMusicRank)
        case actionTypes.CHANGE_ORIGINMUSICRANK:
            return state.set('originMusicRank', action.originMusicRank)
        default:
            return state
    }
}

export default reducer