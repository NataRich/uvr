import React from 'react';

import BaseButton from './BaseButton';
import { GlobalStyled } from '../../../global/style/Style.style';
import {
    ButtonAttributes,
    Partial,
    GroupButtonAttributes
} from './interface';

const ButtonGroup: React.FC<GroupButtonAttributes> = ({
    category,
    attributes,
    setAttributes,
}) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        let idOfElement: string = e.currentTarget.id;
        setAttributes((prevState: Partial[]) => prevState.map(element => {
            if (element.defaultId === idOfElement)
                return {...element, isSelected: true};
            return {...element, isSelected: false};
        }));
    };

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
                attributes.map(btnAttr => {
                    const props: ButtonAttributes = {
                        backgroundColor: btnAttr.backgroundColor,
                        defaultId: btnAttr.defaultId,
                        defaultValue: btnAttr.defaultValue,
                        fontColor: btnAttr.fontColor,
                        isSelected: btnAttr.isSelected,
                        onClickHandler,
                    };
                    return <BaseButton {...props} />
                })
            }
        </GlobalStyled.Box.CenterLeftBoxByRow>
    );
};

export default ButtonGroup;