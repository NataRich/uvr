import {
    IAPIUserParam,
    IUserGetter,
} from './interface';

export class User implements IUserGetter {
    // represents a user
    
    constructor(user: IAPIUserParam) {
        this.email              = this.setEmail(user.email);
        this.identity           = this.setIdentity(user.identity);
        this.id                 = this.setId(user.id);
        this.isEmailAuthed      = this.setIsEmailAuthed(user.isEmailAuthed);
        this.name               = this.setName(user.name);
        this.numOfVideos        = this.setNumOfVideos(user.numOfVideos);
        this.registerDate       = this.setRegisterDate(user.registerDate);
        this.thumbImageSource   = this.setThumbImage(user.thumbImageSource);
        this.mediumImageSource  = this.setMediumImage(user.mediumImageSource);
    };

    private readonly email:             string;
    private readonly identity:          number;
    private readonly id:                string;
    private readonly isEmailAuthed:     boolean;
    private readonly name:              string;
    private readonly numOfVideos:       number;
    private readonly registerDate:      string;
    private readonly thumbImageSource:  string;
    private readonly mediumImageSource: string;

    private setEmail           = (email: string)              => email;
    private setIdentity        = (identity: string)           => parseInt(identity, 10);
    private setId              = (id: string)                 => id;
    private setIsEmailAuthed   = (isEmailAuthed: string)      => parseInt(isEmailAuthed, 10) === 0 ? false:true;
    private setName            = (name: string)               => name;
    private setNumOfVideos     = (numOfVideos: string)        => parseInt(numOfVideos, 10);
    private setRegisterDate    = (registerDate: string)       => registerDate;
    private setThumbImage      = (thumbImageSource: string)   => thumbImageSource;
    private setMediumImage     = (mediumImageSource: string)  => mediumImageSource;

    public getEmail            = () => this.email;
    public getIdentity         = () => this.identity;
    public getId               = () => this.id;
    public getIsEmailAuthed    = () => this.isEmailAuthed;
    public getName             = () => this.name;
    public getNumOfVideos      = () => this.numOfVideos;
    public getRegisterDate     = () => this.registerDate;
    public getThumbImage       = () => this.thumbImageSource;
    public getMediumImage      = () => this.mediumImageSource;
};

export type UserClassType = User