import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    height: 75px;
    background-color: #242424;
    .content {
        height:70px;
        background-color: #242424;
        display: flex;
        justify-content: space-between;
    }
    .bottom-border {
        height:5px;
        background-color: #c20c0c;
    }
`

export const HeaderLeft = styled.div`
display: flex;
justify-content: space-between;
.logo {
    display: block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -99999px;
}
.headerLinks {
    display:flex;
    justify-content: space-between;
}
.linkItem {
    position: relative;
    height: 70px;
    line-height: 70px;
    padding: 0 19px;
    font-size:14px;
    color: #ffffff;
} 
.active .icon{
        display: block;
        position: absolute;
        left: 50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        overflow: hidden;
        background-image: url(${require('@/assets/img/sprite_01.png')});
        background-position: -226px 0;
        }

a:last-child::after {
    display: block;
    content: '';
    position: absolute;
    top: 21px;
    left: 100px;
    width: 28px;
    height: 19px;
    background-image: url(${require('@/assets/img/sprite_01.png')});
    background-position: -190px 0;
}
.linkItem:hover {
    text-decoration:none;
    background-color: #000000;
}
`

export const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    color: #ccc;
    font-size: 12px;


    .search {
        width: 158px;
        height: 32px;
        border-radius: 16px;

        input {
          &::placeholder {
            font-size: 12px;
          }
        }
    }

    .center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 16px;
        margin: 0 16px;
        background-color: transparent;
        &:hover {
            cursor: pointer;
            border: 1px solid #ccc;
        }
    }
    .login {
        cursor: pointer;
    }
`  