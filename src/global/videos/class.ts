import {
    APIVideoParamInterface,
    VideoGetterInterface,
} from './interface';
import {
    parseDuration,
    formatDuration,
    parseDate,
    formatDate,
} from '../utils/utils';

export class Video implements VideoGetterInterface {
    // represents a video

    constructor(video: APIVideoParamInterface) {
        this.author         = this.setAuthor(video.author);
        this.authorId       = this.setAuthorId(video.authorId);
        this.description    = this.setDescription(video.description);
        this.directory      = this.setDirectory(video.directory);
        this.duration       = this.setDuration(video.duration);
        this.height         = this.setHeight(video.height);
        this.hotness        = this.setHotness(video.hotness);
        this.id             = this.setId(video.id);
        this.likes          = this.setLikes(video.likes);
        this.size           = this.setSize(video.size);
        this.title          = this.setTitle(video.title);
        this.trackId        = this.setTrackId(video.trackId);
        this.uploadTime     = this.setUploadTime(video.uploadTime);
        this.views          = this.setViews(video.views);
        this.width          = this.setWidth(video.width);
    };

    private readonly author:        string;
    private readonly authorId:      string;
    private readonly description:   string;
    private readonly directory:     string;
    private readonly duration:      string;
    private readonly height:        number;    
    private readonly hotness:       number;
    private readonly id:            string;
    private readonly likes:         number;
    private readonly size:          number;
    private readonly title:         string;
    private readonly trackId:       string;
    private readonly uploadTime:    string;
    private readonly views:         number;
    private readonly width:         number;

    private setAuthor       = (author: string): string      =>  author;
    private setAuthorId     = (authorId: string): string    =>  authorId;
    private setDescription  = (description: string): string =>  description;
    private setDirectory    = (directory: string): string   =>  directory;
    private setDuration     = (duration: string): string    =>  formatDuration(parseDuration(parseInt(duration, 10)));
    private setHeight       = (height: string): number      =>  parseInt(height, 10);
    private setHotness      = (hotness: string): number     =>  parseInt(hotness, 10);
    private setId           = (id: string): string          =>  id;
    private setLikes        = (likes: string): number       =>  parseInt(likes, 10);
    private setSize         = (size: string): number        =>  parseInt(size, 10);
    private setTitle        = (title: string): string       =>  title;
    private setTrackId      = (trackId: string): string     =>  trackId;
    private setUploadTime   = (uploadTime: string): string  =>  formatDate(parseDate(uploadTime));
    private setViews        = (views: string): number       =>  parseInt(views, 10);
    private setWidth        = (width: string): number       =>  parseInt(width, 10);

    public getAuthor        = (): string => this.author;
    public getAuthorId      = (): string => this.authorId;
    public getDescription   = (): string => this.description;
    public getDirectory     = (): string => this.directory;
    public getDuration      = (): string => this.duration;
    public getHeight        = (): number => this.height;
    public getHotness       = (): number => this.hotness;
    public getId            = (): string => this.id;
    public getLikes         = (): number => this.likes;
    public getSize          = (): number => this.size;
    public getTitle         = (): string => this.title;
    public getTrackId       = (): string => this.trackId;
    public getUploadTime    = (): string => this.uploadTime;
    public getViews         = (): number => this.views;
    public getWidth         = (): number => this.width;
};

export type VideoClassType = Video;