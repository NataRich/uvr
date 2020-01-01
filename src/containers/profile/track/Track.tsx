import React, { useState, useEffect, useRef } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import VCardLoader from '../../home/videoCard/CardLoader';
import VCard from '../../home/videoCard/Card';
import NullVideo from '../../home/videoCard/NullVideo';
import Arrow from '../../../assets/icons/arrow.svg';
import {
    defaultVideoArgPayload,
    defaultCardLoaderArray,
} from './Logistics';
import {
    StyledDivLoader,
    StyledArrowContainer,
} from './Track.style';
import { TrackProps } from './interface';
import { VAPI, Middleware } from './Logistics';
import { VideoFilterSelfArgInterface } from '../../../global/videos/interface';

const Track: React.FC<TrackProps> = ({
    isFetchingUser,
    isFetchingVideos,
    setIsFetchingVideos,
    user,
    videos,
    setVideos,
}) => {
    const MAX_PAGE: number = user ? Math.trunc(user.getNumOfVideos()/3 + 1):1;
    const MIN_PAGE: number = 1;

    const didMount = useRef<boolean>(false);
    const [ payload, setPayload ] = useState<VideoFilterSelfArgInterface>(defaultVideoArgPayload);

    const onClickPrevPageHandler = () => {
        setIsFetchingVideos(true);
        setPayload(prevState => {
            if (prevState.page > 1)
                return {...prevState, page: prevState.page - 1};
            return {...prevState};
        });
    };

    const onClickNextPageHandler = () => {
        setIsFetchingVideos(true);
        setPayload(prevState => {
            if (prevState.page < MAX_PAGE)
                return {...prevState, page: prevState.page + 1};
            return {...prevState};
        });
    };

    useEffect(() => {
        if (!didMount.current)
            didMount.current = true;
        else {
            const videoAbortController: AbortController = new AbortController();
            const fetchVideos = async () => {
                setVideos((await Middleware.getVideos(VAPI.postFilterSelfArgs(payload, videoAbortController.signal))).videos);
                setIsFetchingVideos(false);
            };

            fetchVideos();
            return () => {
                videoAbortController.abort();
            };
        };
    }, [payload])

    return (
        <>
            <GlobalStyled.Box.CenterBoxByRowXSpaced>
                <div>
                    {
                        isFetchingUser ? <DivLoader />:
                        user ?
                        <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{ fontSize: '30px' }}>
                            Total Video(s): {user.getNumOfVideos()}
                        </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                        :<DivLoader />
                    }
                </div>
                <div>
                    {/* to do: search bar */}
                    {
                        isFetchingUser || isFetchingVideos ? <DivLoader />:<DivLoader />
                    }
                </div>
            </GlobalStyled.Box.CenterBoxByRowXSpaced>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ position: 'relative' }}>
                <StyledArrowContainer onClick={onClickPrevPageHandler}
                    style={{
                        transform: 'rotateY(180deg)',
                        left: '0',
                        visibility: payload.page === MIN_PAGE ? 'hidden':'visible',
                    }}>
                    {
                        isFetchingUser || isFetchingVideos ? null:<img src={Arrow} alt='' />
                    }
                </StyledArrowContainer>
                <GlobalStyled.Box.CenterBoxByRowSpaced>
                    {
                        isFetchingVideos ? defaultCardLoaderArray.map(e => <VCardLoader key={e.id} />):
                        videos ? videos.map(video => <VCard key={video.getId()} {...{props: {video}}} />):
                        <NullVideo />
                    }
                </GlobalStyled.Box.CenterBoxByRowSpaced>
                <StyledArrowContainer onClick={onClickNextPageHandler}
                    style={{
                        right: '0',
                        visibility: payload.page === MAX_PAGE ? 'hidden':'visible',
                    }}>
                    {
                        isFetchingUser || isFetchingVideos ? null:<img src={Arrow} alt='' />
                    }
                </StyledArrowContainer>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        </>
    );
};

export default Track;

const DivLoader: React.FC = () => {
    return (
        <>
            <StyledDivLoader>
                <div className='highlight' />
            </StyledDivLoader>
        </>
    );
};