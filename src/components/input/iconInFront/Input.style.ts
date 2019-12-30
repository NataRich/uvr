import styled from 'styled-components';

type ContainerProps = {
    hasBorder:      boolean;
    borderColor:    string;
    borderRadius:   number | undefined;
    inputWidth:     number;
    imgWidth:       number;
}

type ImgProps = {
    imgWidth:       number;
};

type InputProps = {
    borderColor:    string;
    inputWidth:     number;
    imgWidth:       number;
    fontSize:       number;
    hasBorder:      boolean;
};

const StyledInputContainer = styled.div<ContainerProps>`
    width: ${props => props.inputWidth + props.imgWidth}px;
    height: ${props => props.imgWidth}px;
    display: flex;
    justify-content: start;
    align-items: center;
    background: #FFF;
    padding: 3px;
    border: ${props => props.hasBorder ? '1.5px solid': 'none'};
    border-color: ${props => props.hasBorder ? props.borderColor: ''};
    border-radius: ${props => props.hasBorder ? props.borderRadius:0}px;
`;

const StyledBox = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img<ImgProps>`
    width: ${props => props.imgWidth}px;
    height: ${props => props.imgWidth}px;
`;

const StyledInput = styled.input<InputProps>`
    width: ${props => props.inputWidth}px;
    height: 90%;
    font-size: ${props => props.fontSize}px;
    outline: none;
    border: none;
    padding-left: 5%;
    background: #FFF;
    border-bottom: ${props => props.hasBorder ? 'none':'1px solid'};
    border-color: ${props => props.borderColor};
    ::placeholder {
        font-size: ${props => props.fontSize - 1}px;
        color: #D3D3D3;
    }
`;

export {
    StyledInputContainer,
    StyledBox,
    StyledImg,
    StyledInput,
};