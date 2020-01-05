import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { UGAPI } from '../../global/user/request';
import { Middleware } from '../../middlewares/API/APIMiddlewares';
import Form from '../../containers/login/form/Form';
import Entry from '../../containers/login/entry/Entry';
import Loader from '../loader/Loader';
import ERelogIn from './error/ERelogIn';

const Login: React.FC = () => {
    const [ isFetchingUser, setIsFetchingUser ]     = useState<boolean>(true);
    const [ isLoggedIn, setIsLoggedIn ]             = useState<boolean>(false);

    useEffect(() => {
        const userAbortController: AbortController = new AbortController();
        const fetchUser = async () => {
            setIsFetchingUser(true);
            let user = await Middleware.getUser(UGAPI.getUser(userAbortController.signal));
            setIsLoggedIn(user ? true: false);
            setIsFetchingUser(false);
        };

        fetchUser();
        return () => {
            userAbortController.abort();
        };
    }, []);

    if (isFetchingUser)
        return (
            <Loader />
        );
    else if (isLoggedIn)
        return (
            <ERelogIn />
        );
    else 
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