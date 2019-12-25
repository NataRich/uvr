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
        <StyledRoundedButton {...{width, height, backgroundColor, borderRadius, fontColor}}
            onClick={onClickHandler}>
            {defaultValue}
        </StyledRoundedButton>
    );
};

export default RoundedButton;