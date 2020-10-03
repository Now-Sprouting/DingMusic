import styled from 'styled-components'

export const DTopBannerWrapper = styled.div`
    background: url(${props => props.bgImage}) center center/6000px;

    .banner {
    height: 270px;
    background-color: red;
    display: flex;
    position: relative;
  }
` 
export const DBannerLeft = styled.div`
    width: 730px;
    background-color: pink;
    .ant-carousel .slick-dots li.slick-active button {
        background-color: #c20c0c;
    }
    .banner-item {
        height: 270px;
        overflow: hidden;
       .image {
        width: 100%;
        }
    }
`

export const DBannerRight = styled.a.attrs({
    href: 'https://music.163.com/#/download',
    target: "_blank"
})`
    width: 250px;
    height: 270px;
    background: url(${require("@/assets/img/download.png")});
`


export const DBannerControl = styled.div`
    position: relative;
    .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 37px;
        height: 63px;
        background-image: url(${require("@/assets/img/banner_sprite.png")});
        background-color: transparent;
        &:hover {
            cursor: pointer;
            opacity: 0.5; 
            background-color: #333
        }
    }
    .btn-left {
        left: -1047px;
        background-position: 0 -360px;
    }
    .btn-right {
        left: 30px;
        background-position: 0 -508px;
    }
`

