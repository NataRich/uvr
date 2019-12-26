import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import Form from '../../containers/login/form/Form';
import Entry from '../../containers/login/entry/Entry';

const Login: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                <Form />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{backgroundColor: '#149E9A'}}>
                <Entry />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Login;