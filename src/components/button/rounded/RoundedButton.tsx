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
        isLoading,
    },
    onClickHandler,
}) => {
    return (
        <StyledRoundedButton {...{width, height, backgroundColor, borderRadius, fontColor, isLoading}}
            onClick={onClickHandler}>
            {defaultValue}
        </StyledRoundedButton>
    );
};

export default RoundedButton;