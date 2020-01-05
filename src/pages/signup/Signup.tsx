import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { UGAPI } from '../../global/user/request';
import { Middleware } from '../../middlewares/API/APIMiddlewares';
import Entry from '../../containers/signup/entry/Entry';
import Form from '../../containers/signup/form/Form';
import Loader from '../loader/Loader';
import ERelogIn from '../login/error/ERelogIn';

const Signup: React.FC= () => {
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