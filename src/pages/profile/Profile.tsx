import React from 'react';

import { GlobalStyled } from '../../global/style/Style.style';

const Profile: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                {/* personal information */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Box.CenterBoxByColNonSpaced>
                {/* video & upload video action space */}
            </GlobalStyled.Box.CenterBoxByColNonSpaced>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Profile;