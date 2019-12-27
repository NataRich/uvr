import { StatusInterface } from '../../global/user/interface';
import { UserClassType } from '../../global/user/class';
import { VideoAPIComplexPromiseReturn } from '../../global/videos/interface';

export class APIMiddlewares {
    getStatus = async (promise: Promise<StatusInterface>): Promise<StatusInterface> => {
        const status: number = (await promise).status;
        if (!status || status === 4444)
            throw 'Server Error';
        else
            return { status }
    };

    getUser = async (promise: Promise<UserClassType | null>): Promise<UserClassType | null> => await promise;

    getVideos = async (promise: Promise<VideoAPIComplexPromiseReturn>): Promise<VideoAPIComplexPromiseReturn> => {
        let obj: VideoAPIComplexPromiseReturn = await promise;
        if (!obj.status || obj.status === 4444)
            throw 'Server Error';
        else
            return { videos: obj.videos, status: obj.status };
    };
};