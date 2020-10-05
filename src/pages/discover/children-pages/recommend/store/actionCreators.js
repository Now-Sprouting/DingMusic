import * as  actionTypes from './constants'
import { getTopBanner, getHotRecommend, getNewAlbum } from '@/services/getRecommend'


const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanners: res.banners
})
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}



const changeHotRecommendAction = (res) => ({
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend: res.result
})
export const getHotRecommendAction = (limit) => {
    return dispatch => {
        getHotRecommend(limit).then(res => {
            dispatch(changeHotRecommendAction(res))
        })
    }
}



export const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHNAGE_NEW_ALBUM,
    newAlbum: res.monthData
}) 
export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}