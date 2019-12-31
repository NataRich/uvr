import React, { useState } from 'react';

import { GlobalStyled } from '../../../../global/style/Style.style';
import { VideoCardAttributes } from './interface';
import { StyledVideoCardContainer } from './Card.style';
import Button from '../../../../components/button/elliptical/BaseButton';
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

    return (
        <StyledVideoCardContainer>
            <div className='track'
                style={{
                    transform: openDescription ? 'translateX(-50%)':'translateX(0)',
                }}>
                <div className='slide'>
                    <div className='con-home-plaza-vcard-vimg'>
                        {/* video image */}
                    </div>
                    <div className='con-home-plaza-vcard-title'>
                        <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            {video.getTitle()}
                        </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
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
                    <div className='con-home-plaza-vcard-title'>
                        <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            {video.getTitle()}
                        </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-description'>
                        <GlobalStyled.Text.FullWidthAutoHeightNonMargin style={{ justifyContent: 'flex-start' }}>
                            {video.getDescription()}
                        </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                    </div>
                    <div className='con-home-plaza-vcard-others'>
                        <GlobalStyled.Text.FullWidthAutoHeightNonMargin style={{ width: 'auto', color: '#B3B3B3' }}>
                            {video.getAuthor()}&nbsp;&#8226;&nbsp;{video.getUploadTime()}
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