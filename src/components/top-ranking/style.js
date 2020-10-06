import styled from 'styled-components'

export const DTopRankingWrapper = styled.div`
    .content {
        width: 230px;
        padding: 20px 0 0 19px;
        background: url(${require('@/assets/img/recommend-top-bg.png')}) no-repeat 0 0;

        .top-ranking {
            display: flex;
            height: 100px;
                .image {
                    position: relative;
                    .cover {
                        display: block;
                        width: 80px;
                        height: 80px;
                        position: absolute;
                        left: 0;
                        top: 0;
                        background-position: -145px -57px;
                        }
                }
                .right {
                    width: 116px;
                    height: 40px;
                    margin: 6px 0 0 10px;
                    .title {
                            display: block;
                            font-size: 14px;
                            &:hover {
                                cursor: pointer;
                                text-decoration: underline;
                            }
                            h3 {
                                font-weight: 600;
                            }
                    }
                    .btns {
                        margin-top: 10px;
                        .btn {
                            display: inline-block;
                            width: 22px;
                            height: 22px;
                            margin-right: 10px;
                        }
                        .play {
                            background-position: -267px -205px;
                            &:hover {
                                background-position: -267px -235px;
                            }
                        }
                        .add {
                            background-position: -300px -205px;
                            &:hover {
                                background-position: -300px -235px;
                            }
                        }
                    }
                }
        }
        
        .list {
            li:nth-child(-n + 3) .number {
                color: #c10d0c;
            }
            li {
                display: flex;
                height: 32px;
                line-height: 32px;
                .number {
                    width: 35px;
                    height: 32px;
                    margin-left: 0px;
                    text-align: center;
                    color: #666;
                    font-size: 16px;
                }
                .li-right {
                    &:hover {
                        .btn {
                            display: block;
                        }
                        .text {
                            width: 96px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }
                    }
                    width: 170px;
                    display: flex;
                    overflow: hidden;
                    .text {
                        height: 32px;
                        color: #000;
                    }
                    .btn {
                        display: none;
                        margin-top: 7px;
                        width: 17px;
                        height: 17px;   
                        margin-right: 8px;
                    }
                    .li-play {
                        background-position: -267px -268px;
                        &:hover {
                            background-position: -267px -288px;
                        } 
                    }
                    .li-add {
                        background-position: 0px -698px;
                        &:hover {
                            background-position: -22px -698px;
                        }
                    }
                    .li-coll {
                        background-position: -297px -268px;
                        &:hover {
                            background-position: -297px -288px;
                        } 
                    }
                } 
            }
        }
        .more {
            height: 32px;
            width: 168px;
            line-height: 32px;
            text-align: right;
            a {
                color: #000;
            }
        }
    }
`