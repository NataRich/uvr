import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import { UserClassType } from '../../global/user/class';
import { UserGeneralAPI } from '../../global/user/request';
import { APIMiddlewares } from '../../middlewares/API/APIMiddlewares';
import Account from '../../containers/profile/account/Account';
import AccountLoader from '../../containers/profile/account/AccountLoader';
import EUnLogIn from './error/EUnLogIn';

const UAPI          = new UserGeneralAPI();
const Middleware    = new APIMiddlewares();

const Profile: React.FC = () => {
    const [ isFetchingUser, setIsFetchingUser ]     = useState<boolean>(true);
    const [ user, setUser ]                         = useState<UserClassType | null>(null);

    useEffect(() => {
        const userAbortController: AbortController = new AbortController();
        const fetchUser = async () => {
            setIsFetchingUser(true);
            setUser(await Middleware.getUser(UAPI.getUser(userAbortController.signal)));
            setIsFetchingUser(false);
        };

        fetchUser();
        return () => {
            userAbortController.abort();
        };
    }, []);

    if (isFetchingUser)
        return (
            <GlobalStyled.Box.CenterBoxByRowNonSpaced>
                <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                    width: '315px',
                    boxShadow: '5px 0 20px 10px #EEE',
                    }}>
                    <AccountLoader />
                </GlobalStyled.Box.CenterBoxByColNonSpaced>
                <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: 'calc(100% - 315px)' }}>
                    {/* video & upload video action space */}
                </GlobalStyled.Box.CenterBoxByColNonSpaced>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        );
    else if (!user)
        return (
            <EUnLogIn />
        );
    else
        return (
            <GlobalStyled.Box.CenterBoxByRowNonSpaced>
                <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                    width: '315px',
                    boxShadow: '5px 0 20px 10px #EEE',
                    }}>
                    <Account {...{user}} />
                </GlobalStyled.Box.CenterBoxByColNonSpaced>
                <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: 'calc(100% - 315px)' }}>
                    {/* video & upload video action space */}
                </GlobalStyled.Box.CenterBoxByColNonSpaced>
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        );
};

export default Profile;