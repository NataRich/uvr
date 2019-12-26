import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';

const Signup: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{backgroundColor: '#149E9A'}}>
                {/* Sign Up entry + absolutely positioned logo on top right corner */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced >
                {/* Signup form */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Signup;