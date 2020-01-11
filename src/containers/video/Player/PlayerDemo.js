import React from 'react';
import VrPlayer from './player/VrPlayer';

const PlayerDemo = ({
    fileDirectory
}) => {
    const sources = [
        { url: fileDirectory, type: 'video/mp4' }
    ];

    return (
        <div>
            <VrPlayer sources={sources} brand="React VR Player5" title="Example Video" />
        </div>
    );
}

export default PlayerDemo;