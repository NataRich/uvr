import React from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import BaseButton from './BaseButton';

import {
    IEllipticalButtonAttributes,
    IGroupButtonAttributes
} from './interface';

const ButtonGroup: React.FC<IGroupButtonAttributes> = ({
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
                    const props: IEllipticalButtonAttributes = {
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