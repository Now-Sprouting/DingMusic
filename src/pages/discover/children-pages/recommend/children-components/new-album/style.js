import styled from 'styled-components'

export const DNewAlbumWraper = styled.div`
    width: 689px;
    margin-top: 50px;
    .content {
        display: flex;
        justify-content: center;
        position: relative;
        margin: 0 auto;
        width: 690px;
        height: 184px;
        margin-top: 20px;
        padding-top: 20px;
        border: 1px solid #ccc;
        background-color: #f5f5f5;
        .btn {
          display: block;
          position: absolute;
          top: 75px;
          width: 17px;
          height: 17px;
          &:hover {
          cursor: pointer;
          }
        }
        .button-left {
          left: 5px;
          background-position: -260px -75px;
        }
        .button-right {
          right: 5px;
          background-position: -300px -75px;
        }
        .carousel {
            margin: 0 auto;
            overflow: hidden;
            width: 600px;
            height: 150px;
            .banner {
                display: flex!important;
                justify-content: space-between;
                flex-wrap: nowrap;
                width: 645px;
                height: 150px;
            }
        }
    }
    
`