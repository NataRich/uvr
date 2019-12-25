import { StatusInterface } from '../../global/user/interface';
import { UserAPIComplexPromiseReturn } from '../../global/user/interface';
import { UserClassType } from '../../global/user/class';
import { VideoAPIComplexPromiseReturn } from '../../global/videos/interface';
import { VideoClassType } from '../../global/videos/class';

export class APIMiddlewares {
    getStatus = (promise: Promise<StatusInterface>): string => {
        var status: string | undefined = undefined;
        promise.then(res => status = res.status);
        if (!status || status === '4444')
            throw 'Server Error';
        else
            return status
    };

    getUser = (promise: Promise<UserAPIComplexPromiseReturn>): UserAPIComplexPromiseReturn => {
        var user: UserClassType | null = null;
        var status: string | undefined = undefined;
        promise.then(res => {user = res.user; status = res.status});
        if (!status || status === '4444')
            throw 'Server Error';
        else
            return { user, status };
    };

    getVideos = (promise: Promise<VideoAPIComplexPromiseReturn>): VideoAPIComplexPromiseReturn => {
        var videos: VideoClassType | VideoClassType[] | null = null;
        var status: string | undefined = undefined;
        promise.then(res => {videos = res.videos; status = res.status});
        if (!status || status === '4444')
            throw 'Server Error';
        else
            return { videos, status };
    };
};