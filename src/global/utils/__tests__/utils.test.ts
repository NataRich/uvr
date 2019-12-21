import {
    formatDate,
    parseDuration,
    formatDuration,
} from '../utils';

const date: string = '2019-12-21 13:20:00';
const [ HH, MM, SS ]: number[] = parseDuration(375);

it("formatDate() returns a string that denotes the time interval", () => {
    let instant: string           = formatDate(date, '2019-12-21 13:20:00');
    let oneMinute: string         = formatDate(date, '2019-12-21 13:21:00');
    let twoMinutes: string        = formatDate(date, '2019-12-21 13:22:00');
    let thirtyMinutes: string     = formatDate(date, '2019-12-21 13:50:00');
    let oneHour: string           = formatDate(date, '2019-12-21 14:20:00');
    let aboutTwoHours: string     = formatDate(date, '2019-12-21 15:19:00');
    let twoHours: string          = formatDate(date, '2019-12-21 15:20:00');
    let yesterday: string         = formatDate(date, '2019-12-22 13:20:00');
    let oneHalfDay: string        = formatDate(date, '2019-12-22 19:00:00');
    let twoDays: string           = formatDate(date, '2019-12-23 13:20:00');
    let lastMonth: string         = formatDate(date, '2020-01-21 13:20:00');
    let aboutFourMonths: string   = formatDate(date, '2020-04-21 13:19:00');
    let fourMonths: string        = formatDate(date, '2020-04-21 13:20:00');
    let lastYear: string          = formatDate(date, '2020-12-21 13:20:00');
    let aboutFiveYears: string    = formatDate(date, '2024-12-21 13:19:00');
    let fiveYears: string         = formatDate(date, '2024-12-21 13:20:00');

    expect(instant).toStrictEqual("just now");
    expect(oneMinute).toStrictEqual("just now");
    expect(twoMinutes).toStrictEqual("2 minutes ago");
    expect(thirtyMinutes).toStrictEqual("30 minutes ago");
    expect(oneHour).toStrictEqual("1 hour ago");
    expect(aboutTwoHours).toStrictEqual("1 hour ago");
    expect(twoHours).toStrictEqual("2 hours ago");
    expect(yesterday).toStrictEqual("yesterday");
    expect(oneHalfDay).toStrictEqual("yesterday");
    expect(twoDays).toStrictEqual("2 days ago");
    expect(lastMonth).toStrictEqual("last month");
    expect(aboutFourMonths).toStrictEqual("4 months ago");
    expect(fourMonths).toStrictEqual("4 months ago");
    expect(lastYear).toStrictEqual("last year");
    expect(aboutFiveYears).toStrictEqual("5 years ago");
    expect(fiveYears).toStrictEqual("5 years ago");
});

it("parseDuration returns an array of numbers in the series of [ hours, minutes, seconds ]", () => {
    expect(HH).toStrictEqual(0);
    expect(MM).toStrictEqual(6);
    expect(SS).toStrictEqual(15);
});

it("formatDuration() returns a string in the format 'HH:MM:SS' or 'MM:SS'", () => {
    const duration: string = formatDuration([HH, MM ,SS]);
    expect(duration).toStrictEqual("06:15");
});