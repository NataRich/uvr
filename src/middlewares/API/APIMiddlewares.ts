import { IStatus } from '../../global/user/interface';
import { UserClassType } from '../../global/user/class';
import {
    INumOfVideo,
    IVideoAPIAggregateType,
} from '../../global/videos/interface';

class APIMiddlewares {
    getStatus = async (promise: Promise<IStatus>): Promise<IStatus> => {
        const status: number = (await promise).status;
        if (!status || status === 4444)
            throw new Error('Server Error');
        else if (status === 3008)
            throw new Error('Interface Error');
        else
            return { status }
    };

    getUser = async (promise: Promise<UserClassType | null>): Promise<UserClassType | null> => await promise;

    getVideos = async (promise: Promise<IVideoAPIAggregateType>): Promise<IVideoAPIAggregateType> => {
        let obj: IVideoAPIAggregateType = await promise;
        if (!obj.status || obj.status === 4444)
            throw new Error('Server Error');
        else if (obj.status === 3008)
            throw new Error('Interface Error');
        else
            return { videos: obj.videos, status: obj.status };
    };

    getNumOfVideos = async (promise: Promise<INumOfVideo & IStatus>): Promise<INumOfVideo> => {
        let obj: INumOfVideo & IStatus = await promise;
        if (!obj.status || obj.status === 4444)
            throw new Error('Server Error');
        else
            return {num: obj.num};
    };
};

export const Middleware = new APIMiddlewares();