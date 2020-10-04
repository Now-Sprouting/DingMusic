import styled from 'styled-components'

export const DThemeHeaderRecommendWraper = styled.div`
    display: flex;
    justify-content : space-between;
    height: 35px;
    border-bottom: 2px solid #C10D0C;
`

export const DThemeHeaderRecommendLeft = styled.div`
    display: flex;
    height: 35px;
    .leftIcon {
        display: block;
        width: 35px;
        height: 35px;
        background-position: -225px -154px;
    }
    .title {
        height : 35px;
        font-size: 20px;
        line-height: 35px;
    }
    .keyword {
        display: flex;
        margin: 0 0 0 20px;
        font-size: 12px;
        line-height: 35px;
        color: #666;
        .bar {
            margin: 0 10px;
        }
    }
`


export const DThemeHeaderRecommendRight = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    line-height: 35px;
    .rightIcon {
        margin:0 10px 0 3px;
        width: 12px;
        height: 12px;
        background-position: 0 -240px;
    }
`