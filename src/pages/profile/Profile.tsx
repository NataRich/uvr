import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';
import Account from '../../containers/profile/account/Account';
import { UserClassType } from '../../global/user/class';

type ProfileProps = {
    user: UserClassType;
};

const Profile: React.FC<ProfileProps> = ({
    user,
}) => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{
                width: '315px',
                boxShadow: '5px 0 20px 10px #EEE',
                }}>
                {/* personal information */}
                <Account {...{user}} />
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced style={{ width: 'calc(100% - 315px)' }}>
                {/* video & upload video action space */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Profile;