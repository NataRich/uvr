import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import Logo from '../../components/UVRLogo/Logo';
import { LogoAttributes } from '../../components/UVRLogo/interface';

const Error404: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByColXSpaced>
            <div style={{
                position: 'absolute',
                top: '0',
                left: '5px'
            }}>
                <Logo {...{style: defaultLogoAttributes.style,
                        props: defaultLogoAttributes.props,}} />
            </div>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ backgroundColor: '#149E9A' }}>
                    <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{ color: '#FFF', fontSize: '30px' }}>
                        404 Page
                    </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ backgroundColor: '#FFF' }}>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ backgroundColor: '#149E9A' }}>
                <GlobalStyled.Text.AutoWidthAutoHeightNonMargin style={{ color: '#FFF' }}>
                    ®2019 UWC (CSC) Virtual Reality
                </GlobalStyled.Text.AutoWidthAutoHeightNonMargin>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        </GlobalStyled.Box.CenterBoxByColXSpaced>
    );
};

export default Error404;

const defaultLogoAttributes: LogoAttributes = {
    style: {
        position: 'LHS',
    },
    props: {},
};