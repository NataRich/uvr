export interface InputAttributes {
    style: LabelEffectInputStyle;
    props: LabelEffectInputProps;
    onChangeHandler: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
};

export interface LabelEffectInputStyle {
    borderColor:        string;
    borderRadius:       number;
    fontSize:           number;
    helperColor?:       string;
    width:              number;
};

export interface LabelEffectInputProps {
    helperText?:        string;
    isRequired:         boolean;
    placeholder:        string;
    value:              string;
};