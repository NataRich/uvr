import { IVideoFilterSelfArg } from '../../../global/videos/interface';

const defaultVideoArgPayload: IVideoFilterSelfArg = {
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