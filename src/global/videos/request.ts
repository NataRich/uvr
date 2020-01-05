import { DOMAIN } from '../root/Root';
import { Video, VideoClassType } from './class';
import { IAPIVideoParam } from './interface';
import { IVideoAPIAggregateType } from './interface';
import {
    IMultiVideo,
    INumOfVideo,
    IOneVideo,
    IStatus,
    ITrackId,
    IVideo,
    IVideoId,
    IVideoInfoArg,
    IVideoFilterArg,
    IVideoFilterSelfArg,
    IVideoStatsArg,
} from './interface';
import {
    IAPIGeneralGetMethods,
    IAPIGeneralPostMethods,
} from './interface';
import {
    IAPILoginRequiredGetMethods,
    IAPILoginRequiredPostMethods,
} from './interface';

class VideoAPI {
    protected readonly VIDEOS_ENDPOINT                  = 'videos';
    protected readonly VIDEOS_NUM_ENDPIONT              = 'videos/info';
    protected readonly VIDEOS_FETCH_ENDPOINT            = 'videos/fetch';
    protected readonly VIDEOS_TRACKID_ENDPOINT          = 'videos/track_id';
    protected readonly VIDEOS_SELF_ALL_ENDPOINT         = 'videos/self_all';
    protected readonly VIDEOS_UPLOAD_FILE_ENDPOINT      = 'videos/upload_file';
    protected readonly VIDEOS_UPLOAD_INFO_ENDPOINT      = 'videos/upload_info';
    protected readonly VIDEOS_DELETE_FILE_ENDPOINT      = 'videos/delete_file';
    protected readonly VIDEOS_UPDATE_STATS_ENDPOINT     = 'videos/update_stats';

    protected useGet = async (url: string): Promise<IStatus> => {
        const response: Response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url
            },
        });
        return await response.json();
    };

    protected useGetNum = async (url: string, abortSignal: AbortSignal): Promise<INumOfVideo & IStatus> => {
        const response: Response = await fetch(url, {
            signal: abortSignal,
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url,
            },
        });
        return await response.json();
    };

    protected useGetArg = async (url: string, payload: any): Promise<IOneVideo> => {
        let argsArray: string[] = [];
        Object.keys(payload).forEach(key => argsArray.push(key + '=' + payload[key]));
        const URL: string = url + '?' + argsArray.join('&');
        const response: Response = await fetch(URL, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url,
            },
        });
        return await response.json();
    };

    protected usePost = async (url: string, payload: any, abortSignal: AbortSignal): Promise<IStatus> => {
        const response: Response = await fetch(url, {
            signal: abortSignal,
            method: 'POST',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return await response.json();
    };

    protected usePostFormData = async (url: string, payload: FormData, abortSignal: AbortSignal): Promise<IStatus> => {
        const response: Response = await fetch(url, {
            signal: abortSignal,
            method: 'POST',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url,
            },
            body: payload
        });
        return await response.json();
    };

    protected usePostMulti = async (url: string, payload: any, abortSignal: AbortSignal): Promise<IMultiVideo & IStatus> => {
        const response: Response = await fetch(url, {
            signal: abortSignal,
            method: 'POST',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return await response.json();
    };
};

class VideoGeneralAPI extends VideoAPI implements IAPIGeneralGetMethods, IAPIGeneralPostMethods {
    public getTrackId = async (payload: ITrackId): Promise<VideoClassType | null> => {
        const URL: string = DOMAIN + this.VIDEOS_FETCH_ENDPOINT;
        const response: IOneVideo = await this.useGetArg(URL, payload);
        if (!response.video)
            return null;
        const video: IAPIVideoParam = {
            author:         response.video.author,
            authorId:       response.video.userId,
            description:    response.video.description,
            directory:      response.video.dir,
            duration:       response.video.duration,
            height:         response.video.resH,
            hotness:        response.video.hotness,
            id:             response.video.id,
            likes:          response.video.likes,
            size:           response.video.size,
            title:          response.video.title,
            trackId:        response.video.trackId,
            uploadTime:     response.video.date,
            views:          response.video.views,
            width:          response.video.resW,
        };
        return new Video(video);
    };
    public getNumOfVideos = async (abortSignal: AbortSignal): Promise<INumOfVideo & IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_NUM_ENDPIONT;
        const response: INumOfVideo & IStatus = await this.useGetNum(URL, abortSignal);
        if (response.num === undefined)
            return {status: 4444, num: 0};
        return {status: response.status, num: response.num};
    };

    public postFilterArgs = async (payload: IVideoFilterArg, abortSignal: AbortSignal): Promise<IVideoAPIAggregateType> => {
        const URL: string = DOMAIN + this.VIDEOS_ENDPOINT;
        const response: IMultiVideo & IStatus = await this.usePostMulti(URL, payload, abortSignal);
        if (!response.videos)
            return { videos: null, status: response.status };
        const videoClasses: VideoClassType[] = [];
        response.videos.forEach(video => {
            let item: IAPIVideoParam = {
                author:         video.author,
                authorId:       video.userId,
                description:    video.description,
                directory:      video.dir,
                duration:       video.duration,
                height:         video.resH,
                hotness:        video.hotness,
                id:             video.id,
                likes:          video.likes,
                size:           video.size,
                title:          video.title,
                trackId:        video.trackId,
                uploadTime:     video.date,
                views:          video.views,
                width:          video.resW,
            };
            videoClasses.push(new Video(item));
        });
        return {videos: videoClasses, status: response.status};
    };
    public postVideoStats = async (payload: IVideoStatsArg, abortSignal: AbortSignal): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_UPDATE_STATS_ENDPOINT;
        return await this.usePost(URL, payload, abortSignal);
    };
};

