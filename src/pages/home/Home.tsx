import React, { useState } from 'react';

import { StyledTallContainer } from './Home.style';
import { GlobalStyled } from '../../global/style/Style.style';
import Navigation from '../../containers/home/navigation/Navigation';

const Home: React.FC = () => {
    const [ isAboutClicked, setIsAboutClicked ] = useState<boolean>(false);

    const onClickAbout = () => setIsAboutClicked(prev => !prev);

    return (
        <StyledTallContainer>
            <GlobalStyled.Box.CenterBoxByRowXSpaced style={{ width: '95%', height: 'auto', position: 'absolute', top: '0' }}>
                <Navigation />
            </GlobalStyled.Box.CenterBoxByRowXSpaced>
            <div className='p-home-about-btn_fixed'>
                <button onClick={onClickAbout}
                    style={{
                        transform: isAboutClicked ? 'rotate(180deg)':'rotate(0deg)',
                        fontSize: isAboutClicked ? '30px':'16px',
                    }}>
                    {isAboutClicked ? 'X':'About'}
                </button>
            </div>
            <div className='p-home-about-card_fixed'
                style={{ visibility: isAboutClicked ? 'visible': 'hidden' }}>
                {/* about card to introduce team member */}
            </div>
            <div className='p-home-search'>
                {/* selection plane */}
                
            </div>
            <div className='p-home-result'>
                {/* video plaza */}
            </div>
            <div className='p-home-footer'>
                <p>®2019 UWC (CSC) Virtual Reality</p>
            </div>
        </StyledTallContainer>
    );
};

export default Home;

