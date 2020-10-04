import styled from 'styled-components'

export const DSongCoverWrapper = styled.div`
    width: 140px;
    height: 204px;
    margin-left: ${props => {
        if (props.index % 4 === 0) {
            return '0'
        } else {
            return '42px'
        }
    }};
    .top {
        position: relative;
        height: 140px;
        background-color: #fff;
        img {
            position: absolute;
            left: 0;
            top: 0;
        }
        .cover {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-position: 0 0;
            &:hover {
                cursor: pointer;
            }
            .info {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 10px;
                position: absolute;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 27px;
                color: #ccc;
                background-position: 0 -537px;

                .erji {
                    margin-right: 5px;
                    display: inline-block;
                    width: 14px;
                    height: 11px;
                    background-position: 0 -24px;
                    }

                .play {
                    display: inline-block;
                    width: 16px;
                    height: 17px;
                    background-position: 0 0;
                }
            }
        }
    }
    .bottom {
        margin-top: 10px;
        font-size: 14px;
        &:hover {
            cursor: pointer;
        }
    }
`