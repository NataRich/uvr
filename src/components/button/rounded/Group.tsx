import React from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import RoundedButton from './RoundedButton';

import {
    IGroupButtonAttributes,
    IRoundedButtonAttributes,
} from './interface';

const ButtonGroup: React.FC<IGroupButtonAttributes> = ({
    category,
    attributes,
    onClickHandler,
}) => {
    return (
        <GlobalStyled.Box.CenterStartBoxByRow>
            {
                category === undefined ? null:(
                    <GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                        {category}:
                    </GlobalStyled.Text.AutoWidthFullHeightNonMargin>
                )
            }
            {
                attributes.map(attr => {
                    const props: IRoundedButtonAttributes = {
                        style: {
                            width:              attr.style.width,
                            height:             attr.style.height,
                            borderColor:        attr.style.borderColor,
                            borderWidth:        attr.style.borderWidth,
                            backgroundColor:    attr.style.backgroundColor,
                            loadingBorderColor: attr.style.loadingBorderColor,
                            fontColor:          attr.style.fontColor,
                            fontSize:           attr.style.fontSize,
                            invertColorH:       attr.style.invertColorH,
                            borderRadius:       attr.style.borderRadius,
                        },
                        props: {
                            defaultValue:       attr.props.defaultValue,
                            disabled:           attr.props.disabled,
                            isLoading:          attr.props.isLoading,
                        },
                        onClickHandler,  
                    };
                    return <RoundedButton {...props} />
                })
            }
        </GlobalStyled.Box.CenterStartBoxByRow>
    );
};

export default ButtonGroup;