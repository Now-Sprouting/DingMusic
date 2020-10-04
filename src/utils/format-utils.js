// *格式化数字
export const changeCount = (count) => {
    if (count < 10000) {
        return count
    }else if (count >= 10000 && count <= 10000 * 10000) {
        return `${Math.floor(count/10000)}万`
    }else {
        return `${Math.floor(count/10000 * 10000)}亿`
    }
}

// *更改图片大小
export const changeImgSize = (imgUrl, size) => {
    return `${imgUrl}?param=${size}x${size}`
}