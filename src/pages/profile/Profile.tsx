import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { UserClassType } from '../../global/user/class';
import { UGAPI } from '../../global/user/request';
import { VideoClassType } from '../../global/videos/class';
import { VRAPI } from '../../global/videos/request';
import { IVideoFilterSelfArg } from '../../global/videos/interface';
import { Middleware } from '../../middlewares/API/APIMiddlewares';
import Account from '../../containers/profile/account/Account';
import AccountLoader from '../../containers/profile/account/AccountLoader';
import Track from '../../containers/profile/track/Track';
import ActionSpace from '../../containers/profile/actionSpace/ActionSpace';
import ActionSpaceLoader from '../../containers/profile/actionSpace/ActionSpaceLoader';

const Profile: React.FC = () => {
    const [ isFetchingUser, setIsFetchingUser ]     = useState<boolean>(true);
    const [ isFetchingVideos, setIsFetchingVideos ] = useState<boolean>(true);
    const [ user, setUser ]                         = useState<UserClassType | null>(null);
    const [ videos, setVideos ]                     = useState<VideoClassType[] | null>(null);

    useEffect(() => {
        const userAbortController: AbortController      = new AbortController();
        const videoAbortController: AbortController     = new AbortController();

        const fetchUser = async () => {
            setIsFetchingUser(true);
            setUser(await Middleware.getUser(UGAPI.getUser(userAbortController.signal)));
            setIsFetchingUser(false);
        };
        const fetchVideos = async () => {
            setIsFetchingVideos(true);
            const payload: IVideoFilterSelfArg = {
                sort_by: 'Date',
                order: true,
                page: 1,
            };
            setVideos((await Middleware.getVideos(VRAPI.postFilterSelfArgs(payload, videoAbortController.signal))).videos);
            setIsFetchingVideos(false);
        };

        const sequentialFetch = async () => {
            await fetchUser();
            await fetchVideos();
        };
        
        sequentialFetch();
        return () => {
            userAbortController.abort();
            videoAbortController.abort();
        };
    }, []);

    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ minWidth: '1265px', overflow: 'scroll' }}>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                width: '315px',
                boxShadow: '5px 0 20px 10px #EEE',
                position: 'relative',
                }}>
                {
                    isFetchingUser ? <AccountLoader />:
                    user ? <Account {...{user}} />:
                    <AccountLoader />
                }
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: 'calc(100% - 315px)' }}>
                <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                    width: '95%',
                    height: '270px',
                    }}>
                    <Track {...{isFetchingUser, isFetchingVideos, setIsFetchingVideos, user, videos, setVideos}} />
                </GlobalStyled.Box.CenterBoxByColNonSpaced>
                <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ height: 'calc(100% -400px)' }}>
                    {
                        isFetchingUser ? <ActionSpaceLoader />:
                        user ? <ActionSpace {...{isEmailAuthed: user.getIsEmailAuthed()}} />:
                        <ActionSpaceLoader />
                    }
                </GlobalStyled.Box.CenterBoxByRowNonSpaced>
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Profile;