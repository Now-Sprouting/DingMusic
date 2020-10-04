import React, { memo } from 'react'
import { changeCount, changeImgSize } from '@/utils/format-utils';
import { DSongCoverWrapper } from './style'

export default memo(function DSongCover(props) {
    const { info, index, size } = props;
    return (
        <div>
            <DSongCoverWrapper index={index}>
                <div className='top'>
                    <img src={changeImgSize(info.picUrl, size)} alt="" />
                    <div className='cover sprite_covor'>
                        <div className='info sprite_covor'>
                            <span>
                                <i className="sprite_icon erji"></i>
                                {changeCount(info.playCount)}
                            </span>
                            <i className="sprite_icon play"></i>
                        </div>
                    </div>
                </div>
                <div className='bottom'>{info.name}</div>
            </DSongCoverWrapper>
        </div>
    )
})
