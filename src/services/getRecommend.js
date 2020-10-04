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