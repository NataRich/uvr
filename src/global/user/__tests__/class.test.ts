import { User, UserClassType } from "../class";

const user: UserClassType = new User({
    email: "example@test.com",
    identity: "1111",
    id: "1",
    isEmailAuthed: "1",
    name: "sampleName",
    numOfVideos: "10",
    registerDate: "2019-12-21",
    thumbImageSource: "thumbImageSource",
    mediumImageSource: "mediumImageSource",
});

it("Getters (of User) return correct types", () => {
    expect(typeof user.getEmail()).toStrictEqual("string");
    expect(typeof user.getIdentity()).toStrictEqual("number");
    expect(typeof user.getId()).toStrictEqual("string");
    expect(typeof user.getIsEmailAuthed()).toStrictEqual("boolean");
    expect(typeof user.getName()).toStrictEqual("string");
    expect(typeof user.getNumOfVideos()).toStrictEqual("number");
    expect(typeof user.getRegisterDate()).toStrictEqual("string");
    expect(typeof user.getThumbImage()).toStrictEqual("string");
    expect(typeof user.getMediumImage()).toStrictEqual("string");
});

it("Getters (of User) return correct values", () => {
    expect(user.getEmail()).toStrictEqual("example@test.com");
    expect(user.getIdentity()).toStrictEqual(1111);
    expect(user.getId()).toStrictEqual("1");
    expect(user.getIsEmailAuthed()).toStrictEqual(true);
    expect(user.getName()).toStrictEqual("sampleName");
    expect(user.getNumOfVideos()).toStrictEqual(10);
    expect(user.getRegisterDate()).toStrictEqual("2019-12-21");
    expect(user.getThumbImage()).toStrictEqual("thumbImageSource");
    expect(user.getMediumImage()).toStrictEqual("mediumImageSource");
});