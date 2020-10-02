import * as  actionTypes from './constants'
import { getTopBanner } from '@/services/getTopBanner'


const changeTopBannerAction = (res) => ({
    type: actionTypes.CHANGE_TOP_BANNERS,
    topBanner: res.banners
})

export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeTopBannerAction(res))
        })
    }
}