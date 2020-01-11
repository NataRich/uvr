import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { GlobalStyled } from '../../global/style/Style.style';
import { VideoClassType } from '../../global/videos/class';
import { ITrackId } from '../../global/videos/interface';
import { VGAPI } from '../../global/videos/request';
import Loader from '../login/loader/Loader';
import Error404 from '../404/404';

const PlayerDemo = require('../../containers/video/Player/PlayerDemo');

interface IWatchProp {
    trackId: string;
};

const Watch: React.FC<RouteComponentProps<IWatchProp>> = (urlParam: RouteComponentProps<IWatchProp>) => {
    const trackId: string = urlParam.match.params.trackId;

    const [ video, setVideo ] = useState<VideoClassType | null | undefined>(undefined);

    useEffect(() => {
        const videoAbortController: AbortController = new AbortController();
        const payload: ITrackId = { track_id: trackId };
        const fetchOneVideo = async (payload: ITrackId, abortSignal: AbortSignal) => setVideo(await VGAPI.getTrackId(payload, abortSignal));
        const sequentialFetch = async () => await fetchOneVideo(payload, videoAbortController.signal);

        sequentialFetch();
        return () => {
            videoAbortController.abort();
        };
    }, [trackId]);

    if (video === undefined)
        return <Loader />;
    else if (video === null)
        return <Error404 />;
    else
        return (
            <GlobalStyled.Box.CenterBoxByRowNonSpaced>
                <PlayerDemo.default fileDirectory={'./videos/test.mp4'} />
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        );
};

export default Watch;