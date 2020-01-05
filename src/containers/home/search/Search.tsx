import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import { VGAPI } from '../../../global/videos/request';
import { VideoFilterArgInterface } from '../../../global/videos/interface';
import {
    IPreIconInFrontInputAttributes,
    IPreEllipticalButtonAttributes,
    IPreRoundedButtonAttributes,
} from '../../../global/utils/Style';
import { Middleware } from '../../../middlewares/API/APIMiddlewares';
import Input from '../../../components/input/iconInFront/Input';
import ButtonGroup from '../../../components/button/elliptical/Group';
import Button from '../../../components/button/rounded/RoundedButton';
import Filter from '../../../assets/icons/filter.svg';
import { ISearchProps } from './interface';
import {
    defaultInputAttributes,
    defaultSortButtonGroupAttributes,
    defaultOrderButtonGroupAttributes,
    defaultFindButtonAttributes,
} from './Logistics';
import {
    StyledFilterIconContainer,
    StyledFilterOptionContainer,
} from './Search.style';

const Search: React.FC<ISearchProps> = ({
    setIsFetchingVideos,
    setVideos,
    page,
}) => {
    const [ inputAttri, setInputAttri ]                 = useState<IPreIconInFrontInputAttributes>(defaultInputAttributes);
    const [ sortBtnGroupAttri, setSortBtnGroupAttri ]   = useState<IPreEllipticalButtonAttributes[]>(defaultSortButtonGroupAttributes);
    const [ orderBtnGroupAttri, setOrderBtnGroupAttri ] = useState<IPreEllipticalButtonAttributes[]>(defaultOrderButtonGroupAttributes);
    const [ openFilter, setOpenFilter ]                 = useState<boolean>(false);
    const [ findBtnAttri, setFindBtnAtri ]              = useState<IPreRoundedButtonAttributes>(defaultFindButtonAttributes);

    const onClickFilterHandler = () => setOpenFilter(!openFilter);
    const onChangeSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputAttri({...inputAttri, props: {...inputAttri.props, value: e.currentTarget.value}});

    const onClickSortBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id: string = e.currentTarget.id;          // prevent segmentFault
        setSortBtnGroupAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === id)
                return {...prevProp, props: {...prevProp.props, isSelected: true}};
            return {...prevProp, props: {...prevProp.props, isSelected: false}};
        }));
    };

    const onClickOrderBtnHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id: string = e.currentTarget.id;          // prevent segmentFault
        setOrderBtnGroupAttri(prevProps => prevProps.map(prevProp => {
            if (prevProp.props.defaultId === id)
                return {...prevProp, props: {...prevProp.props, isSelected: true}};
            return {...prevProp, props: {...prevProp.props, isSelected: false}};
        }));
    };

    const onClickFindBtnHandler = async () => {
        setIsFetchingVideos(true);
        setFindBtnAtri({...findBtnAttri, props: {...findBtnAttri.props, isLoading: true}});
        const videoAbortController: AbortController = new AbortController();
        const order: boolean    = orderBtnGroupAttri.filter(object => object.props.isSelected === true).map(object => object.props.defaultValue)[0] === 'ASC' ? true:false;
        const sort_by: string   = sortBtnGroupAttri.filter(object => object.props.isSelected === true).map(object => object.props.defaultValue)[0];
        const title: string     = inputAttri.props.value;
        const tags: string[]    = [];       // currently unusable hence empty
        const payload: VideoFilterArgInterface = { order, page, sort_by, tags, title };
        setVideos((await Middleware.getVideos(VGAPI.postFilterArgs(payload, videoAbortController.signal))).videos);
        videoAbortController.abort();
        setFindBtnAtri({...findBtnAttri, props: {...findBtnAttri.props, isLoading: false}});
        setIsFetchingVideos(false);
    };

    return (
        <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ height: 'auto' }}>
            <StyledFilterIconContainer {...{imgWidth: inputAttri.style.imgWidth}}
                onClick={onClickFilterHandler}>
                <img src={Filter} alt='' />
            </StyledFilterIconContainer>
            &nbsp;
            <StyledFilterOptionContainer style={{ visibility: openFilter ? 'visible':'hidden' }}>
                <ButtonGroup {...{category: 'Sort',
                                attributes: sortBtnGroupAttri,
                                onClickHandler: onClickSortBtnHandler}} />
                <hr style={{ margin: '3px 0 3px 0', width: '95%' }} />
                <ButtonGroup {...{category: 'Order',
                                attributes: orderBtnGroupAttri,
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