import styled from 'styled-components'

export const DPlayerBarWrapper = styled.div`
    a {
        display: block;
    }
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 53px;
    .player-bar-main {
        height: 53px;
        background: url(${require('@/assets/img/playbar_sprite.png')}) repeat 0 0;
        .player-bar-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            width: 980px;
            height: 47px;
            top: 6px;
            left: 50%;
            transform: translateX(-50%);
            .content-btns {
                display: flex;
                align-items: center;
                width: 137px;
                height: 47px;
                .btns-total {
                    width: 28px;
                    height: 28px;
                    margin-right: 8px;
                    cursor: pointer;
                }
                .btns-pre {
                    background-position: 0 -130px;
                    &:hover {
                        background-position: -30px -130px;
                    }
                }
                .btns-middle {
                    width: 36px;
                    height: 36px;
                    background-position: 0 ${prpos => prpos.isplaying ? '-165px' : '-204px'};
                    &:hover {
                        background-position: -40px ${prpos => prpos.isplaying ? '-165px' : '-204px'};
                    }
                }
                .btns-next {
                    background-position: -80px -130px;
                    &:hover {
                        background-position: -110px -130px;
                    }
                }
            }
            .content-head {
                display: block;
                width: 34px;
                height: 34px;
                border-radius: 10%;
                margin-right: 10px;
                background-color: purple;
                &:hover {
                    cursor: pointer;
                }
            }
            .content-play {
                width: 608px;
                height:37px;
                .play-top {
                    display: flex;
                    height: 28px;
                    overflow: hidden;
                    color: #e8e8e8;
                    text-shadow: 0 1px 0 #171717;
                    .top-title {
                        max-width: 300px;
                        color: #e8e8e8;
                        margin-right: 5px;
                    }
                    .top-mv {
                        width: 19px;
                        height: 17px;
                        background-position: 0 -57px;
                        margin-right: 15px;
                        &:hover {
                            background-position: -20px -57px;
                        }
                    }
                    .top-author {
                        color: #9b9b9b;
                        margin-right: 5px;
                    }
                }
                .play-bottom {
                    position: relative;
                    display: flex;
                    bottom: 3px;
                    .bottom-play-bar {
                        box-sizing: content-box;
                        position: relative;
                        width: 493px;
                        bottom: 5px;
                        .ant-slider {
                            width: 493px;
                            margin: 0 0;
                            &:hover {
                                cursor: pointer;
                            }
                            .ant-slider-rail {
                                height: 9px;
                                background: url(${require('@/assets/img/progress_bar.png')}) no-repeat right 0;
                            }
                            .ant-slider-track {
                                height: 9px;
                                background: url(${require('@/assets/img/progress_bar.png')}) no-repeat left -66px;
                            }
                            .ant-slider-handle {
                                width: 22px;
                                height: 27px;
                                bottom: -11px;
                                border: 0;
                                box-shadow: none;
                                background: url(${require('@/assets/img/sprite_icon.png')}) no-repeat 0 -250px;
                            }
                        }
                    }
                    .bottom-time {
                        position: relative;
                        left: 10px;
                        bottom: 6px;
                        display: flex;
                        .time-pre {
                            color: #a1a1a1;
                        }
                        .time-next {
                            color: #797979;
                        }
                    }
                }
            }
            .content-operation {
                display: flex;
                align-items: center;
                width: 60px;
                height: 36px;
                .oper-btns {
                    width: 25px;
                    height: 25px;
                    &:hover {
                        cursor: pointer;
                    }
                }
                .oper-coll {
                    background-position: -88px -163px;
                    &:hover {
                        background-position: -88px -189px;
                    }
                }
                .oper-share {
                    background-position: -114px -163px;
                    &:hover {
                        background-position: -114px -189px;
                    }
                }
            }
            .content-contral {
                position: relative;
                display: flex;
                align-items: center;
                width: 126px;
                height: 36px;
                margin-left: 20px;
                .ctrl-btns {
                    width: 25px;
                    height: 25px;
                    margin-right: 5px;
                }
                .ctrl-volume {
                    background-position: -2px -248px;
                    &:hover {
                        cursor: pointer;
                        background-position: -31px -248px;
                    }
                }
                .ctrl-loop {
                    background-position: ${props => {
                        switch (props.sequence) {
                            case 0:
                                return '-66px -344px'
                            case 1:
                                return '-3px -344px'
                            case 2:
                                return '-66px -248px'
                            default:
                                break;
                        }
                    }}
                }
                .ctrl-loop:hover {
                    cursor: pointer;
                    background-position: ${props => {
                        switch (props.sequence) {
                            case 0:
                                return '-93px -344px'
                            case 1:
                                return '-33px -344px'
                            case 2:
                                return '-93px -248px'
                            default:
                                break;
                        }
                    }}
                }
                .ctrl-list {
                    width: 59px;
                    height: 25px;
                    line-height: 26px;
                    text-indent: 30px;
                    color: #ccc;
                    background-position: -42px -68px;
                    &:hover {
                        cursor: pointer;
                        background-position: -42px -98px;
                    } 
                }
                .loopTipBar {
                    display: ${props => props.loopIsVis ? 'block' : 'none' };
                    position: absolute;
                    top: -40px;
                    left: 0px;
                    width: 81px;
                    height: 39px;
                    line-height: 34px;
                    z-index: 3;
                    text-align: center;
                    color: #fff;
                    background-position: 0 -457px;
                }
                .change-volume-bar {
                    display: ${props => props.volumeBarIsVis ? 'block' : 'none'};
                    position: absolute;
                    width: 32px;
                    height: 113px;
                    top: -118px;
                    left: 0px;
                    z-index: 2; 
                    background-position: 0 -503px;
                    .ant-slider-vertical {
                        position: relative;
                        top: 18px;
                        left:14px;
                        margin: 0;
                        padding: 0;
                        height: 85px!important;
                        .ant-slider-rail {
                            background-color: transparent;
                        }
                        .ant-slider-track {
                            background: url(${require('@/assets/img/playbar_sprite.png')});
                            background-position: -40px bottom;
                        }
                        .ant-slider-handle {
                            position: absolute;
                            left: -2px;
                            width: 18px;
                            height: 20px;
                            border: 0;
                            box-shadow: none;
                            background: url(${require('@/assets/img/sprite_icon.png')});
                            background-position:-40px -250px
                            
                        }
                    }
                }
            }
        }
    }
    .lyricTip {
        display: ${props => props.lyricTipIsVis ? 'block' : 'none'};
        position: absolute;
        top: -30px;
        left: 50%;
        height: 30px;
        line-height: 30px;
        border-radius: 30px;
        font-size: 16px;
        transform: translateX(-50%);
        padding: 0 10px;
        color: #e8e8e8;
        opacity: 0.9;
        background-color: black;
        box-shadow: 0 0 2px 2px #666;
    }
`