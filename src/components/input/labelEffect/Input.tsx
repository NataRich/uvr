import React, { useState } from 'react';

import {
    StyledInputContainer,
    StyledInputBox,
    StyledInput,
    StyledHelperBox,
} from './Input.style';
import { InputAttributes } from './interface';

const Input: React.FC<InputAttributes> = ({
    fontSize,
    isRequired,
    onChangeHandler,
    placeholder,
    value,
    width,
    borderColor,
    borderRadius,
}) => {
    const [ isFocused, setIsFocused ] = useState<boolean>(false);
    const toggleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.currentTarget.value)
            setIsFocused(prev => !prev)
    };
    return (
        <StyledInputContainer>
            <StyledInputBox {...{fontSize, placeholder, borderRadius, width, borderColor, isFocused}}>
                <StyledInput {...{fontSize}}
                onChange={onChangeHandler}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
                value={value} />
            </StyledInputBox>
            {
                isRequired ? (
                    <StyledHelperBox {...{fontSize, width}}>
                        <p>{isRequired ? '*Required':''}</p>
                    </StyledHelperBox>
                ):null
            }
        </StyledInputContainer>
    );
};

export default Input;