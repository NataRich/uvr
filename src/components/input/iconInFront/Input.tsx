import React from 'react';

import { IIconInFrontInputAttributes } from './interface';
import {
    StyledInputContainer,
    StyledBox,
    StyledInput,
    StyledImg,
} from './Input.style';

const Input: React.FC<IIconInFrontInputAttributes> = ({
    style: {
        borderColor,
        borderRadius,
        fontSize,
        hasBorder,
        inputWidth,
        imgWidth,
    },
    props: {
        image,
        placeholder,
        type,
        value,
    },
    onChangeHandler,
}) => {
    return (
        <StyledInputContainer {...{borderColor, borderRadius, fontSize, hasBorder, inputWidth, imgWidth}}>
            <StyledBox>
                <StyledImg {...{imgWidth}} src={image} />
            </StyledBox >
            <StyledBox>
                <StyledInput {...{inputWidth, imgWidth, fontSize, hasBorder, borderColor}}
                    placeholder={placeholder}
                    type={type}
                    onChange={onChangeHandler}
                    onFocus={(e: { currentTarget: { placeholder: string; }; }) => e.currentTarget.placeholder=''}
                    onBlur={(e: { currentTarget: { placeholder: string; }; }) => e.currentTarget.placeholder=placeholder}
                    value={value} />
            </StyledBox>
        </StyledInputContainer>
    );
};

export default Input;