import { Map } from 'immutable'

import * as actionTypes from './constants'
const defaultState = Map({
    currentSong: {},
    currentSongIndex: 0,
    sequence : 0,/* 0:单曲循环  1:随机播放  2:列表循环*/
    lyricList: [],
    playList: [
        {
            "name": "New Boy",
            "id": 28996919,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 4721,
                    "name": "朴树",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 0,
            "v": 6,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 2975136,
                "name": "我去2000年 [珍藏版]",
                "picUrl": "https://p2.music.126.net/MjfHl3CkYVQE9liH85VfUQ==/3294136837385269.jpg",
                "tns": [],
                "pic": 3294136837385269
            },
            "dt": 223480,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 8944341,
                "vd": -3.06
            },
            "m": {
                "br": 160000,
                "fid": 0,
                "size": 4472701,
                "vd": -2.65
            },
            "l": {
                "br": 96000,
                "fid": 0,
                "size": 2684045,
                "vd": -2.7
            },
            "a": null,
            "cd": "1",
            "no": 1,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 2,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 0,
            "publishTime": 1064592000007
        },
        {
            "name": "No Fear In My Heart",
            "id": 484732973,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 4721,
                    "name": "朴树",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [
                "电影《冈仁波齐》主题曲"
            ],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 12,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 35645284,
                "name": "No Fear In My Heart",
                "picUrl": "https://p2.music.126.net/YLJF2EjAz7g7HRPpDvt5YQ==/18499283139280263.jpg",
                "tns": [],
                "pic_str": "18499283139280263",
                "pic": 18499283139280264
            },
            "dt": 395361,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 15816664,
                "vd": 0
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 9490016,
                "vd": 0
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 6326692,
                "vd": 0
            },
            "a": null,
            "cd": "1",
            "no": 0,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 5565903,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 412012,
            "publishTime": 1497801600007
        },
        {
            "name": "平凡之路 (Live版)",
            "id": 553543175,
            "pst": 0,
            "t": 0,
            "ar": [
                {
                    "id": 4721,
                    "name": "朴树",
                    "tns": [],
                    "alias": []
                }
            ],
            "alia": [],
            "pop": 100,
            "st": 0,
            "rt": null,
            "fee": 8,
            "v": 7,
            "crbt": null,
            "cf": "",
            "al": {
                "id": 38388038,
                "name": "朴树 猎户星座·专场",
                "picUrl": "https://p2.music.126.net/Kdcrp6o0YJpD7g1apHC0FA==/109951163252275728.jpg",
                "tns": [],
                "pic_str": "109951163252275728",
                "pic": 109951163252275730
            },
            "dt": 301021,
            "h": {
                "br": 320000,
                "fid": 0,
                "size": 12043538,
                "vd": -12600
            },
            "m": {
                "br": 192000,
                "fid": 0,
                "size": 7226140,
                "vd": -10100
            },
            "l": {
                "br": 128000,
                "fid": 0,
                "size": 4817441,
                "vd": -8300
            },
            "a": null,
            "cd": "01",
            "no": 9,
            "rtUrl": null,
            "ftype": 0,
            "rtUrls": [],
            "djId": 0,
            "copyright": 0,
            "s_id": 0,
            "mark": 0,
            "originCoverType": 0,
            "single": 0,
            "noCopyrightRcmd": null,
            "mv": 0,
            "rtype": 0,
            "rurl": null,
            "mst": 9,
            "cp": 723012,
            "publishTime": 1523980800007
        }
    ]
})

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_SONG_DETIAL:
            return state.set('currentSong', action.currentSong)
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set('playList', action.playList)
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set('currentSongIndex', action.currentSongIndex)
        case actionTypes.CHANGE_SEQUENCE: 
            return state.set('sequence', action.sequence)
        case actionTypes.CHANGE_LYRIC:
            return state.set('lyricList', action.lyricList)
        default:
            return state
    }
}

export default reducer