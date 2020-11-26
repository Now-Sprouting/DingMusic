import React, { memo } from 'react';
import { message } from 'antd'

import { changeImgSize } from '@/utils/format-utils';

import { DAlbumWrapper } from './style';

export default memo(function DAlbumCover(props) {
  // state and props
  const { info, size = 130, width = 153, bgp = "-845px" } = props;
  const handleClick = (e) => {
    e.preventDefault()
    message.info({
      content: '暂未开发, 敬请期待'
    })
  }
  return (
    <DAlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-image">
        <img src={changeImgSize(info.picUrl, size)} alt="" />
        <a href="#/discover/ranking" className="cover image_cover" onClick={e => { handleClick(e) }}>新碟上架</a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap">{info.name}</div>
        <div className="artist text-nowrap">{info.artist.name}</div>
      </div>
    </DAlbumWrapper>
  )
})
