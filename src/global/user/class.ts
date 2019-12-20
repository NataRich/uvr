import {
    APIUserParamInterface,
    UserGetterInterface,
} from './interface';

export class User implements UserGetterInterface {
    // represents a user
    
    constructor(user: APIUserParamInterface) {
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

    private setEmail           = (email: string)              => { return email };
    private setIdentity        = (identity: string)           => { return parseInt(identity, 10) };
    private setId              = (id: string)                 => { return id };
    private setIsEmailAuthed   = (isEmailAuthed: string)      => { return parseInt(isEmailAuthed, 10) === 0 ? false:true };
    private setName            = (name: string)               => { return name };
    private setNumOfVideos     = (numOfVideos: string)        => { return parseInt(numOfVideos, 10) };
    private setRegisterDate    = (registerDate: string)       => { return registerDate };
    private setThumbImage      = (thumbImageSource: string)   => { return thumbImageSource };
    private setMediumImage     = (mediumImageSource: string)  => { return mediumImageSource };

    public getEmail            = () => { return this.email };
    public getIdentity         = () => { return this.identity };
    public getId               = () => { return this.id };
    public getIsEmailAuthed    = () => { return this.isEmailAuthed };
    public getName             = () => { return this.name };
    public getNumOfVideos      = () => { return this.numOfVideos };
    public getRegisterDate     = () => { return this.registerDate };
    public getThumbImage       = () => { return this.thumbImageSource };
    public getMediumImage      = () => { return this.mediumImageSource }
};

export type UserClassType = User