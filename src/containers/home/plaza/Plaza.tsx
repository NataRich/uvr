import React, { useState, useEffect } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import { IPreRoundedButtonAttributes } from '../../../global/utils/Style';
import Button from '../../../components/button/rounded/RoundedButton';
import VCard from '../videoCard/Card';
import VCardLoader from '../videoCard/CardLoader';
import NullVideo from '../videoCard/NullVideo';
import { IPlazaProps } from './interface';
import {
    defaultNextPageButtonAttributes,
    defaultPrevPageButtonAttributes,
    defaultCardLoaderArray,
} from './Logistics';
import { StyledDiv } from './Plaza.style';

const Plaza: React.FC<IPlazaProps> = ({
    isFetchingVideos,
    page,
    maxPage,
    setPage,
    videos,
}) => {
    const [ nextBtnAttri, setNextBtnAttri ] = useState<IPreRoundedButtonAttributes>(defaultNextPageButtonAttributes);
    const [ prevBtnAttri, setPrevBtnAttri ] = useState<IPreRoundedButtonAttributes>(defaultPrevPageButtonAttributes);

    useEffect(() => {
        if (page > 1 && page < maxPage ) {
            setPrevBtnAttri(prevState => { return {...prevState, props: {...prevState.props, disabled: false}} });
            setNextBtnAttri(prevState => { return {...prevState, props: {...prevState.props, disabled: false}} });
        } else {
            setPrevBtnAttri(prevState => { return {...prevState, props: {...prevState.props, disabled: true}} });
            setNextBtnAttri(prevState => { return {...prevState, props: {...prevState.props, disabled: true}} });
        }
    }, [page, maxPage])

    const onClickPrevPageHandler = () => setPage(prevState => prevState > 1 ? prevState - 1:prevState);
    const onClickNextPageHandler = () => setPage(prevState => prevState < maxPage ? prevState + 1:prevState);

    const onChangeSetPageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string   = e.currentTarget.value;
        let number: number  = parseInt(value, 10);
        if (!isNaN(number) && number <= maxPage)
            setPage(number);
        setPage(page);
    };

    return (
        <>
            <StyledDiv>
                <Button {...{style: prevBtnAttri.style,
                            props: prevBtnAttri.props,
                            onClickHandler: onClickPrevPageHandler}} />
                &nbsp;
                &nbsp;
                &nbsp;
                <input type='text'
                    disabled
                    value={`${page}/${maxPage}`} />
                &nbsp;
                &nbsp;
                &nbsp;
                <input type='text'
                    onChange={onChangeSetPageHandler}
                    value={page} />
                &nbsp;
                &nbsp;
                &nbsp;
                <Button {...{style: nextBtnAttri.style,
                            props: nextBtnAttri.props,
                            onClickHandler: onClickNextPageHandler}} />
            </StyledDiv>
            <GlobalStyled.Box.CenterBoxByRowNonSpaced style={{ flexWrap: 'wrap' }}>
                {
                    isFetchingVideos ? 
                    defaultCardLoaderArray.map(e => <VCardLoader key={e.id} />):
                    videos && videos.length !==0 ? videos.map(video => <VCard key={video.getId()} {...{props: {video}}} />):
                    <NullVideo />
                }
            </GlobalStyled.Box.CenterBoxByRowNonSpaced>
        </>
    );
};

export default Plaza;