import { VideoClassType } from '../../../global/videos/class';

export interface IPlazaProps {
    isFetchingVideos:   boolean;
    page:               number;
    maxPage:            number;
    setPage:            React.Dispatch<React.SetStateAction<number>>;
    videos:             VideoClassType[] | null;
};