import React from 'react';

import { IRoundedButtonAttributes } from './interface';
import { StyledRoundedButton } from './RoundedButton.style';

const RoundedButton: React.FC<IRoundedButtonAttributes> = ({
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