import { VideoClassType } from '../../../global/videos/class';

export interface VideoCardAttributes {
    style: VideoCardStyle;
    props: VideoCardProps;
};

export interface VideoCardStyle {
    innerWidth: number;
};

export interface VideoCardProps {
    video: VideoClassType;
};