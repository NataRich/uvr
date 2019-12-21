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

export {
    parseDuration,
    formatDuration,
    formatDate,
};