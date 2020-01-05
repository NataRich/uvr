import { VideoClassType } from '../../../global/videos/class';

export interface ISearchProps {
    page:                number;
    setVideos:           React.Dispatch<React.SetStateAction<VideoClassType[] | null>>;
    setIsFetchingVideos: React.Dispatch<React.SetStateAction<boolean>>;
};