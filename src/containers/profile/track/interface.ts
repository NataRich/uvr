import { UserClassType } from '../../../global/user/class';
import { VideoClassType } from '../../../global/videos/class';

export interface TrackProps {
    isFetchingUser:         boolean;
    isFetchingVideos:       boolean;
    setIsFetchingVideos:    React.Dispatch<React.SetStateAction<boolean>>;
    user:                   UserClassType | null;
    videos:                 VideoClassType[] | null;
    setVideos:              React.Dispatch<React.SetStateAction<VideoClassType[] | null>>;
};