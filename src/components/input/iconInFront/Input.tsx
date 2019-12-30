import React from 'react';

import { InputAttributes } from './interface';
import {
    StyledInputContainer,
    StyledBox,
    StyledInput,
    StyledImg,
} from './Input.style';

const Input: React.FC<InputAttributes> = ({
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
                    onFocus={e => e.currentTarget.placeholder=''}
                    onBlur={e => e.currentTarget.placeholder=placeholder}
                    value={value} />
            </StyledBox>
        </StyledInputContainer>
    );
};

export default Input;