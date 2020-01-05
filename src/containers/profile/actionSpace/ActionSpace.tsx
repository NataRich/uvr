import React from 'react';

import Lock from '../../../assets/icons/lock.svg';

import { GlobalStyled } from '../../../global/style/Style.style';
import Step1 from './steps/step1/Step1';
import Step2 from './steps/step2/Step2';
import Step3 from './steps/step3/Step3';

import {ActionSpaceProps } from './interface';
import { StyledSpan } from './ActionSpace.style';

const ActionSpace: React.FC<ActionSpaceProps> = ({
    isEmailAuthed,
}) => {
    return (
        <>
            {
                isEmailAuthed ? (
                    <>
                        <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: '30%', minWidth: '250px' }}>
                            <Step1 />
                        </GlobalStyled.Box.CenterBoxByColNonSpaced>
                        <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: '30%', minWidth: '300px' }}>
                            <Step2 />
                        </GlobalStyled.Box.CenterBoxByColNonSpaced>
                        <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: '30%', minWidth: '400px' }}>
                            <Step3 />
                        </GlobalStyled.Box.CenterBoxByColNonSpaced>
                    </>
                ):(
                    <GlobalStyled.Box.CenterBoxByColNonSpaced>
                        <GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                            <StyledSpan><img src={Lock} alt='' /></StyledSpan> You are not authorized to upload VR videos until you have authenticated your email address.
                        </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                        <GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                            Please authenticate your email address on the Profile Card beside.
                        </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
                    </GlobalStyled.Box.CenterBoxByColNonSpaced>
                )
            }
        </>
    );
};

export default ActionSpace;