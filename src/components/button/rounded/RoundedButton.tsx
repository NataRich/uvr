import React from 'react';

import { StyledRoundedButton } from './RoundedButton.style';
import { RoundedButtonAttributes } from './interface';

const RoundedButton: React.FC<RoundedButtonAttributes> = ({
    style: {
        width,
        height,
        backgroundColor,
        borderColor,
        borderRadius,
        borderWidth,
        fontColor,
        fontSize,
        invertColorH,
        loadingBorderColor,
    },
    props: {
        defaultValue,
        disabled,
        isLoading,
    },
    onClickHandler,
}) => {
    return (
        <StyledRoundedButton {...{width, height, backgroundColor, 
                                borderRadius, fontColor, isLoading, 
                                loadingBorderColor, disabled, fontSize,
                                invertColorH, borderColor, borderWidth}}
            disabled={disabled}
            onClick={onClickHandler}>
            {defaultValue}
        </StyledRoundedButton>
    );
};

export default RoundedButton;