export interface IIconInFrontInputAttributes {
    style: IIconInFrontInputStyle;
    props: IIconInFrontInputProps;
    onChangeHandler:    React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

export interface IIconInFrontInputStyle {
    borderColor:    string;
    borderRadius?:  number;
    fontSize:       number;
    hasBorder:      boolean;
    inputWidth:     number;
    imgWidth:       number;
};

export interface IIconInFrontInputProps {
    image:              string;
    placeholder:        string;
    type:               'password' | 'text';
    value:              string;
};