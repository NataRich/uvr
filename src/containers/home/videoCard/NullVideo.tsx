import React from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';

const NullVideo: React.FC = () => {
    return (
        <GlobalStyled.Box.CenterBoxByColNonSpaced>
            <GlobalStyled.Text.FullWidthAutoHeightNonMargin>
                This page does not have any videos.
            </GlobalStyled.Text.FullWidthAutoHeightNonMargin>
        </GlobalStyled.Box.CenterBoxByColNonSpaced>
    );
};

export default NullVideo;