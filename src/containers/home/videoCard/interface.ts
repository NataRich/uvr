import { VideoClassType } from '../../../global/videos/class';

export interface IVideoCardAttributes {
    props: IVideoCardProps;
};

export interface IVideoCardProps {
    video:      VideoClassType;
    hasDel?:    boolean;
};