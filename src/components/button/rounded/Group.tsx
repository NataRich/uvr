import React from 'react';

import RoundedButton from './RoundedButton';
import { GlobalStyled } from '../../../global/style/Style.style';
import {
    GroupButtonAttributes,
    RoundedButtonAttributes,
} from './interface';

const ButtonGroup: React.FC<GroupButtonAttributes> = ({
    category,
    attributes,
    onClickHandler,
}) => {
    return (
        <GlobalStyled.Box.CenterLeftBoxByRow>
            {
                category === undefined ? null:(
                    <GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                        {category}:
                    </GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                )
            }
            {
                attributes.map(attr => {
                    const props: RoundedButtonAttributes = {
                        defaultValue: attr.defaultValue,
                        onClickHandler,
                        width: attr.width,
                        height: attr.height,
                        backgroundColor: attr.backgroundColor,
                        fontColor: attr.fontColor,
                        borderRadius: attr.borderRadius,
                    };
                    return <RoundedButton {...props} />
                })
            }
        </GlobalStyled.Box.CenterLeftBoxByRow>
    );
};

export default ButtonGroup;