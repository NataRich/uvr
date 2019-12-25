import React from 'react';

import { StyledRoundedButton } from './RoundedButton.style';
import { RoundedButtonAttributes } from './interface';

const RoundedButton: React.FC<RoundedButtonAttributes> = ({
    style: {
        width,
        height,
        backgroundColor,
        borderRadius,
        fontColor,
    },
    props: {
        defaultValue,
    },
    onClickHandler,
}) => {
    return (
        <StyledRoundedButton
            onClick={onClickHandler}
            style={{
                width: width ? width:'200px',
                height: height ? height:'40px',
                borderRadius: borderRadius ? borderRadius:'10px',
                backgroundColor,
                color: fontColor,
            }}>
            {defaultValue}
        </StyledRoundedButton>
    );
};

export default RoundedButton;