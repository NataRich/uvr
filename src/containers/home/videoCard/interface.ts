import { VideoClassType } from '../../../global/videos/class';

export interface VideoCardAttributes {
    props: VideoCardProps;
};

export interface VideoCardProps {
    video: VideoClassType;
};