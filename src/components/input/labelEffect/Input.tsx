import React, { useState } from 'react';

import { InputAttributes } from './interface';
import {
    StyledInputContainer,
    StyledInputBox,
    StyledInput,
    StyledHelperBox,
} from './Input.style';

const Input: React.FC<InputAttributes> = ({
    style: {
        borderColor,
        borderRadius,
        fontSize,
        helperColor,
        width,
    },
    props: {
        isRequired,
        helperText,
        placeholder,
        type,
        value,
    },
    onChangeHandler,
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
                type={type}
                onChange={onChangeHandler}
                onFocus={toggleFocus}
                onBlur={toggleFocus}
                value={value} />
            </StyledInputBox>
            {
                isRequired || helperText ? (
                    <StyledHelperBox {...{fontSize, width, helperColor}}>
                        <p className='required'>{isRequired ? '*Required':''}</p>
                        <p className='helper'>{helperText ? helperText:''}</p>
                    </StyledHelperBox>
                ):null
            }
        </StyledInputContainer>
    );
};

export default Input;