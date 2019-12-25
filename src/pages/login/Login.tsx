import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';

const Login: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColSpaced>
                {/* Login form */}
            </GlobalStyled.Box.CenterBoxByColSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                {/* Sign Up entry + absolutely positioned logo on top right corner */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Login;