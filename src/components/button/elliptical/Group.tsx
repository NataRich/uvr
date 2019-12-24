import React from 'react';

import BaseButton from './BaseButton';
import { GlobalStyled } from '../../../global/style/Style.style';
import { ButtonAttributes } from './interface';

type Partial = {
    backgroundColor:        string;
    defaultId?:             string;
    defaultValue:           string;
    fontColor:              string;
    isLoading?:             boolean;
    isSelected?:            boolean;
};

const ButtonGroup: React.FC<{attribute: Partial[], setAttribute: React.Dispatch<React.SetStateAction<Partial[]>>}> = ({
    attribute,
    setAttribute,
}) => {
    const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        let idOfElement: string = e.currentTarget.id;
        setAttribute((prevState: Partial[]) => prevState.map(element => {
            if (element.defaultId === idOfElement)
                return {...element, isSelected: true};
            return {...element, isSelected: false};
        }));
    };

    return (
        <GlobalStyled.CenterLeftBoxByRow>
            {
                attribute.map(btnAttr => {
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
        </GlobalStyled.CenterLeftBoxByRow>
    );
};

export default ButtonGroup;