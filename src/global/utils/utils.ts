const parseDuration = (durInSec: number): number[] => {
    const SS: number = durInSec % 60;
    const MM: number = Math.trunc(durInSec / 60);
    const HH: number = Math.trunc(MM / 60);
    return [ HH, MM>=60?MM%60:MM, SS ]
};

const formatDuration = (parsedDuration: number[]): string => {
    const hour: string = parsedDuration[0].toString();
    const minute: string = parsedDuration[1].toString().length === 1 ? `0${parsedDuration[1]}`:`${parsedDuration[1]}`;
    const second: string = parsedDuration[2].toString().length === 1 ? `0${parsedDuration[2]}`:`${parsedDuration[2]}`;
    return !parsedDuration[0] ? `${minute}:${second}`:`${hour}:${minute}:${second}`;
};

const formatDate = (date: string, now?: string): string => {
    var timeStampNow: number = now === undefined ? new Date().getTime()/1000 : new Date(now).getTime()/1000;  // in seconds
    var timeStampDate: number = Math.trunc(new Date(date).getTime() / 1000);      // in seconds
    var difference: number = timeStampNow - timeStampDate;

    // rough time interval
    if (difference < 60*2)
        return `just now`;
    if (difference < 60*60)
        return `${Math.trunc(difference / 60)} minutes ago`;
    if (difference < 60*60*2)
        return `1 hour ago`;
    if (difference < 60*60*24) 
        return `${Math.trunc(difference / (60*60))} hours ago`;
    if (difference < 60*60*24*2)
        return `yesterday`;
    if (difference < 60*60*24*30)
        return `${Math.trunc(difference / (60*60*24))} days ago`;
    if (difference < 60*60*24*30*2)
        return `last month`;
    if (difference < 60*60*24*30*12)
        return `${Math.trunc(difference / (60*60*24*30))} months ago`;
    if (difference < 60*60*24*30*12*2)
        return `last year`;
    return `${Math.trunc(difference / (60*60*24*30*12))} years ago`;
};

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

const getBorderColor = (identity: number): string => {
    switch (identity) {
        case 1111:
            return '#0165A3';
        case 8888:
            return '#8A2BE2';
        case 9999:
            return '#FFFF00';
        default:
            return '#4169E1';
    };
};

export {
    parseDuration,
    formatDuration,
    formatDate,
    generateTrackId,
    getBorderColor,
};