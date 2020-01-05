import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { ILogoAttributes } from './interface';
import logo from '../../assets/resources/logo.png';
import {
    StyledImg,
    StyledBox,
} from './Logo.style';

const Logo: React.FC<ILogoAttributes> = ({
    style: {
        position,
    },
}) => {
    const onClickHandler = () => window.location.href = '/';

    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            {
                position === 'LHS' ? (
                    <StyledBox {...{position}}>
                        <div>
                            <div className='logo-container'
                                onClick={onClickHandler}>
                                <StyledImg src={logo} />
                            </div>
                            <div className='text1'>
                                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                                    <span style={{color: '#0165A3'}}>U</span>
                                    <span style={{color: '#931621'}}>V</span>
                                    <span style={{color: '#1C3144'}}>R</span>
                                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            </div>
                        </div>
                        <div className='text-group'>
                            <div className='text2'>
                                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                                    <span style={{color: '#0165A3'}}>U</span>
                                    WC (CSC)
                                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            </div>
                            <div className='text3'>
                                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                                    <span style={{color: '#931621'}}>V</span>
                                    irtual&nbsp;
                                    <span style={{color: '#1C3144'}}>R</span>
                                    eality
                                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            </div>
                        </div>
                    </StyledBox>
                ):(
                    <StyledBox {...{position}}>
                        <div className='text-group'>
                            <div className='text2'>
                                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                                    <span style={{color: '#0165A3'}}>U</span>
                                    WC (CSC)
                                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            </div>
                            <div className='text3'>
                                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                                    <span style={{color: '#931621'}}>V</span>
                                    irtual&nbsp;
                                    <span style={{color: '#1C3144'}}>R</span>
                                    eality
                                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            </div>
                        </div>
                        <div>
                            <div className='logo-container'
                                onClick={onClickHandler}>
                                <StyledImg src={logo} />
                            </div>
                            <div className='text1'>
                                <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                                    <span style={{color: '#0165A3'}}>U</span>
                                    <span style={{color: '#931621'}}>V</span>
                                    <span style={{color: '#1C3144'}}>R</span>
                                </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                            </div>
                        </div>
                    </StyledBox>
                )
            }
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Logo;