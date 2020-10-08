import request from './request'

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

// *获取音乐流
export function getPlaySong(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

export function getLyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}