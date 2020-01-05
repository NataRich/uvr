import React, { useState, useEffect } from 'react';

import { StyledTallContainer } from './Home.style';
import { GlobalStyled } from '../../global/style/Style.style';
import { UserClassType } from '../../global/user/class';
import { UGAPI } from '../../global/user/request';
import { VideoClassType } from '../../global/videos/class';
import { VGAPI } from '../../global/videos/request';
import { VideoFilterArgInterface } from '../../global/videos/interface';
import { Middleware } from '../../middlewares/API/APIMiddlewares';
import Navigation from '../../containers/home/navigation/Navigation';
import Search from '../../containers/home/search/Search';
import Plaza from '../../containers/home/plaza/Plaza';

const Home: React.FC = () => {
    const [ isAboutClicked, setIsAboutClicked ]     = useState<boolean>(false);
    const [ isFetchingUser, setIsFetchingUser ]     = useState<boolean>(true);
    const [ isFetchingVideos, setIsFetchingVideos ] = useState<boolean>(true);
    const [ videos, setVideos ]                     = useState<VideoClassType[] | null>(null);
    const [ user, setUser ]                         = useState<UserClassType | null>(null);
    const [ page, setPage ]                         = useState<number>(1);
    const [ maxPage, setMaxPage ]                   = useState<number>(1);
    
    const onClickAbout = () => setIsAboutClicked(prev => !prev);

    useEffect(() => {
        const userAbortController: AbortController  = new AbortController();
        const videoAbortController: AbortController = new AbortController();
        const numAbortController: AbortController   = new AbortController();
        const fetchNum = async () => setMaxPage(Math.ceil((await Middleware.getNumOfVideos(VGAPI.getNumOfVideos(numAbortController.signal))).num / 8));
        const fetchUser = async () => setUser(await Middleware.getUser(UGAPI.getUser(userAbortController.signal)));
        const fetchVideos = async () => {
            const payload: VideoFilterArgInterface = {
                order: true,
                page: 1,
                sort_by: 'Date',
                tags: [],
                title: ''
            };
            setVideos((await Middleware.getVideos(VGAPI.postFilterArgs(payload, videoAbortController.signal))).videos);
        };
        const sequentialFetch = async () => {
            setIsFetchingUser(true);
            setIsFetchingVideos(true);
            await fetchNum();
            await fetchUser();
            await fetchVideos();
            setIsFetchingUser(false);
            setIsFetchingVideos(false);
        };

        sequentialFetch();
        return () => {
            numAbortController.abort();
            userAbortController.abort();
            videoAbortController.abort();
        };
    }, [page]);

    return (
        <StyledTallContainer>
            <GlobalStyled.Box.CenterBoxByRowXSpaced style={{ width: '95%', height: 'auto', position: 'absolute', top: '0' }}>
                <Navigation {...{user, isFetchingUser}} />
            </GlobalStyled.Box.CenterBoxByRowXSpaced>
            <div className='p-home-about-btn_fixed'>
                <button onClick={onClickAbout}
                    style={{
                        transform: isAboutClicked ? 'rotate(180deg)':'rotate(0deg)',
                        fontSize: isAboutClicked ? '30px':'16px',
                    }}>
                    {isAboutClicked ? 'X':'About'}
                </button>
            </div>
            <div className='p-home-about-card_fixed'
                style={{
                    visibility: isAboutClicked ? 'visible': 'hidden',
                }}>
                {/* about card to introduce the team */}
            </div>
            <GlobalStyled.Box.CenterEndBoxByCol style={{ height: '15%' }}>
                <Search {...{page, setVideos, setIsFetchingVideos}} />
            </GlobalStyled.Box.CenterEndBoxByCol>
            <GlobalStyled.Box.CenterBoxByColNonSpaced 
                style={{
                    height: '80%',
                    overflowY: 'scroll',
                }}>
                <Plaza {...{isFetchingVideos, page, maxPage, setPage, videos}} />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{
                backgroundColor: 'transparent',
                color: '#000',
                height: '5%',
                }}>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                    ®2019 UWC (CSC) Virtual Reality
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        </StyledTallContainer>
    );
};

export default Home;

