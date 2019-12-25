export interface InputAttributes {
    style: IconInFrontInputStyle;
    props: IconInFrontInputProps;
    onChangeHandler:    React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

export interface IconInFrontInputStyle {
    borderColor:    string;
    borderRadius?:  number;
    fontSize:       number;
    hasBorder:      boolean;
    inputWidth:     number;
    imgWidth:       number;
};

export interface IconInFrontInputProps {
    image:              string;
    placeholder:        string;
    type:               'password' | 'text';
    value:              string;
};