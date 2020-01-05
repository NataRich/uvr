import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../../../../global/style/Style.style';
import { VideoInterface } from '../../../../../global/videos/interface';
import Button from '../../../../../components/button/rounded/RoundedButton';
import { LocalRButtonAttributes } from '../step1/Logistics';
import { VRAPI } from '../../../../../global/videos/request';
import { Middleware } from '../../../../../middlewares/API/APIMiddlewares';
import {
    defaultCancelBtnAttributes,
    defaultUploadBtnAttributes,
} from './Logistics';


const Step2: React.FC = () => {
    const [ uploadBtnAttri, setUploadBtnAttri ] = useState<LocalRButtonAttributes>(defaultUploadBtnAttributes);
    const [ cancelBtnAttri, setCancelBtnAttri ] = useState<LocalRButtonAttributes>(defaultCancelBtnAttributes);
    const [ videoResource, setVideoResource ]   = useState<Record<'video', FormData>>({video: new FormData()});
    const [ vHelper, setVHelper ]               = useState<boolean>(false);
    const [ vHelperText, setVHelperText ]       = useState<string>('.MP4 file only');
    const [ iHelper, setIHelper ]               = useState<boolean>(false);
    const [ iHelperText, setIHelperText ]       = useState<string>('.PNG allowed.');

    const onChangeVideoHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let file: FileList | null = e.target.files;
        if (file) {
            let name: string = file[0].name;
            let ext: string = name.split('.')[name.split('.').length - 1].toLowerCase();
            if (ext === 'mp4') {
                setVHelperText('The file has been detected to be valid.');
                setVHelper(true);
                videoResource.video.append('file', file[0]);
            } else {
                setVHelperText('.MP4 file only. Current file not allowed.');
                setVHelper(false);
                videoResource.video.delete('file');
            };
        };
    };

    const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let file: FileList | null = e.target.files;
        if (file) {
            let name: string = file[0].name;
            let ext: string = name.split('.')[name.split('.').length - 1].toLowerCase();
            if (ext === 'png') {
                setIHelperText('The file has been detected to be valid.');
                setIHelper(true);
                videoResource.video.append('image', file[0]);
            } else {
                setIHelperText('.PNG allowed only. Current file not allowed.');
                setIHelper(false);
                videoResource.video.delete('image');
            };
        };
    };

    useEffect(() => {
        if (vHelper && iHelper)
            setUploadBtnAttri(prevState => {return {...prevState, props: {...prevState.props, disabled: false}}});
        else
            setUploadBtnAttri(prevState => {return {...prevState, props: {...prevState.props, disabled: true}}});
    }, [vHelper, iHelper])

    const onClickUploadHandler = async () => {
        setUploadBtnAttri({...uploadBtnAttri, props: {...uploadBtnAttri.props, isLoading: true}});
        const fileAbortController: AbortController = new AbortController();
        let payload: VideoInterface = { video: videoResource.video };
        let status: number = (await Middleware.getStatus(VRAPI.postVideoFile(payload, fileAbortController.signal))).status;
        fileAbortController.abort();
        if (status === 2000)
            setCancelBtnAttri({...cancelBtnAttri, props: {...cancelBtnAttri.props, disabled: false}});
        else
            setCancelBtnAttri({...cancelBtnAttri, props: {...cancelBtnAttri.props, disabled: true}});
        setUploadBtnAttri({...uploadBtnAttri, props: {...uploadBtnAttri.props, isLoading: false}});
    };

    const onClickCancelHandler = async () => {
        setVideoResource({video: new FormData()});
        setCancelBtnAttri({...cancelBtnAttri, props: {...cancelBtnAttri.props, isLoading: true}});
        let status: number = (await Middleware.getStatus(VRAPI.get())).status;
        setCancelBtnAttri({...cancelBtnAttri, props: {...cancelBtnAttri.props, isLoading: false}});
        if (status === 2000)
            setCancelBtnAttri({...cancelBtnAttri, props: {...cancelBtnAttri.props, disabled: true}});
        else
            setCancelBtnAttri({...cancelBtnAttri, props: {...cancelBtnAttri.props, disabled: false}});
    };

    return (
        <>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ height: '15%' }}>
                <input type='file' onChange={onChangeVideoHandler}/>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{ color: vHelper ? '#149E9A':'#931621' }}>
                    {vHelperText}
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ height: '15%' }}>
                <input type='file' onChange={onChangeImageHandler}/>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{ color: iHelper ? '#149E9A':'#931621' }}>
                    {iHelperText}
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ height: '15%' }}>
                <Button {...{style: uploadBtnAttri.style,
                            props: uploadBtnAttri.props,
                            onClickHandler: onClickUploadHandler}} />
                <Button {...{style: cancelBtnAttri.style,
                            props: cancelBtnAttri.props,
                            onClickHandler: onClickCancelHandler}} />
            </GlobalStyled.Box.CenterBoxByRowSpaced>
        </>
    );
};

export default Step2;