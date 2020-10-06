import request from './request'

export const getTopBanner = () => {
    return request({
        url: '/banner'
    })
}

export const getHotRecommend = (limit) => {
    return request({
        url: 'personalized',
        params: {
            limit
        }
    })
}

export const getNewAlbum = (limit) => {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}

export const getTopRanking = (idx) => {
    return request({
        url: '/top/list',
        params: {
            idx
        }
    })
}