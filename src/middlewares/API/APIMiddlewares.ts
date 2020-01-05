import { StatusInterface } from '../../global/user/interface';
import { UserClassType } from '../../global/user/class';
import {
    NumOfVideoInterface,
    VideoAPIComplexPromiseReturn,
} from '../../global/videos/interface';

class APIMiddlewares {
    getStatus = async (promise: Promise<StatusInterface>): Promise<StatusInterface> => {
        const status: number = (await promise).status;
        if (!status || status === 4444)
            throw new Error('Server Error');
        else if (status === 3008)
            throw new Error('Interface Error');
        else
            return { status }
    };

    getUser = async (promise: Promise<UserClassType | null>): Promise<UserClassType | null> => await promise;

    getVideos = async (promise: Promise<VideoAPIComplexPromiseReturn>): Promise<VideoAPIComplexPromiseReturn> => {
        let obj: VideoAPIComplexPromiseReturn = await promise;
        if (!obj.status || obj.status === 4444)
            throw new Error('Server Error');
        else if (obj.status === 3008)
            throw new Error('Interface Error');
        else
            return { videos: obj.videos, status: obj.status };
    };

    getNumOfVideos = async (promise: Promise<NumOfVideoInterface & StatusInterface>): Promise<NumOfVideoInterface> => {
        let obj: NumOfVideoInterface & StatusInterface = await promise;
        if (!obj.status || obj.status === 4444)
            throw new Error('Server Error');
        else
            return {num: obj.num};
    };
};

export const Middleware = new APIMiddlewares();