import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { UserClassType } from '../../global/user/class';
import { UserGeneralAPI } from '../../global/user/request';
import { VideoClassType } from '../../global/videos/class';
import { VideoLoginRequiredAPI } from '../../global/videos/request';
import { VideoFilterSelfArgInterface } from '../../global/videos/interface';
import { APIMiddlewares } from '../../middlewares/API/APIMiddlewares';
import Account from '../../containers/profile/account/Account';
import AccountLoader from '../../containers/profile/account/AccountLoader';
import Track from '../../containers/profile/track/Track';

const UAPI          = new UserGeneralAPI();
const VAPI          = new VideoLoginRequiredAPI();
const Middleware    = new APIMiddlewares();

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
            setUser(await Middleware.getUser(UAPI.getUser(userAbortController.signal)));
            setIsFetchingUser(false);
        };
        const fetchVideos = async () => {
            setIsFetchingVideos(true);
            const payload: VideoFilterSelfArgInterface = {
                sort_by: 'Date',
                order: true,
                page: 1,
            };
            setVideos((await Middleware.getVideos(VAPI.postFilterSelfArgs(payload, videoAbortController.signal))).videos);
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
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                width: '315px',
                boxShadow: '5px 0 20px 10px #EEE',
                }}>
                {
                    isFetchingUser ? <AccountLoader />:
                    user ? <Account {...{user}} />:<AccountLoader />
                }
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: 'calc(100% - 315px)' }}>
                <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                    width: '90%',
                    height: '270px',
                    }}>
                    <Track {...{isFetchingUser, isFetchingVideos, setIsFetchingVideos, user, videos, setVideos}} />
                </GlobalStyled.Box.CenterBoxByColNonSpaced>
                <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: 'calc(100% -400px)' }}>
                    {/* to upload videos */}
                </GlobalStyled.Box.CenterBoxByRowSpaced>
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Profile;