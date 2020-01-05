import React from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import { ILogoAttributes } from '../../../components/UVRLogo/interface';
import Logo from '../../../components/UVRLogo/Logo';

const EUnLogIn: React.FC = () => {
    const onClickLogInHandler = () => window.location.href='/login';
    
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
                <p>We have detected that you have not logged in.</p>
                <p>If you want to access this page, please <span onClick={onClickLogInHandler} style={{ textDecoration: 'underline', color: '#149E9A', cursor: 'pointer' }}>log in</span> first</p>
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

export default EUnLogIn;

const defaultLogoAttributes: ILogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};