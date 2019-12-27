import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalStyled } from '../../../global/style/Style.style';
import Logo from '../../../components/UVRLogo/Logo';
import { LogoAttributes } from '../../../components/UVRLogo/interface';
import { UserLoginRequiredAPI } from '../../../global/user/request';
import { APIMiddlewares } from '../../../middlewares/API/APIMiddlewares';

const API           = new UserLoginRequiredAPI();
const Middleware    = new APIMiddlewares();

const ERelogIn: React.FC = () => {
    const [ isCopied, setIsCopied ] = useState<boolean>(false);
    const [ textPosX, setTextPosX ] = useState<number>(0);
    const [ textPosY, setTextPosY ] = useState<number>(0)
    const emailRef                  = useRef<HTMLTextAreaElement>(null);

    const logOut = async () => {
        let status: number = (await Middleware.getStatus(API.getClear())).status;
        if (status === 2000)
            window.location.href='/login';
    };

    const copyToClipboard = () => {
        if (emailRef.current) {
            emailRef.current.select();
            document.execCommand('copy');
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 1500)
        };
    };

    const calcPos = () => {
        let X: number | undefined = document.getElementById('email')?.getBoundingClientRect().left;
        let Y: number | undefined = document.getElementById('email')?.getBoundingClientRect().top;
        if (X !== undefined && Y !== undefined) {
            setTextPosX(X + 102);
            setTextPosY(Y - 16);
        };
    };

    window.onresize = () => {calcPos()};
    useEffect(() => calcPos(), []);

    return (
        <GlobalStyled.Box.CenterBoxByColXSpaced>
            <div
                style={{
                    position: 'absolute',
                    left: '0',
                    top: '0',
                }}>
                <Logo {...defaultLogoAttributes} />
            </div>
            <div style={{
                    width: '100%',
                    height: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#149E9A',
                    color: '#FFF',
                }}>
                <p style={{fontSize: '30px'}}>Error 405</p>
            </div>
            <div>
                <p>We have detected that you have logged in.</p>
                <p>To prevent occurrence of unknown errors, we have blocked <StyledSpan {...{color: '', hasCursor: false}}>Login</StyledSpan> and <StyledSpan {...{color: '', hasCursor: false}}>Signup</StyledSpan> functions for you.</p>
                <p>If you want to proceed to log in or sign up another account, please <StyledSpan {...{color: '#149E9A', hasCursor: true}} onClick={logOut}>log out</StyledSpan> first.</p>
                <p>If you believe this is a mistaken detection, please contact the staff through the email: <StyledTextArea id='email' ref={emailRef} onClick={copyToClipboard} defaultValue='cscadmin@uwcvr.onmicrosoft.com'/></p>
                <StyledCopySpan id='copied' {...{isCopied, X: textPosX, Y: textPosY}}>Copied!</StyledCopySpan>
            </div>
            <div style={{
                    width: '100%',
                    height: '25%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#149E9A',
                    color: '#FFF',
                }}>
                <p>®2019 UWC (CSC) Virtual Reality</p>
            </div>
        </GlobalStyled.Box.CenterBoxByColXSpaced>
    );
};

const defaultLogoAttributes: LogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};

const StyledSpan = styled.span<{color: string, hasCursor: boolean}>`
    text-decoration: underline;
    cursor: ${props => props.hasCursor ? 'pointer':'none'};
    color: ${props => props.color}
`;

const StyledCopySpan = styled.span<{isCopied: boolean, X: number, Y: number}>`
    font-size: 14px;
    border: 1px solid #D3D3D3;
    border-radius: 5px;
    padding: 2px;
    position: absolute;
    top: ${props => props.Y}px;
    left: ${props => props.X}px;
    opacity: ${props => props.isCopied ? '1':'0'};
`;

const StyledTextArea = styled.textarea`
    width: 240px;
    height: 16px;
    padding: none;
    outline: none;
    border: none;
    resize: none;
    color: #931621;
    text-decoration: underline;
    cursor: pointer;
    overflow-wrap: normal;
    :hover {
        background-color: #E0FFFE;
    };
    ::selection {
        background-color: #E0FFFE;
    };
`;

export default ERelogIn;