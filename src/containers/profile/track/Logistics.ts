import { VideoLoginRequiredAPI } from '../../../global/videos/request';
import { VideoFilterSelfArgInterface } from '../../../global/videos/interface';
import { APIMiddlewares } from '../../../middlewares/API/APIMiddlewares';

export const VAPI       = new VideoLoginRequiredAPI();
export const Middleware = new APIMiddlewares();

const defaultVideoArgPayload: VideoFilterSelfArgInterface = {
    order: true,
    page: 1,
    sort_by: 'Date',
};

const defaultCardLoaderArray = [
    {
        id: '1',
    },
    {
        id: '2',
    },
    {
        id: '3',
    },
];

export {
    defaultVideoArgPayload,
    defaultCardLoaderArray,
};