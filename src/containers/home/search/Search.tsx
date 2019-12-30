import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import Input from '../../../components/input/iconInFront/Input';
import {
    LocalInputAttributes,
    LocalButtonAttributes,
} from './Logistics';
import {
    defaultInputAttributes,
    defaultSortGroupButtonAttributes,
    defaultOrderGroupButtonAttributes,
} from './Logistics';
import Filter from '../../../assets/icons/filter.svg';
import {
    StyledFilterIconContainer,
    StyledFilterOptionContainer,
} from './Search.style';
import GroupButton from '../../../components/button/elliptical/Group';

const Search: React.FC = () => {
    const [ inputAttri, setInputAttri ]                 = useState<LocalInputAttributes>(defaultInputAttributes);
    const [ sortGroupBtnAttri, setSortGroupBtnAttri ]   = useState<LocalButtonAttributes[]>(defaultSortGroupButtonAttributes);
    const [ orderGroupBtnAttri, setOrderGroupBtnAttri ] = useState<LocalButtonAttributes[]>(defaultOrderGroupButtonAttributes);

    const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = e.currentTarget.value;
        setInputAttri({...inputAttri, props: {...inputAttri.props, value}});
    };

    const onClickSortBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSortGroupBtnAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === e.currentTarget.id)
                return {...prevProp, props: {...prevProp.props, isSelected: true}};
            else
                return {...prevProp, props: {...prevProp.props, isSelected: false}};
        }));
    };

    const onClickOrderBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOrderGroupBtnAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === e.currentTarget.id)
                return {...prevProp, props: {...prevProp.props, isSelected: true}};
            else
                return {...prevProp, props: {...prevProp.props, isSelected: false}};
        }));
    };

    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ height: 'auto' }}>
            <StyledFilterIconContainer {...{imgWidth: inputAttri.style.imgWidth}}>
                <img src={Filter} alt='' />
            </StyledFilterIconContainer>
            <StyledFilterOptionContainer>
                <GroupButton {...{category: 'Sort',
                                attributes: sortGroupBtnAttri,
                                onClickHandler: onClickSortBtnHandler}} />
                <GroupButton {...{category: 'Order',
                                attributes: orderGroupBtnAttri,
                                onClickHandler: onClickOrderBtnHandler}}/>
            </StyledFilterOptionContainer>
            <Input {...{style: inputAttri.style,
                        props: inputAttri.props,
                        onChangeHandler: onChangeSearchHandler}} />
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Search;