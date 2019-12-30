import React, { useState } from 'react';

import { StyledBaseButton } from './BaseButton.style';
import { ButtonAttributes } from './interface';
 
const BaseButton: React.FC<ButtonAttributes> = ({
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
    const [ didMouseDown, setDidMouseDown ] = useState<boolean>(false);
    
    const handleMouseDown   = () => setDidMouseDown(true);
    const handleMouseUp     = () => setDidMouseDown(false);
    return (
        <StyledBaseButton id={defaultId === undefined ? '':defaultId}
            className={isLoading === true ? '':''}
            onClick={onClickHandler}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            style={{
                color: isSelected ? backgroundColor:fontColor,
                backgroundColor: isSelected ? fontColor:backgroundColor,
                borderColor: isSelected ? backgroundColor:fontColor,
                transform: didMouseDown ? "scale(0.8)":""
            }}>
            {defaultValue}
        </StyledBaseButton>
    );
};

export default BaseButton;