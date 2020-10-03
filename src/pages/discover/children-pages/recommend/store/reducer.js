// *经过考虑，该reducer中 topBanners 不存在深层修改的情况，所以使用 Map 而不是 formJs
import {Map} from 'immutable'
import * as actionTypes from './constants'


const defaultState = Map({
    topBanners: []
})

function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_TOP_BANNERS:
           return state.set('topBanners', action.topBanners)
        default:
            return state
    }
}

export default reducer