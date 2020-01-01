import React, { useState } from 'react';

import { GlobalStyled } from '../../../global/style/Style.style';
import Button from '../../../components/button/rounded/RoundedButton';
import VCard from '../videoCard/Card';
import VCardLoader from '../videoCard/CardLoader';
import NullVideo from '../videoCard/NullVideo';
import {
    PlazaProps,
    LocalButtonAttributes,
} from './Logistics';
import {
    defaultNextPageButtonAttributes,
    defaultPrevPageButtonAttributes,
    defaultCardLoaderArray,
} from './Logistics';
import { StyledDiv } from './Plaza.style';

const Plaza: React.FC<PlazaProps> = ({
    isFetchingVideos,
    page,
    setPage,
    videos,
}) => {
    const [ nextBtnAttri, setNextBtnAttri ] = useState<LocalButtonAttributes>(defaultNextPageButtonAttributes);
    const [ prevBtnAttri, setPrevBtnAttri ] = useState<LocalButtonAttributes>(defaultPrevPageButtonAttributes);
    const [ innerWidth, setInnerWidth ]     = useState<number>(window.innerWidth);

    window.onresize = () => setInnerWidth(window.innerWidth);

    const onClickPrevPageHandler = () => {
        setPage(prevState => {
            if (prevState > 1) {
                setPrevBtnAttri({...prevBtnAttri, props: {...prevBtnAttri.props, disabled: false}});
                return prevState - 1;
            } else {
                setPrevBtnAttri({...prevBtnAttri, props: {...prevBtnAttri.props, disabled: true}});
                return prevState;
            };
        });
    };

    const onClickNextPageHandler = () => {
        setPage(prevState => {          // need upper boundary
            if (!videos) {
                setNextBtnAttri({...nextBtnAttri, props: {...nextBtnAttri.props, disabled: true}});
                return prevState;
            } else {
                setNextBtnAttri({...nextBtnAttri, props: {...nextBtnAttri.props, disabled: false}});
                return prevState + 1;
            };
        });
    };

    const onChangeSetPageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value: string   = e.currentTarget.value;        // need upper boundary
        let number: number  = parseInt(value, 10);
        if (!isNaN(number))
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
                    value={page} />
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
            <GlobalStyled.Box.CenterBoxByRowSpaced style={{ flexWrap: 'wrap', alignItems: 'flex-start' }}>
                {
                    isFetchingVideos ? 
                    defaultCardLoaderArray.map(e => <VCardLoader key={e.id} {...{innerWidth}} />):
                    videos ? videos.map(video => <VCard key={video.getId()} {...{style: {innerWidth}, props: {video}}} />):
                    <NullVideo />
                }
            </GlobalStyled.Box.CenterBoxByRowSpaced>
        </>
    );
};

export default Plaza;