class VideoLoginRequiredAPI extends VideoAPI implements IAPILoginRequiredGetMethods, IAPILoginRequiredPostMethods {
    public get = async (): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_UPLOAD_FILE_ENDPOINT;
        return await this.useGet(URL);
    };

    public postTrackId = async (payload: ITrackId, abortSignal: AbortSignal): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_TRACKID_ENDPOINT;
        return await this.usePost(URL, payload, abortSignal);
    };
    public postVideoId = async (payload: IVideoId, abortSignal: AbortSignal): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_DELETE_FILE_ENDPOINT;
        return await this.usePost(URL, payload, abortSignal);
    }
    public postVideoFile = async (payload: IVideo, abortSignal: AbortSignal): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_UPLOAD_FILE_ENDPOINT;
        return await this.usePostFormData(URL, payload.video, abortSignal);
    };
    public postVideoArgs = async (payload: IVideoInfoArg, abortSignal: AbortSignal): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VIDEOS_UPLOAD_INFO_ENDPOINT;
        return await this.usePost(URL, payload, abortSignal);
    };
    public postFilterSelfArgs = async (payload: IVideoFilterSelfArg, abortSignal: AbortSignal): Promise<IVideoAPIAggregateType> => {
        const URL: string = DOMAIN + this.VIDEOS_SELF_ALL_ENDPOINT;
        const response: IMultiVideo & IStatus = await this.usePostMulti(URL, payload, abortSignal);
        if (!response.videos)
            return { videos: null, status: response.status };
        const videoClasses: VideoClassType[] = [];
        response.videos.forEach(video => {
            let item: IAPIVideoParam = {
                author:         video.author,
                authorId:       video.userId,
                description:    video.description,
                directory:      video.dir,
                duration:       video.duration,
                height:         video.resH,
                hotness:        video.hotness,
                id:             video.id,
                likes:          video.likes,
                size:           video.size,
                title:          video.title,
                trackId:        video.trackId,
                uploadTime:     video.date,
                views:          video.views,
                width:          video.resW,
            };
            videoClasses.push(new Video(item));
        });
        return { videos: videoClasses, status: response.status };
    };
};

export const VGAPI = new VideoGeneralAPI();
export const VRAPI = new VideoLoginRequiredAPI();