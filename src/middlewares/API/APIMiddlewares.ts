import { StatusInterface } from '../../global/user/interface';
import { UserAPIComplexPromiseReturn } from '../../global/user/interface';
import { VideoAPIComplexPromiseReturn } from '../../global/videos/interface';

export class APIMiddlewares {
    getStatus = async (promise: Promise<StatusInterface>): Promise<StatusInterface> => {
        const status: number = (await promise).status;
        console.log('in middleware', status)
        if (!status || status === 4444)
            throw 'Server Error';
        else
            return { status }
    };

    getUser = async (promise: Promise<UserAPIComplexPromiseReturn>): Promise<UserAPIComplexPromiseReturn> => {
        let obj: UserAPIComplexPromiseReturn = await promise;
        if (!obj.status || obj.status === 4444)
            throw 'Server Error';
        else
            return { user: obj.user, status: obj.status };
    };

    getVideos = async (promise: Promise<VideoAPIComplexPromiseReturn>): Promise<VideoAPIComplexPromiseReturn> => {
        let obj: VideoAPIComplexPromiseReturn = await promise;
        if (!obj.status || obj.status === 4444)
            throw 'Server Error';
        else
            return { videos: obj.videos, status: obj.status };
    };
};