import * as  actionTypes from './constants'
import { getTopBanner, getHotRecommend, getNewAlbum, getTopRanking } from '@/services/getRecommend'

// *轮播图
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


// *热门推荐
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


// *新碟上架
export const changeNewAlbumAction = (res) => ({
    type: actionTypes.CHNAGE_NEW_ALBUM,
    newAlbum: res.albums
})
export const getNewAlbumAction = (limit) => {
    return dispatch => {
        getNewAlbum(limit).then(res => {
            dispatch(changeNewAlbumAction(res))
        })
    }
}

// *榜单

export const changeFastUpRankAction = (res) => ({
    type: actionTypes.CHANGE_FASTUPRANK,
    fastUpRank: res.playlist
})
export const changeNewMusicRankAction = (res) => ({
    type: actionTypes.CHANGE_NEWMUSICRANK,
    newMusicRank: res.playlist
})
export const changeOriginMusicRankRankAction = (res) => ({
    type: actionTypes.CHANGE_ORIGINMUSICRANK,
    originMusicRank: res.playlist
})
export const getHotRankingAction = (idx) => {
    return dispatch => {
        switch (idx) {
            case 3:
                getTopRanking(3).then(res => {
                    dispatch(changeFastUpRankAction(res))
                })
                break
            case 0:
                getTopRanking(0).then(res => {
                    dispatch(changeNewMusicRankAction(res))
                })
                break
            case 2:
                return getTopRanking(2).then(res => {
                    dispatch(changeOriginMusicRankRankAction(res))
                })
            default:
                break;
        }
    }
}