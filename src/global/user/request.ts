import { DOMAIN } from '../root/Root';
import { User } from './class';
import { IAPIUserParam } from './interface';
import { UserClassType } from './class';
import {
    ICode,
    IEmail,
    IPassword,
    IImage,
    IStatus,
    IUsername,
    IUser,
} from './interface';
import {
    IAPIGeneralGetMethods,
    IAPIGeneralPostMethods,
} from './interface';
import {
    IAPILoginRequiredGetMethods,
    IAPILoginRequiredPostMethods,
} from './interface';

class UserAPI {
    protected readonly USER_ENDPOINT              = 'user';
    protected readonly LOGIN_ENDPOINT             = 'login';
    protected readonly LOGOUT_ENDPOINT            = 'logout';
    protected readonly SIGNUP_ENDPOINT            = 'signup';
    protected readonly AUTH_CODE_ENDPOINT         = 'auth_code';
    protected readonly RESEND_CODE_ENDPOINT       = 'resend_code';
    protected readonly CHANGE_IMAGE_ENDPOINT      = 'profile/change_image';
    protected readonly CHANGE_ACCOUNT_ENDPOINT    = 'profile/change_account';
    protected readonly VERIFY_PASSWORD_ENDPOINT   = 'verify_password';
    protected readonly CREATE_PASSWORD_ENDPOINT   = 'create_password';
    protected readonly FORGET_PASSWORD_ENDPOINT   = 'forget_password';

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

    protected useGetArg = async (url: string, payload: any): Promise<IStatus> => {
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

    protected useGetUser = async (url: string, abortSignal: AbortSignal): Promise<IUser & IStatus> => {
        const response: Response = await fetch(url, {
            signal: abortSignal,
            method: 'GET',
            credentials: 'include',
            headers: {
                'Access-Control-Allow-Origin': url
            },
        });
        return await response.json();
    };

    protected usePost = async (url: string, payload: any): Promise<IStatus> => {
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

    protected usePostFormData = async (url: string, payload: FormData): Promise<IStatus> => {
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
};

class UserGeneralAPI extends UserAPI implements IAPIGeneralGetMethods, IAPIGeneralPostMethods {
    public getCode = async (): Promise<IStatus> => {
        const URL: string = DOMAIN + this.RESEND_CODE_ENDPOINT;
        return await this.useGet(URL);
    };
    public getUser = async (abortSignal: AbortSignal): Promise<UserClassType | null> => {
        const URL: string = DOMAIN + this.USER_ENDPOINT;
        const response: IUser & IStatus = await this.useGetUser(URL, abortSignal);
        if(!response.user)
            return null;
        const user: IAPIUserParam = {
            email:              response.user.email,
            identity:           response.user.identity,
            id:                 response.user.id,
            isEmailAuthed:      response.user.authenticated,
            name:               response.user.username,
            numOfVideos:        response.user.numVideos,
            registerDate:       response.user.date,
            thumbImageSource:   response.user.thumbImage,
            mediumImageSource:  response.user.mediumImage,
        };
        return new User(user);
    };

    public postCode = async (payload: ICode): Promise<IStatus> => {
        const URL: string = DOMAIN + this.AUTH_CODE_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postEmail = async (payload: IEmail): Promise<IStatus> => {
        const URL: string = DOMAIN + this.FORGET_PASSWORD_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postNewPassword = async (payload: IPassword): Promise<IStatus> => {
        const URL: string = DOMAIN + this.CREATE_PASSWORD_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postPassword = async (payload: IPassword): Promise<IStatus> => {
        const URL: string = DOMAIN + this.VERIFY_PASSWORD_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postUsernameAndEmail = async (payload: IEmail & IUsername): Promise<IStatus> => {
        const URL: string = DOMAIN + this.SIGNUP_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postUsernameOrEmail = async (payload: IEmail | IUsername): Promise<IStatus> => {
        const URL: string = DOMAIN + this.LOGIN_ENDPOINT;
        return await this.usePost(URL, payload);
    };
};

class UserLoginRequiredAPI extends UserAPI implements IAPILoginRequiredGetMethods, IAPILoginRequiredPostMethods  {
    public getClear = async (): Promise<IStatus> => {
        const URL: string = DOMAIN + this.LOGOUT_ENDPOINT;
        return await this.useGet(URL);
    };
    public getUsername = async (payload: IUsername): Promise<IStatus> => {
        const URL: string = DOMAIN + this.CHANGE_ACCOUNT_ENDPOINT;
        return await this.useGetArg(URL, payload);
    };

    public postEmail = async (payload: IEmail): Promise<IStatus> => {
        const URL: string = DOMAIN + this.CHANGE_ACCOUNT_ENDPOINT;
        return await this.usePost(URL, payload);
    };
    public postImage = async (payload: IImage): Promise<IStatus> => {
        const URL: string = DOMAIN + this.CHANGE_IMAGE_ENDPOINT;
        return await this.usePostFormData(URL, payload.image);
    };
};

export const UGAPI = new UserGeneralAPI();
export const URAPI = new UserLoginRequiredAPI();