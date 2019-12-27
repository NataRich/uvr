import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { UserClassType } from '../../global/user/class';
import Form from '../../containers/login/form/Form';
import Entry from '../../containers/login/entry/Entry';
import ERelogIn from './error/ERelogIn';

const Login: React.FC<{user: UserClassType | null}> = ({
    user
}) => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            {
                user ? <ERelogIn />:(
                    <>
                        <GlobalStyled.Box.CenterBoxByColNonSpaced>
                            <Form />
                        </GlobalStyled.Box.CenterBoxByColNonSpaced>
                        <GlobalStyled.Box.CenterBoxByColNonSpaced style={{backgroundColor: '#149E9A'}}>
                            <Entry />
                        </GlobalStyled.Box.CenterBoxByColNonSpaced>
                    </>
                )
            }
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Login;