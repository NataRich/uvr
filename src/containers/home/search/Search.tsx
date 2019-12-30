import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import { VideoGeneralAPI } from '../../../global/videos/request';
import { VideoFilterArgInterface } from '../../../global/videos/interface';
import { APIMiddlewares } from '../../../middlewares/API/APIMiddlewares';
import Input from '../../../components/input/iconInFront/Input';
import GroupButton from '../../../components/button/elliptical/Group';
import Button from '../../../components/button/rounded/RoundedButton';
import Filter from '../../../assets/icons/filter.svg';
import {
    SearchProps,
    LocalInputAttributes,
    LocalEButtonAttributes,
    LocalRButtonAttributes,
} from './Logistics';
import {
    defaultInputAttributes,
    defaultSortGroupButtonAttributes,
    defaultOrderGroupButtonAttributes,
    defaultFindButtonAttributes,
} from './Logistics';
import {
    StyledFilterIconContainer,
    StyledFilterOptionContainer,
} from './Search.style';

const API           = new VideoGeneralAPI();
const Middleware    = new APIMiddlewares();

const Search: React.FC<SearchProps> = ({
    setVideos,
    page,
}) => {
    const [ inputAttri, setInputAttri ]                 = useState<LocalInputAttributes>(defaultInputAttributes);
    const [ sortGroupBtnAttri, setSortGroupBtnAttri ]   = useState<LocalEButtonAttributes[]>(defaultSortGroupButtonAttributes);
    const [ orderGroupBtnAttri, setOrderGroupBtnAttri ] = useState<LocalEButtonAttributes[]>(defaultOrderGroupButtonAttributes);
    const [ openFilter, setOpenFilter ]                 = useState<boolean>(false);
    const [ findBtnAttri, setFindBtnAtri ]              = useState<LocalRButtonAttributes>(defaultFindButtonAttributes);

    const onClickFilterHandler = () => setOpenFilter(!openFilter);
    const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputAttri({...inputAttri, props: {...inputAttri.props, value: e.currentTarget.value}});

    const onClickSortBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setSortGroupBtnAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === e.currentTarget.id)
                return {...prevProp, props: {...prevProp.props, isSelected: true}};
            return {...prevProp, props: {...prevProp.props, isSelected: false}};
        }));
    };

    const onClickOrderBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setOrderGroupBtnAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === e.currentTarget.id)
                return {...prevProp, props: {...prevProp.props, isSelected: true}};
            return {...prevProp, props: {...prevProp.props, isSelected: false}};
        }));
    };

    const onClickFindBtnHandler = async () => {
        setFindBtnAtri({...findBtnAttri, props: {...findBtnAttri.props, isLoading: true}});
        const order: string     = orderGroupBtnAttri.filter(object => object.props.isSelected === true).map(object => object.props.defaultValue)[0];
        const sort_by: string   = sortGroupBtnAttri.filter(object => object.props.isSelected === true).map(object => object.props.defaultValue)[0];
        const title: string     = inputAttri.props.value;
        const tags: string[]    = [];       // currently unusable hence empty
        const payload: VideoFilterArgInterface = { order, page, sort_by, tags, title };
        setVideos((await Middleware.getVideos(API.postFilterArgs(payload))).videos);
        setFindBtnAtri({...findBtnAttri, props: {...findBtnAttri.props, isLoading: false}});
    };

    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ height: 'auto' }}>
            <StyledFilterIconContainer {...{imgWidth: inputAttri.style.imgWidth}}
                onClick={onClickFilterHandler}>
                <img src={Filter} alt='' />
            </StyledFilterIconContainer>
            &nbsp;
            <StyledFilterOptionContainer style={{ visibility: openFilter ? 'visible':'hidden' }}>
                <GroupButton {...{category: 'Sort',
                                attributes: sortGroupBtnAttri,
                                onClickHandler: onClickSortBtnHandler}} />
                <hr style={{ margin: '3px 0 3px 0', width: '95%' }} />
                <GroupButton {...{category: 'Order',
                                attributes: orderGroupBtnAttri,
                                onClickHandler: onClickOrderBtnHandler}} />
            </StyledFilterOptionContainer>
            <Input {...{style: inputAttri.style,
                        props: inputAttri.props,
                        onChangeHandler: onChangeSearchHandler}} />
            &nbsp;
            <Button {...{style: findBtnAttri.style,
                        props: findBtnAttri.props,
                        onClickHandler: onClickFindBtnHandler}}/>
        </GlobalStyled.Box.CenterBoxByRowNonSpaced>
    );
};

export default Search;