import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import { VideoIdInterface } from '../../../global/videos/interface';
import { VideoCardAttributes } from './interface';
import { StyledVideoCardContainer } from './Card.style';
import EButton from '../../../components/button/elliptical/BaseButton';
import RButton from '../../../components/button/rounded/RoundedButton';
import { VRAPI } from '../../../global/videos/request';
import { Middleware } from '../../../middlewares/API/APIMiddlewares';
import { LocalRButtonAttributes } from './Logistics';
import {
    defaultDelButtonAttributes,
    defaultBackButtonAttributes,
    defaultMoreButtonAttributes,
    defaultWatchButtonAttributes,
} from './Logistics';


const VideoCard: React.FC<VideoCardAttributes> = ({
    props: {
        video,
        hasDel,
    },
}) => {
    const [ openDescription, setOpenDescription ]   = useState<boolean>(false);
    const [ delBtnAttri, setDelBtnAttri ]           = useState<LocalRButtonAttributes>(defaultDelButtonAttributes);

    const onClick = () => {};
    const onClickWatchHandler = () => window.location.href='/';
    const onClickMoreHandler = () => setOpenDescription(true);
    const onClickBackHandler = () => setOpenDescription(false);

    const onClickDelHandler = async (e: React.MouseEvent<HTMLDivElement>) => {
        setDelBtnAttri(prevState => { return {...prevState, props: {...prevState.props, isLoading: true}} });
        const vidAbortController: AbortController = new AbortController();
        const payload: VideoIdInterface = {video_id: e.currentTarget.id};
        let status: number = (await Middleware.getStatus(VRAPI.postVideoId(payload, vidAbortController.signal))).status;
        if (status === 2000)
            window.location.href='/profile';
        setDelBtnAttri(prevState => { return {...prevState, props: {...prevState.props, isLoading: false}} });
    };

    const cutString = (originalStr: string, limit: number): string => {
        if (originalStr.length > limit)
            return `${originalStr.substring(0, limit)}...`;
        return originalStr;
    };

    return (
        <StyledVideoCardContainer>
            {
                hasDel ? (
                    <div className='del-btn'
                        id={video.getId()}
                        onClick={onClickDelHandler}>
                        <RButton {...{style: delBtnAttri.style,
                                    props: delBtnAttri.props,
                                    onClickHandler: onClick}} />
                    </div>
                ):null
            }
            <div className='track'
                style={{
                    transform: openDescription ? 'translateX(-50%)':'translateX(0)',
                }}>
                <div className='slide'>
                    <div className='con-home-plaza-vcard-vimg'>
                        <img src={video.getDirectory() + 'cover.png'} alt='' />
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
                        <EButton {...{style: defaultWatchButtonAttributes.style,
                                    props: defaultWatchButtonAttributes.props,
                                    onClickHandler: onClickWatchHandler}} />
                        <EButton {...{style: defaultMoreButtonAttributes.style,
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
                        <EButton {...{style: defaultBackButtonAttributes.style,
                                    props: defaultBackButtonAttributes.props,
                                    onClickHandler: onClickBackHandler}} />
                    </div>
                </div>
            </div>
        </StyledVideoCardContainer>
    );
};

export default VideoCard;