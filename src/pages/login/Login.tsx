import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import Form from '../../containers/login/Form';

const Login: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                <Form />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                {/* Sign Up entry + absolutely positioned logo on top right corner */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Login;