import { VideoClassType } from './class';

interface BaseVideoInterface {
    author:         string;
    description:    string;
    date:           string;
    dir:            string;
    duration:       string;
    hotness:        string;
    id:             string;
    likes:          string;
    resH:           string;
    resW:           string;
    size:           string;
    title:          string;
    trackId:        string;
    userId:         string;
    views:          string;
};

export interface MultiVideoInterface {
    videos: BaseVideoInterface[];
};

export interface NumOfVideoInterface {
    num: number;
};

export interface OneVideoInterface {
    video: BaseVideoInterface;
};

export interface StatusInterface {
    status: number;
};

export interface TrackIdInterface {
    track_id: string;
};

export interface TagInterface {
    vr:     0 | 1;
    event:  0 | 1;
    campus: 0 | 1;
};

export interface VideoInterface {
    video: FormData;
};

export interface VideoIdInterface {
    video_id: string;
};

export interface VideoFilterArgInterface {
    order:      boolean;
    page:       number;
    sort_by:    string;
    tags:       string[];
    title:      string;
};

export interface VideoFilterSelfArgInterface {
    order:      boolean;
    page:       number;
    sort_by:    string;
};

export interface VideoInfoArgInterface {
    description:    string;
    title:          string;
    tags:           TagInterface;  
};

export interface VideoStatsArgInterface {
    video_id:   string;
    likes:      number;
    views:      number;
};

export interface APIVideoParamInterface {
    /**
     * The parameters are all of string type as a result of having JSON format
     * <getType<originalType>> -> <targetType>
     * 
     * @param author        the author of the video                         ||| <string<string>> -> <string>
     * @param authorId      the id of the author of the video               ||| <string<string>> -> <string>
     * @param description   the description of the vidoe                    ||| <string<string>> -> <string>
     * @param directionry   the directionry in which the video is stored    ||| <string<string>> -> <string>
     * @param duration      the time in seconds of the video                ||| <string<number>> -> <string>
     * @param height        the height in pixels of the video               ||| <string<number>> -> <number>
     * @param hotness       the hotness of the video                        ||| <string<number>> -> <number> [unusable 2019/12/18 - ?]
     * @param id            the id of the video                             ||| <string<number>> -> <string>
     * @param likes         the number of likes of the video                ||| <string<number>> -> <number> [unusable 2019/12/18 - ?]
     * @param size          the size of the video in bytes                  ||| <string<number>> -> <number>
     * @param title         the title of the vidoe                          ||| <string<string>> -> <string>
     * @param trackId       the track id of the video                       ||| <string<string>> -> <string>
     * @param uploadTime    the date the video is uploaded                  ||| <string<string>> -> <string>
     * @param views         the number of views of the video                ||| <string<number>> -> <number> [unusable 2019/12/18 - ?]
     * @param width         the width in pixels of the video                ||| <string<number>> -> <number>
     * 
     */
    author:         string;
    authorId:       string;
    description:    string;
    directory:      string;
    duration:       string;
    height:         string;
    hotness:        string;
    id:             string;
    likes:          string;
    size:           string;
    title:          string;
    trackId:        string;
    uploadTime:     string;
    views:          string;
    width:          string;
};

export interface VideoGetterInterface {
    /**
     * getters
     *@public @function getAuthor         return the author of the video as a string
     *@public @function getAuthorId       return the id of the author of the video as a string
     *@public @function getDescription    return the description of the video as a string
     *@public @function getDirectory      return the directionry in which the video is stored as a string
     *@public @function getDuration       return the duration of the video as a string
     *@public @function getHeight         return the height in pixels of the video as a number
     *@public @function getHotness        return the hotness of the video as a number         [unusable 2019/12/18 - ?]
     *@public @function getId             return the id of the video as a string
     *@public @function getLikes          return the number of likes of the video as a number [unusable 2019/12/18 - ?]
     *@public @function getSize           return the size of the video in bytes as anumber;
     *@public @function getTitle          return the title of the video as a string
     *@public @function getTrackId        return the track id of the video as a string
     *@public @function getUploadTime     return the date the video is uploaded as a string
     *@public @function getViews          return the number of views of the video as a number [unusable 2019/12/18 - ?]
     *@public @function getWidth          return the width in pixels of the video as a number
     *
     */
    getAuthor:      (author: string)       => string;
    getAuthorId:    (authorId: string)     => string;
    getDescription: (description: string)  => string;
    getDirectory:   (directory: string)    => string;
    getDuration:    (duration: string)     => string;
    getHeight:      (height: number)       => number;
    getHotness:     (hotness: number)      => number;    // unusable
    getId:          (id: string)           => string;
    getLikes:       (likes: number)        => number;    // unusable
    getSize:        (size: number)         => number;
    getTitle:       (title: string)        => string;
    getTrackId:     (trackId: string)      => string;
    getUploadTime:  (uploadTime: string)   => string;
    getViews:       (views: number)        => number;    // unusable
    getWidth:       (width: number)        => number;
};

export interface APIGeneralGetMethods {
    /**
     * GET
     * @public @function getTrackId return the properties of the video of the track id, to fetch that specific video
     * 
     */
    getTrackId: (payload: TrackIdInterface) => Promise<VideoClassType | null>;
};

export interface APIGeneralPostMethods {
    /**
     * POST
     * @public @function postFilterArgs return an object, to fetch all videos that satisfy the arguments as well as the status
     * @public @function postVideoStats return status, to update some statistics of the video on a regular basis, as in 'likes', 'views'
     * 
     */
    postFilterArgs: (payload: VideoFilterArgInterface, abortSignal: AbortSignal)   => Promise<VideoAPIComplexPromiseReturn>;
    postVideoStats: (payload: VideoStatsArgInterface, abortSignal: AbortSignal)    => Promise<StatusInterface>;
};

export interface APILoginRequiredGetMethods {
    /**
     * GET
     * @public @function get return status, to cancel the process of the uploading vidoe file
     * 
     */
    get: (abortSignal: AbortSignal) => Promise<StatusInterface>;
};

export interface APILoginRequiredPostMethods {
    /**
     * POST
     * @public @function postTrackId        return status, to check if the auto generated track id has been used or is valid
     * @public @function postVideoId        return status, to delete any information of the video of that id
     * @public @function postVideoFile      return status, to upload a video file
     * @public @function postVideoArgs      return status, to upload the information, as in 'title', 'description', etc..., of the just uploaded video file
     * @public @function postFilterSelfArgs return an object, to fetch all the videos uploaded by that specific user as well as the status
     * 
     */
    postTrackId:        (payload: TrackIdInterface, abortSignal: AbortSignal)              => Promise<StatusInterface>;
    postVideoId:        (payload: VideoIdInterface, abortSignal: AbortSignal)              => Promise<StatusInterface>;
    postVideoFile:      (payload: VideoInterface, abortSignal: AbortSignal)                => Promise<StatusInterface>;
    postVideoArgs:      (payload: VideoInfoArgInterface, abortSignal: AbortSignal)         => Promise<StatusInterface>;
    postFilterSelfArgs: (payload: VideoFilterSelfArgInterface, abortSignal: AbortSignal)   => Promise<VideoAPIComplexPromiseReturn>;
};

export interface VideoAPIComplexPromiseReturn {
    videos: VideoClassType[] | null;
    status: number;
};