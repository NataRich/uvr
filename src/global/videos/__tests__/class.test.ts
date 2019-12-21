import { Video, VideoClassType } from "../class";

const video: VideoClassType = new Video({
    author: "sampleAuthor",
    authorId: "3",
    description: "A beautiful video",
    directory: "some/path/to/the/video/",
    duration: "375",
    height: "120",
    hotness: "300",
    id: "1",
    likes: "300",
    size: "20000",
    title: "sampleTitle",
    trackId: "RANDOMSTRING",
    uploadTime: "2019-12-21 13:20:00",
    views: "300",
    width: "180",
});

it("Getters (of Video) return correct types", () => {
    expect(typeof video.getAuthor()).toStrictEqual("string");
    expect(typeof video.getAuthorId()).toStrictEqual("string");
    expect(typeof video.getDescription()).toStrictEqual("string");
    expect(typeof video.getDirectory()).toStrictEqual("string");
    expect(typeof video.getDuration()).toStrictEqual("string");
    expect(typeof video.getHeight()).toStrictEqual("number");
    expect(typeof video.getHotness()).toStrictEqual("number");
    expect(typeof video.getId()).toStrictEqual("string");
    expect(typeof video.getLikes()).toStrictEqual("number");
    expect(typeof video.getSize()).toStrictEqual("number");
    expect(typeof video.getTitle()).toStrictEqual("string");
    expect(typeof video.getTrackId()).toStrictEqual("string");
    expect(typeof video.getUploadTime()).toStrictEqual("string");
    expect(typeof video.getViews()).toStrictEqual("number");
    expect(typeof video.getWidth()).toStrictEqual("number");
});

it("Getters (of Video) return correct values", () => {
    expect(video.getAuthor()).toStrictEqual("sampleAuthor");
    expect(video.getAuthorId()).toStrictEqual("3");
    expect(video.getDescription()).toStrictEqual("A beautiful video");
    expect(video.getDirectory()).toStrictEqual("some/path/to/the/video/");
    expect(video.getDuration()).toStrictEqual("06:15");
    expect(video.getHeight()).toStrictEqual(120);
    expect(video.getHotness()).toStrictEqual(300);
    expect(video.getId()).toStrictEqual("1");
    expect(video.getLikes()).toStrictEqual(300);
    expect(video.getSize()).toStrictEqual(20000);
    expect(video.getTitle()).toStrictEqual("sampleTitle");
    expect(video.getTrackId()).toStrictEqual("RANDOMSTRING");
    // expect(video.getUploadTime())  skip this test
    expect(video.getViews()).toStrictEqual(300);
    expect(video.getWidth()).toStrictEqual(180);
});