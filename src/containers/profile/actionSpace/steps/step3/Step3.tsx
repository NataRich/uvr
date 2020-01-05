import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalStyled } from '../../../../../global/style/Style.style';
import { VideoInfoArgInterface } from '../../../../../global/videos/interface';
import Input from '../../../../../components/input/labelEffect/Input';
import Group from '../../../../../components/button/elliptical/Group';
import Button from '../../../../../components/button/rounded/RoundedButton';
import { GroupButtonAttributes } from '../../../../../components/button/elliptical/interface';
import {
    LocalInputAttributes,
    LocalRButtonAttributes,
} from '../step1/Logistics';
import {
    defaultTagBtnGroupAttributes,
    defaultTitleAttributes,
    defaultDoneButtonAttributes,
} from './Logistics';
import { VRAPI } from '../../../../../global/videos/request';
import { Middleware } from '../../../../../middlewares/API/APIMiddlewares';

const Step3: React.FC = () => {
    const [ titleAttri, setTitleAttri ]         = useState<LocalInputAttributes>(defaultTitleAttributes);
    const [ isTitleOkay, setIsTitleOkay ]       = useState<boolean>(false);
    const [ btnGroupAttri, setBtnGroupAttri ]   = useState<GroupButtonAttributes['attributes']>(defaultTagBtnGroupAttributes);
    const [ description, setDescription ]       = useState<string>('');
    const [ isDOkay, setIsDOkay ]               = useState<boolean>(false);
    const [ doneBtnAttri, setDoneBtnAttri ]     = useState<LocalRButtonAttributes>(defaultDoneButtonAttributes);

    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string = e.currentTarget.value;
        if (value.match(/^[a-zA-Z\d[\]{}()\s_-]{3,50}$/)) {
            setTitleAttri({...defaultTitleAttributes, props: {...defaultTitleAttributes.props, value, isRequired: false, helperText: 'Okay.'}});
            setIsTitleOkay(true);
        } else if (value === '') {
            setTitleAttri({...defaultTitleAttributes});
            setIsTitleOkay(false);
        } else {
            setTitleAttri({style: {...titleAttri.style, borderColor: 'red', helperColor: 'red'},
                        props: {...titleAttri.props, value, isRequired: true, helperText: '3-50 characters only. Do not enter illegal characters.'}});
            setIsTitleOkay(false);
        };
    };

    const onClickTagHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id: string = e.currentTarget.id;          // prevent segmentFault
        setBtnGroupAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === id)
                return {...prevProp, props: {...prevProp.props, isSelected: !prevProp.props.isSelected}};
            return {...prevProp};
        }));
    };

    const onChangeDescriptionHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const value: string = e.currentTarget.value;
        setDescription(value);
        setIsDOkay(value === '' ? false:true);
    };

    useEffect(() => {
        if (isTitleOkay && isDOkay)
            setDoneBtnAttri(prevState => {return {...prevState, props: {...prevState.props, disabled: false}}});
        else
            setDoneBtnAttri(prevState => {return {...prevState, props: {...prevState.props, disabled: true}}});
    }, [isTitleOkay, isDOkay])

    const onClickDoneHandler = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setDoneBtnAttri({...doneBtnAttri, props: {...doneBtnAttri.props, isLoading: true}});
        const videoArgAbortController: AbortController = new AbortController();
        let payload: VideoInfoArgInterface = {
            title: titleAttri.props.value,
            tags: {
                vr: btnGroupAttri[0].props.isSelected ? 1:0,
                campus: btnGroupAttri[1].props.isSelected ? 1:0,
                event: btnGroupAttri[2].props.isSelected ? 1:0,
            },
            description,
        };
        let status: number = (await Middleware.getStatus(VRAPI.postVideoArgs(payload, videoArgAbortController.signal))).status;
        videoArgAbortController.abort();
        setDoneBtnAttri({...doneBtnAttri, props: {...doneBtnAttri.props, isLoading: false}});
        if (status === 2000)
            window.location.href='/profile';
    };

    return (
        <>
            <StyledSection>
                <Input {...{style: titleAttri.style,
                            props: titleAttri.props,
                            onChangeHandler: onChangeTitleHandler}} />
            </StyledSection>
            <StyledSection>
                <Group {...{category: 'Tags',
                            attributes: btnGroupAttri,
                            onClickHandler: onClickTagHandler}} />
            </StyledSection>
            <StyledSection>
                <StyledTextArea style={{ fontSize: '12px' }} rows={10} cols={60} 
                    onChange={onChangeDescriptionHandler} value={description} />
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{ color: '#999999', fontSize: '14px' }}>
                    {description.length}/600 characters
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </StyledSection>
            <StyledSection>
                <Button {...{style: doneBtnAttri.style,
                            props: doneBtnAttri.props,
                            onClickHandler: onClickDoneHandler}} />
            </StyledSection>
        </>
    );
};

export default Step3;

const StyledSection = styled.div`
    width: auto;
    height: auto;
    margin-bottom: 10px;
`;

const StyledTextArea = styled.textarea`
    border: 1.5px solid #D3D3D3;
    outline: none;
    resize: none;
    transition: border-color 150ms ease-in-out;
    :focus {
        border-color: #1C3144;
    }

`;