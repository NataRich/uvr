import React from 'react';

import BaseButton from './BaseButton';
import { GlobalStyled } from '../../../global/style/Style.style';
import {
    ButtonAttributes,
    GroupButtonAttributes
} from './interface';

const ButtonGroup: React.FC<GroupButtonAttributes> = ({
    category,
    attributes,
    onClickHandler,
}) => {
    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced>
            {
                category === undefined ? null:(
                    <GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                        {category}:
                    </GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                )
            }
            {
                attributes.map(btnAttr => {
                    const props: ButtonAttributes = {
                        style:          btnAttr.style,
                        props:          btnAttr.props,
                        onClickHandler,
                    };
                    return <BaseButton key={btnAttr.props.defaultId} {...props} />
                })
            }
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default ButtonGroup;