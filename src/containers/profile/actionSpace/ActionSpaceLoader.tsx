import React from 'react';

import {
    StyledActionSpaceLoaderContainer,
} from './ActionSpace.style';

const ActionSpaceLoader: React.FC = () => {
    return (
        <StyledActionSpaceLoaderContainer>
            <div className='section'>
                <div className='area loader'>
                    <div className='highlight' />
                </div>
                <div className='area loader'>
                    <div className='highlight' />
                </div>
            </div>
            <div className='section'>
                <div className='input loader'>
                    <div className='highlight' />
                </div>
                <div className='input loader'>
                    <div className='highlight' />
                </div>
                <div className='input loader'>
                    <div className='highlight' />
                </div>
            </div>
            <div className='section'>
                <div className='area loader'>
                    <div className='highlight' />
                </div>
            </div>
        </StyledActionSpaceLoaderContainer>
    );
};

export default ActionSpaceLoader;