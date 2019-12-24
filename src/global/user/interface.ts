import { UserClassType } from './class';

export interface CodeInterface {
    code: number;
};

export interface EmailInterface {
    email: string;
};

export interface ImageInterface {
    image: FormData;
}

export interface PasswordInterface {
    password: string;
}

export interface StatusInterface {
    status: string;
};

export interface UsernameInterface {
    username: string;
};

export interface UserInterface {
    user: {
        authenticated:  string;
        date:           string;
        email:          string;
        identity:       string;
        id:             string;
        numVideos:      string;
        thumbImage:     string;
        mediumImage:    string;
        username:       string;
    };
};


export interface APIUserParamInterface {
    /**
     * The parameters are all of string type as a result of having JSON format
     * <getType<originalType>> -> <targetType>
     * 
     * @param email             the email address of the user               ||| <string<string>> -> <string>
     * @param identity          the identity of the user                    ||| <string<number>> -> <number>
     * @param id                the id number of the user                   ||| <string<number>> -> <string>
     * @param isEmailAuthed     if the email address is authenticated       ||| <string<number>> -> <boolean>
     * @param name              the username                                ||| <string<string>> -> <string>
     * @param numOfVideos       the number of videos uploaded by the user   ||| <string<number>> -> <number>
     * @param registerDate      the date the user registered the account    ||| <string<string>> -> <string>
     * @param thumbImageSource  the 80px * 80px profile image               ||| <string<string>> -> <string>
     * @param mediumImageSource the 150px * 150px profile image             ||| <string<string>> -> <string>
     * 
     */
    email:              string;
    identity:           string;
    id:                 string;
    isEmailAuthed:      string;
    name:               string;
    numOfVideos:        string;
    registerDate:       string;
    thumbImageSource :  string;
    mediumImageSource:  string;
};

export interface UserGetterInterface {
    /**
     * getters
     * @public @function getEmail          return the email address of the user as a string
     * @public @function getIdentity       return the identity of the user as a number
     * @public @function getId             return the id number as a string
     * @public @function getIsEmailAuthed  return if the email address is authenticated as a boolean
     * @public @function getName           return the username as a string
     * @public @function getNumOfVideos    return the number of videos uploaded by the user as a number
     * @public @function getRegisterDate   return the date the user registered the account as a string
     * @public @function getThumbImage     return the source of the small size profile image as a string
     * @public @function getMediumImage    return the source of the medium size profile image as a string
     * 
     */
    getEmail:           (email: string)             => string;
    getIdentity:        (identity: number)          => number;
    getId:              (id: string)                => string;
    getIsEmailAuthed:   (isEmailAuthed: boolean)    => boolean;
    getName:            (name: string)              => string;
    getNumOfVideos:     (numOfVideos: number)       => number;
    getRegisterDate:    (registerDate: string)      => string;
    getThumbImage:      (thumbImageSource: string)  => string;
    getMediumImage:     (mediumImageSource: string) => string;
};

export interface APIGeneralGetMethods {
    /**
     * GET
     * @public @function getCode return status, to resend the authentication code to the email
     * @public @function getUser return a User class, to fetch the properties of the user who has logged in
     * 
     */
    getCode: () => Promise<StatusInterface>;
    getUser: () => Promise<UserClassType | null>;
};

export interface APIGeneralPostMethods {
    /**
     * POST
     * @public @function postCode               return status, to verify if the code matches in order to authenticate the email address
     * @public @function postEmail              return status, to 
     * @public @function postPassword           return status, to verify if the input password is correct
     * @public @function postNewPassword        return status, to create a new password for a new or old account
     * @public @function postUsernameOrEmail    return status, to log in
     * @public @function postUsernameAndEmail   return status, to sign up
     * 
     */
    postCode:               (payload: CodeInterface, )                        => Promise<StatusInterface>;
    postEmail:              (payload: EmailInterface, )                       => Promise<StatusInterface>;
    postPassword:           (payload: PasswordInterface, )                    => Promise<StatusInterface>;
    postNewPassword:        (payload: PasswordInterface, )                    => Promise<StatusInterface>;
    postUsernameOrEmail:    (payload: EmailInterface | UsernameInterface, )   => Promise<StatusInterface>;
    postUsernameAndEmail:   (payload: EmailInterface & UsernameInterface, )   => Promise<StatusInterface>;
};

export interface APILoginRequiredGetMethods {
    /**
     * GET
     * @public @function getClear       return status, to log out
     * @public @function getUsername    return status, to change username
     * 
     */
    getClear:    ()                           => Promise<StatusInterface>;
    getUsername: (payload: UsernameInterface, ) => Promise<StatusInterface>;
};

export interface APILoginRequiredPostMethods {
    /**
     * POST
     * @public @function postEmail return status, to rebind email address
     * @public @function postImage return status, to change the profile image
     * 
     */
    postEmail: (payload: EmailInterface, ) => Promise<StatusInterface>;
    postImage: (payload: ImageInterface, ) =>  Promise<StatusInterface>;
};