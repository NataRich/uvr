import { DOMAIN } from '../root/Root';
import { Video, VideoClassType } from './class';
import { APIVideoParamInterface } from './interface';
import { VideoAPIComplexPromiseReturn } from './interface';
import {
    MultiVideoInterface,
    OneVideoInterface,
    StatusInterface,
    TrackIdInterface,
    VideoInterface,
    VideoIdInterface,
    VideoInfoArgInterface,
    VideoFilterArgInterface,
    VideoFilterSelfArgInterface,
    VideoStatsArgInterface,
} from './interface';
import {
    APIGeneralGetMethods,
    APIGeneralPostMethods,
} from './interface';
import {
    APILoginRequiredGetMethods,
    APILoginRequiredPostMethods,
} from './interface';


class VideoAPI {
    protected readonly VIDEOS_ENDPOINT                  = 'videos';
    protected readonly VIDEOS_FETCH_ENDPOINT            = 'videos/fetch';
    protected readonly VIDEOS_TRACKID_ENDPOINT          = 'videos/track_id';
    protected readonly VIDEOS_SELF_ALL_ENDPOINT         = 'videos/self_all';
    protected readonly VIDEOS_UPLOAD_FILE_ENDPOINT      = 'videos/upload_file';
    protected readonly VIDEOS_UPLOAD_INFO_ENDPOINT      = 'video/upload_info';
    protected readonly VIDEOS_DELETE_FILE_ENDPOINT      = 'videos/delete_file';
    protected readonly VIDEOS_UPDATE_STATS_ENDPOINT     = 'videos/update_stats';

    protected useGet = async (url: string): Promise<StatusInterface> => {
        const response: Response = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url
            },
        });
        return await response.json();
    };

    protected useGetArg = async (url: string, payload: any): Promise<OneVideoInterface> => {
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

    protected usePost = async (url: string, payload: any): Promise<StatusInterface> => {
        const response: Response = await fetch(url, {
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

    protected usePostFormData = async (url: string, payload: FormData): Promise<StatusInterface> => {
        const response: Response = await fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url,
                'Content-Type': 'multipart/form-data',
            },
            body: payload
        });
        return await response.json();
    };

    protected usePostMulti = async (url: string, payload: any, abortSignal: AbortSignal): Promise<MultiVideoInterface & StatusInterface> => {
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




export class VideoGeneralAPI extends VideoAPI implements APIGeneralGetMethods, APIGeneralPostMethods {
    public getTrackId = async (payload: TrackIdInterface): Promise<VideoClassType | null> => {
        const URL: string = DOMAIN + this.VIDEOS_FETCH_ENDPOINT;
        const response: OneVideoInterface = await this.useGetArg(URL, payload);
        if (!response.video)
            return null;
        const video: APIVideoParamInterface = {
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

    public postFilterArgs = async (payload: VideoFilterArgInterface, abortSignal: AbortSignal): Promise<VideoAPIComplexPromiseReturn> => {
        const URL: string = DOMAIN + this.VIDEOS_ENDPOINT;
        const response: MultiVideoInterface & StatusInterface = await this.usePostMulti(URL, payload, abortSignal);
        if (!response.videos)
            return { videos: null, status: response.status };
        const videoClasses: VideoClassType[] = [];
        response.videos.forEach(video => {
            let item: APIVideoParamInterface = {
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
    public postVideoStats = async (payload: VideoStatsArgInterface): Promise<StatusInterface> => {
        const URL: string = DOMAIN + this.VIDEOS_UPDATE_STATS_ENDPOINT;
        return await this.usePost(URL, payload);
    };
};




export class VideoLoginRequiredAPI extends VideoAPI implements APILoginRequiredGetMethods, APILoginRequiredPostMethods {
    public get = async (): Promise<StatusInterface> => {
        const URL: string = DOMAIN + this.VIDEOS_UPLOAD_FILE_ENDPOINT;
        return await this.useGet(URL);
    };

    public postTrackId = async (payload: TrackIdInterface): Promise<StatusInterface> => {
        const URL: string = DOMAIN + this.VIDEOS_TRACKID_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postVideoId = async (payload: VideoIdInterface): Promise<StatusInterface> => {
        const URL: string = DOMAIN + this.VIDEOS_DELETE_FILE_ENDPOINT;
        return await this.usePost(URL, payload);
    }
    public postVideoFile = async (payload: VideoInterface): Promise<StatusInterface> => {
        const URL: string = DOMAIN + this.VIDEOS_UPLOAD_FILE_ENDPOINT;
        return await this.usePostFormData(URL, payload.video);
    };
    public postVideoArgs = async (payload: VideoInfoArgInterface): Promise<StatusInterface> => {
        const URL: string = DOMAIN + this.VIDEOS_UPLOAD_INFO_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postFilterSelfArgs = async (payload: VideoFilterSelfArgInterface, abortSignal: AbortSignal): Promise<VideoAPIComplexPromiseReturn> => {
        const URL: string = DOMAIN + this.VIDEOS_SELF_ALL_ENDPOINT;
        const response: MultiVideoInterface & StatusInterface = await this.usePostMulti(URL, payload, abortSignal);
        if (!response.videos)
            return { videos: null, status: response.status };
        const videoClasses: VideoClassType[] = [];
        response.videos.forEach(video => {
            let item: APIVideoParamInterface = {
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