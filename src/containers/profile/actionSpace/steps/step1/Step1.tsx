import React, { useState } from 'react';

import { TrackIdInterface } from '../../../../../global/videos/interface';
import Button from '../../../../../components/button/rounded/RoundedButton';
import Input from '../../../../../components/input/labelEffect/Input';
import {
    LocalRButtonAttributes,
    LocalInputAttributes,
} from './Logistics';
import {
    defaultTrackIdInputAttributes,
    defaultAcquireTrackIdBtnAttributes,
    generateTrackId,
} from './Logistics';
import { VRAPI } from '../../../../../global/videos/request';
import { Middleware } from '../../../../../middlewares/API/APIMiddlewares';

const Step1: React.FC = () => {
    const [ acquireBtnAttri, setAcquireBtnAttri ]   = useState<LocalRButtonAttributes>(defaultAcquireTrackIdBtnAttributes);
    const [ trackIdAttri, setTrackIdAttri ]         = useState<LocalInputAttributes>(defaultTrackIdInputAttributes);

    const onChangeHandler = () => {};

    const onClickAcquireHandler = async () => {
        setAcquireBtnAttri({...acquireBtnAttri, props: {...acquireBtnAttri.props, isLoading: true}});
        const trackIdAbortController: AbortController = new AbortController();
        let temp: string = generateTrackId();
        let payload: TrackIdInterface = { track_id: temp};
        let status: number = (await Middleware.getStatus(VRAPI.postTrackId(payload, trackIdAbortController.signal))).status;
        while (status !== 2000) {
            temp = generateTrackId();
            payload = { track_id: temp };
            status = (await Middleware.getStatus(VRAPI.postTrackId(payload, trackIdAbortController.signal))).status;
        };
        setTrackIdAttri({...trackIdAttri, props: {...trackIdAttri.props, value: temp}});
        trackIdAbortController.abort();
        setAcquireBtnAttri({...acquireBtnAttri, props: {...acquireBtnAttri.props, isLoading: false}});
    };

    return(
        <>
            <Input {...{style: trackIdAttri.style,
                        props: trackIdAttri.props,
                        onChangeHandler}} />
            <Button {...{style: acquireBtnAttri.style,
                        props: acquireBtnAttri.props,
                        onClickHandler: onClickAcquireHandler}} />
        </>
    );
};

export default Step1;