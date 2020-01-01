import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import { VideoCardAttributes } from './interface';
import { StyledVideoCardContainer } from './Card.style';
import Button from '../../../components/button/elliptical/BaseButton';
import {
    defaultBackButtonAttributes,
    defaultMoreButtonAttributes,
    defaultWatchButtonAttributes,
} from './Logistics';

const VideoCard: React.FC<VideoCardAttributes> = ({
    props: {
        video,
    },
}) => {
    const [ openDescription, setOpenDescription ] = useState<boolean>(false);

    const onClickWatchHandler = () => window.location.href='/';
    const onClickMoreHandler = () => setOpenDescription(true);
    const onClickBackHandler = () => setOpenDescription(false);

    const cutString = (originalStr: string, limit: number): string => {
        if (originalStr.length > limit)
            return `${originalStr.substring(0, limit)}...`;
        return originalStr;
    };

    return (
        <StyledVideoCardContainer>
            <div className='track'
                style={{
                    transform: openDescription ? 'translateX(-50%)':'translateX(0)',
                }}>
                <div className='slide'>
                    <div className='con-home-plaza-vcard-vimg'>
                        {/* video image */}
                        <GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                            {video.getDuration()}
                        </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-title'>
                        <GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                            {cutString(video.getTitle(), 38)}       {/* 38 is the maximum number of characters that it can contain inline */}
                        </GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-btn-group'>
                        <Button {...{style: defaultWatchButtonAttributes.style,
                                    props: defaultWatchButtonAttributes.props,
                                    onClickHandler: onClickWatchHandler}} />
                        <Button {...{style: defaultMoreButtonAttributes.style,
                                    props: defaultMoreButtonAttributes.props,
                                    onClickHandler: onClickMoreHandler}} />
                    </div>
                </div>
                <div className='slide'>
                    <div className={video.getTitle().length > 38 ? 'con-home-plaza-vcard-title overflow':'con-home-plaza-vcard-title'}>
                        <GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                            {video.getTitle()}
                        </GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-description'>
                        <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            {video.getDescription()}
                        </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-others'>
                        <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            <span style={{color: '#1C3144'}}>{video.getAuthor()}</span>&nbsp;&#8226;&nbsp;{video.getUploadTime()}
                        </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-btn-group'>
                        <Button {...{style: defaultBackButtonAttributes.style,
                                    props: defaultBackButtonAttributes.props,
                                    onClickHandler: onClickBackHandler}} />
                    </div>
                </div>
            </div>
        </StyledVideoCardContainer>
    );
};

export default VideoCard;