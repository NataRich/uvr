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

const parseDate = (date: string): number[] => {
    const dt: Date = new Date(date);
    return [ dt.getDate(), dt.getMonth(), dt.getFullYear(), dt.getHours(), dt.getMinutes() ];
};

const formatDate = (parsedDate: number[], now: Date): string => {
    const curDate: number       = now.getDate();
    const curMonth: number      = now.getMonth();
    const curYear: number       = now.getFullYear();
    const curHour: number       = now.getHours();
    const curMinute: number     = now.getMinutes();
    const uploadDate: number    = parsedDate[0];
    const uploadMonth: number   = parsedDate[1];
    const uploadYear: number    = parsedDate[2];
    const uploadHour: number    = parsedDate[3];
    const uploadMinute: number  = parsedDate[4];
    
    if (curYear > uploadYear) {
        let diff: number = curYear - uploadYear;
        return diff === 1 ? 'last year':`${diff} years ago`;
    } else if (curMonth > uploadMonth) {
        let diff: number = curMonth - uploadMonth;
        return diff === 1 ? 'last month':`${diff} months ago`;
    } else {
        let diff: number = curDate - uploadDate;
        if (diff < 7) {
            if (diff >= 1)
                return diff === 1 ? 'yesterday':`${diff} days ago`;
            else {
                if (curHour > uploadHour) {
                    let hourDiff: number = curHour - uploadHour;
                    return hourDiff === 1 ? '1 hour ago': `${hourDiff} hours ago`;
                } else {
                    let minuteDiff = curMinute - uploadMinute;
                    return minuteDiff <= 1 ? 'just now':`${minuteDiff} minutes ago`;
                };
            };
        } else
            return Math.trunc(diff / 7) === 1 ? 'last week':`${diff / 7} weeks ago`;
    };
};

export {
    parseDate,
    formatDuration,
    parseDuration,
    formatDate,
};