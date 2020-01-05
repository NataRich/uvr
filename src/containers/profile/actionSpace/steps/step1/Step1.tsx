import React, { useState } from 'react';

import { ITrackId } from '../../../../../global/videos/interface';
import { VRAPI } from '../../../../../global/videos/request';
import { generateTrackId } from '../../../../../global/utils/utils';
import {
    IPreLabelEffectInputAttributes,
    IPreRoundedButtonAttributes,
} from '../../../../../global/utils/Style';
import { Middleware } from '../../../../../middlewares/API/APIMiddlewares';
import Button from '../../../../../components/button/rounded/RoundedButton';
import Input from '../../../../../components/input/labelEffect/Input';

import {
    defaultTrackIdInputAttributes,
    defaultAcquireTrackIdBtnAttributes,
} from './Logistics';

const Step1: React.FC = () => {
    const [ acquireBtnAttri, setAcquireBtnAttri ]   = useState<IPreRoundedButtonAttributes>(defaultAcquireTrackIdBtnAttributes);
    const [ trackIdAttri, setTrackIdAttri ]         = useState<IPreLabelEffectInputAttributes>(defaultTrackIdInputAttributes);

    const onChangeHandler = () => {};

    const onClickAcquireHandler = async () => {
        setAcquireBtnAttri({...acquireBtnAttri, props: {...acquireBtnAttri.props, isLoading: true}});
        const trackIdAbortController: AbortController = new AbortController();
        let temp: string = generateTrackId();
        let payload: ITrackId = { track_id: temp};
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