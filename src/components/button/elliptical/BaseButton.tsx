import React from 'react';

import { IEllipticalButtonAttributes } from './interface';
import { StyledBaseButton } from './BaseButton.style';
 
const BaseButton: React.FC<IEllipticalButtonAttributes> = ({
    style: {
        backgroundColor,
        fontColor,
    },
    props: {
        defaultId,
        defaultValue,
        isLoading,
        isSelected,
    },
    onClickHandler,
}) => {
    return (
        <StyledBaseButton id={defaultId === undefined ? '':defaultId}
            className={isLoading === true ? '':''}
            onClick={onClickHandler}
            style={{
                color: isSelected ? backgroundColor:fontColor,
                backgroundColor: isSelected ? fontColor:backgroundColor,
                borderColor: isSelected ? backgroundColor:fontColor,
            }}>
            {defaultValue}
        </StyledBaseButton>
    );
};

export default BaseButton;