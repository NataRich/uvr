import { VideoLoginRequiredAPI } from '../../../global/videos/request';
import { APIMiddlewares } from '../../../middlewares/API/APIMiddlewares';

export const VAPI       = new VideoLoginRequiredAPI();
export const Middleware = new APIMiddlewares();

const generateTrackId = (): string => {
    const LENGTH: number = 24;
    let str: string = '';
    let arr: any[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 
                    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
                    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    for (let i = 0; i < LENGTH; i++) {
        let p: number = Math.round(Math.random() * (arr.length - 1));
        str += arr[p];
    }
    return str;
};

export {
    generateTrackId,
};