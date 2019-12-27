import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import Entry from '../../containers/signup/entry/Entry';
import Form from '../../containers/signup/form/Form';

const Signup: React.FC= () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{backgroundColor: '#149E9A'}}>
                <Entry />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced >
                <Form />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Signup;