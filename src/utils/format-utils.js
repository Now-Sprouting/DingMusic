// *格式化数字
export const changeCount = (count) => {
    if (count < 10000) {
        return count
    } else if (count >= 10000 && count <= 10000 * 10000) {
        return `${Math.floor(count / 10000)}万`
    } else {
        return `${Math.floor(count / 10000 / 10000)}亿`
    }
}

// *更改图片大小
export const changeImgSize = (imgUrl, size) => {
    return `${imgUrl}?param=${size}x${size}`
}

// *格式化时间戳
export function formatDate(time, fmt) {
    let date = new Date(time);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};


// *获取音乐流
export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}