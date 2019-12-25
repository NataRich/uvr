export interface InputAttributes {
    style: Style;
    props: Props;
    onChangeHandler: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

export interface Style {
    borderColor:        string;
    borderRadius:       number;
    fontSize:           number;
    helperColor?:       string;
    width:              number;
};

export interface Props {
    helperText?:        string;
    isRequired:         boolean;
    placeholder:        string;
    value:              string;
};